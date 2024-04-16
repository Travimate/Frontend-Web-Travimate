import { useState, useEffect, useCallback } from "react";

import travimate from "../api/travimate";
import { useRouter } from "../routes/hooks";
import travimatev2 from "../api/tavimatev2";

interface ApiResponseState {
    meta: any; // eslint-disable-line @typescript-eslint/no-explicit-any
    data: any; // eslint-disable-line @typescript-eslint/no-explicit-any
    resError: any; 
    error: boolean;
    loading: boolean;
    status: number;
}

export const UseFetch = (url: string, params?: any) => {

    const router = useRouter();
    const accessToken = '';

    const [apiResponse, setApiResponse] = useState<ApiResponseState>({
        meta: [],
        data: [],
        resError: [],
        error: false,
        loading: true,
        status: 0
    });

    const fetchData = useCallback( async () => {

        setApiResponse((prev) => ({ ...prev, loading: true }));

        try {
            const response = await travimatev2.get(`${url}`, {
                headers: {
                    Authorization: accessToken,
                },
            });
            const statusResponse = response.status;        
            if (statusResponse === 200) {
                setApiResponse({
                    error: false,
                    loading: false,
                    resError: '',
                    data: response.data?.data,
                    meta: response.data?.meta,
                    status: 200
                });
            }
        } catch (error) {
            const responseErrorCode = error?.response?.data?.error?.code
            if (responseErrorCode === 'UNAUTHORIZED') {
                setApiResponse({
                    meta: [],
                    data: [],
                    resError: [],
                    error: false,
                    loading: true,
                    status: 0
                });
                router.push('/signin')
                // dispatchCustom(logoutClient())
                window.location.reload()
                console.clear()
                // setSession(null)
            }

            setApiResponse({
                meta: error,
                data: [],
                resError: error?.response?.data?.error,
                error: true,
                loading: false,
                status: 400
            });
        }
        
    }, [url, accessToken]); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        fetchData();
    }, [fetchData]);  // eslint-disable-line react-hooks/exhaustive-deps

    return { ...apiResponse, fetchData };
}