import { TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import { InputState } from "../../../pages/clients/register";

interface IRegisterForm {
    input: InputState,
    nextStep: VoidFunction,
    handleInput: any;
}

const FormCreateAccount = ({ input, nextStep, handleInput }) => {
    return (
        <div className="flex justify-center lg:items-center min-h-screen px-8 md:px-56 py-12">
            <div className="w-full bg-white p-12 rounded-[27px] shadow-md">
                <h2 className="font-[Open Sans] text-lg xl:text-[2rem] font-bold text-[#505050]">Buat Akun</h2>
                <div className="flex flex-col gap-4 my-8">
                    <div className="flex flex-col gap-2">
                        <label className="font-[Open Sans] text-xl font-semibold text-[#505050]">Nama Lengkap</label>
                        <TextInput 
                            title='Nama Lengkap' 
                            name="username" 
                            sizing='lg' 
                            onChange={handleInput}
                            value={input.username}
                            type='text'
                        />
                        <p className="font-[Open Sans] text-base font-semibold text-[#9E9E9E]">Seperti di KTP, Paspor, dan SIM</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="font-[Open Sans] text-xl font-semibold text-[#505050]">Email/No. Handphone</label>
                        <TextInput 
                            title='Email/No. Handphone' 
                            name="email" 
                            sizing='lg' 
                            onChange={handleInput}
                            value={input.email}
                            type='email'
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="font-[Open Sans] text-xl font-semibold text-[#505050]">Kata Sandi</label>
                        <TextInput 
                            title='Password' 
                            name="password" 
                            sizing='lg' 
                            onChange={handleInput}
                            value={input.password}
                            type='password'
                        />
                    </div>
                    <button
                        type="submit"
                        onClick={nextStep}
                        className="h-[57px] rounded-full bg-blue-500 hover:bg-blue-400 text-white font-bold font-[Open Sans] text-xl"
                    >
                        Daftar
                    </button>
                </div>
                <div className="flex flex-col items-center gap-8">
                    <hr className="w-full border-1" />
                    <button className="w-full h-[57px] border-blue-500 hover:bg-slate-200 border-2 rounded-full flex justify-center items-center gap-3 font-[Open Sans] text-xl font-bold text-blue-500">
                        <img src="https://i.ibb.co/PFChkDC/google.png" alt="Logo Google" />
                        Masuk dengan Google
                    </button>
                    <p className="font-[Open Sans] text-center text-sm font-normal leading-5 tracking-wide text-[#505050]">
                        Dengan membuat akun kamu menyetujui <Link to="/" className="text-blue-500">Syarat & Ketentuan</Link> dan{" "}
                        <Link to="/" className="text-blue-500">Kebijakan Privasi</Link> kami
                    </p>
                    <p className="font-[Open Sans] font-base font-semibold text-[#505050]">
                        Sudah terdaftar? <Link to="/login" className="text-blue-500 hover:text-blue-400">Masuk</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FormCreateAccount;
