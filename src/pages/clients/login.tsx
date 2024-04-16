import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { FormProvider as Form, UseFormReturn } from 'react-hook-form';

import { TextInput } from "flowbite-react";
import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import travimate from '../../api/travimate';
import { AUTH_API_URL, SUCCESS_STATUS_API_RESPONSE, endpoints } from '../../utils/endpoint';
import { useDispatch } from 'react-redux';
import { setDataClient } from '../../store/clients/client.slice';

const LoginClient = () => {

    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const LoginSchema = Yup.object().shape({
        name: Yup.string().required('Email is required'),
        password: Yup.string().required('Password is required'),
    });

    const defaultValues = useMemo(
        () => ({
            name: '',
            password: ''
        }),
    []
    );

    const methods = useForm({
        resolver: yupResolver(LoginSchema),
        defaultValues,
    });

    
    const {
        reset,
        watch,
        control,
        setValue,
        handleSubmit,
        formState: { isSubmitting, isValid },
    } = methods;
    
    const values = watch();

    // console.log(values.name, values.password)

    const onSubmit = handleSubmit(async (data) => {
        setLoading(true)
        const bodyForm = {
            email: data.name,
            password: data.password
        }

        // AUTH_API_URL endpoints.auth.login
        try {
            await travimate.post(`${AUTH_API_URL}/signin`, bodyForm
            // , {
            //     headers: {
            //         'Client-Key': ClientKey,
            //         Authorization: `Bearer ${accessToken}`
            //     }
            // }
            ).then((response) => {
                console.log(response)
                const statusResponse = response
                if (statusResponse.status === SUCCESS_STATUS_API_RESPONSE) {
                    sessionStorage.setItem('at', statusResponse?.data?.accessToken)
                    dispatch(setDataClient({
                        profileClient: statusResponse?.data 
                    }))
                    window.location.href = "/"
                    setLoading(false) 
                }
            }).catch(() => {
                setLoading(false)
            })
        } catch (error) {
            setLoading(false)
        }    
    })

    return (
        <section className="login flex h-[100vh] w-full justify-between">
            {/* Gambar di sisi kiri */}
            <div className="hidden lg:block lg:w-4/5 relative bg-blue-500 justify-center md:flex md:flex-col">
                <h2 className="font-[Open Sans] font-bold text-white my-auto xl:mt-44 xl:text-[32px] xl:text-center md:mt-20 md:text-[22px] md:text-center">Pulang Kampung Tanpa Hambatan.</h2>
                <div className="w-[100%] h-[100vh] absolute bottom-0">
                    <img src="https://i.ibb.co/ftcDBrk/Group.png" className="w-[100%] h-[100%]" alt="Background" />
                </div>
            </div>

            {/* Form login di sisi kanan */}
            <div className="flex justify-center items-center w-full bg-sky-100 px-8">
                <div className="bg-white rounded-[27px] p-12 shadow-lg">
                    <h2 className="font-[Open Sans] text-[32px] font-bold text-[#413f3f]">Masuk ke Akunmu</h2>
                    <Form {...methods}>
                        <form className="flex flex-col gap-6 my-8" onSubmit={onSubmit}>
                            <div className="flex flex-col gap-2">
                                <label className="font-[Open Sans] text-xl font-semibold text-[#727070]">Email</label>
                                <TextInput title='Email' name="email" sizing='lg' onChange={(e)=>setValue('name', e.target.value)} type='email'/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-[Open Sans] text-xl font-semibold text-[#727070]">Kata Sandi</label>
                                <TextInput title='Password' name="password" sizing='lg' onChange={(e)=>setValue('password', e.target.value)} type='password'/>
                                <a href="/forgot-password" className="font-[Open Sans] text-base font-semibold text-blue-500">Lupa kata sandi?</a>
                            </div>
                            <button type="submit" disabled={/*!isValid ||*/ loading} className={`h-[57px] rounded-full ${/*!isValid ||*/ loading ? "bg-blue-300" : "bg-blue-500"} hover:bg-blue-400 text-white font-bold font-[Open Sans] text-xl`}>{loading ? 'Loading ....' : 'Masuk'}</button>
                        </form>
                    </Form>
                    <div className="flex flex-col items-center gap-8">
                        <hr className="w-full border-1" />
                        <button className="w-full h-[57px] border-blue-500 hover:bg-slate-200 border-2 rounded-full flex justify-center items-center gap-3 font-[Open Sans] text-xl font-bold text-blue-500">
                            <img src="https://i.ibb.co/PFChkDC/google.png" alt="Logo Google" />
                            Masuk dengan Google
                        </button>
                        <p className="font-[Open Sans] text-center text-sm font-normal leading-5 tracking-wide text-[#727070]">
                            Dengan masuk akun kamu menyetujui <Link to="/" className="text-blue-500">Syarat & Ketentuan</Link> dan <Link to="/" className="text-blue-500">Kebijakan Privasi</Link> kami
                        </p>
                        <p className="font-[Open Sans] font-base font-semibold text-[#727070]">
                            Belum punya akun? <Link to="/register" className="text-blue-500 hover:text-blue-400">Daftar</Link>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LoginClient;