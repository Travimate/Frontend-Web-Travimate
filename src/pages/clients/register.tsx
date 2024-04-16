import React, { useMemo, useState } from "react";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { FormProvider as Form, UseFormReturn } from 'react-hook-form';

import FormCreateAcoount from "../../components/layout-clients/part/form-create-account";
import FormAdditionalInformation from "../../components/layout-clients/part/form-additional-information";
import BackgroundRegister from "../../components/layout-clients/part/background-register";
import travimate from "../../api/travimate";
import { AUTH_API_URL, SUCCESS_STATUS_API_RESPONSE } from "../../utils/endpoint";

export interface InputState {
    username: string;
    email: string;
    password: string;
    dob: string;
    phone: string;
    greeting: string;
}

const RegisterClient = () => {
    const [input, setInput] = useState<InputState>({
        username: '',
        email: '',
        password: '',
        dob: '',
        phone: '',
        greeting: '',
    });

    // console.log(username)

    const [currentStep, setCurrentStep] = useState<number>(1);
    const [loading, setLoading] = useState(false)

    const LoginSchema = Yup.object().shape({
        name: Yup.string().nullable(),
        password: Yup.string().nullable(),
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

    console.log(input)

    const handleRegister = handleSubmit(async (data) => {

        const bodyForm = {
            username: input.username,
            email: input.email,
            password: input.password,
            dob: input.dob,
            phone: input.phone,
            greeting: input.greeting,
          }

        try {
            await travimate.post(`${AUTH_API_URL}/signup`, bodyForm
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
                    // sessionStorage.setItem('at', statusResponse?.data?.accessToken)
                    // dispatch(setDataClient({
                    //     profileClient: statusResponse?.data?.user 
                    // }))
                    window.location.href = "/login"
                    setLoading(false) 
                }
            }).catch((error) => {
                console.error('Error:', error);
                setLoading(false)
            })
        } catch (error) {
            
        }
    })

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value;
        let name = event.target.name;

        setInput({ ...input, [name]: value });
    };

    // const handleRegister = (event: React.FormEvent<HTMLFormElement>) => {
    //     event.preventDefault();
    //     alert('Hahah')
    //     let { username, email, password, dob, phone, greeting } = input;
    //     console.log(input);
    // };

    const nextStep = () => {
        setCurrentStep(currentStep + 1);
    };

    return (
        <section className="register max-h-screen my-auto lg:flex bg-sky-100">
            <BackgroundRegister />
            <div className="w-[55%] min-h-screen">
                {currentStep === 1 && (
                    <Form {...methods}>
                        <FormCreateAcoount input={input} nextStep={nextStep} handleInput={handleInput} />
                    </Form>
                )}
                {currentStep === 2 && (
                    <FormAdditionalInformation input={input} handleInput={handleInput} handleRegister={handleRegister} />
                )}
            </div>
        </section>
    );
}

export default RegisterClient;