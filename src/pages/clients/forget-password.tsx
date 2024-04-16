import React, { useState } from "react";
import OtpInput from 'react-otp-input';
import { Link } from "react-router-dom";

interface InputState {
    email: string;
}

const ForgetPassword = () => {
    const [input, setInput] = useState<InputState>({
        email: '',
    });
    const [otp, setOtp] = useState('');
    const [currentStep, setCurrentStep] = useState<number>(1);

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value;
        let name = event.target.name;

        setInput({ ...input, [name]: value });
    };

    const nextStep = () => {
        if (input.email.trim() === '') {
            alert("Mohon isi alamat email terlebih dahulu.");
        } else {
            setCurrentStep(currentStep + 1);
        }
    };

    return (
        <section className="forgot-password relative">
            <img src="https://i.ibb.co/8BPtqHz/Lupa-kata-sandi.png" className="h-screen object-cover lg:w-screen lg:h-screen" alt="Background-Images" />

            {currentStep === 1 && (
                <div className="flex items-center justify-center w-full h-full absolute top-0">
                    <div className="bg-white mx-8 p-8 rounded-[27px] flex flex-col items-center">
                        <div className="flex flex-col gap-8 lg:w-[458px]">
                            <div className="flex flex-col gap-4 items-center text-center">
                                <h2 className="font-[Open Sans] text-[32px] font-bold text-[#505050]">Lupa Kata Sandi?</h2>
                                <p className="font-[Open Sans] text-xl font-semibold text-[#505050]">Tetap tenang! Kamu hanya perlu menuliskan alamat emailmu untuk membuat kata sandi baru </p>
                            </div>
                            <form className="flex flex-col gap-8">
                                <div className="flex flex-col gap-2">
                                    <label className="font-[Open Sans] text-xl font-semibold text-[#505050]">Email</label>
                                    <input
                                        name="email"
                                        type="text"
                                        value={input.email}
                                        onChange={handleInput}
                                        className="h-[57px] rounded-full bg-gray-100 focus:outline-none p-6"
                                    />
                                </div>
                                <button
                                    type="button"
                                    onClick={nextStep}
                                    className="h-[57px] rounded-full bg-blue-500 text-white font-bold font-[Open Sans] text-xl"
                                >
                                    Kirim
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {currentStep === 2 && (
                <div className="flex items-center justify-center w-full h-full absolute top-0">
                    <div className="bg-white mx-8 px-8 py-12 rounded-[27px] flex flex-col items-center">
                        <div className="flex flex-col items-center gap-10 lg:w-[458px]">
                            <div className="flex flex-col gap-4 items-center text-center">
                                <h2 className="font-[Open Sans] text-[32px] font-bold text-[#505050]">Verifikasi Emailmu</h2>
                                <p className="font-[Open Sans] text-xl font-semibold text-[#505050]">Isi dengan OTP yang dikirimkan ke: d•••••••@gmail.com</p>
                            </div>
                            <OtpInput
                                value={otp}
                                onChange={setOtp}
                                numInputs={4}
                                renderSeparator={<span>-</span>}
                                renderInput={(props) => <input {...props} />}
                                containerStyle=""
                                inputStyle="mx-4 text-[32px] border-2 px-2 rounded-md focus:outline-none focus:border-blue-500 bg-[#E0E0E0]"
                            />
                            <Link to="/" className="font-[Open Sans] text-xl font-semibold text-[#505050]">Kirimkan kode OTP baru <b>60d</b></Link>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default ForgetPassword;
