import React from "react";
import { Link } from "react-router-dom";

const FormAdditionalInformation = ({ input, handleInput, handleRegister }) => {
    return (
            <div className="flex justify-center lg:items-center min-h-screen px-8 md:px-56 py-12">
                <div className="w-full bg-white p-12 rounded-[27px] shadow-md">
                    <h2 className="font-[Open Sans] text-[32px] font-bold text-[#505050]">Informasi Tambahan</h2>
                    <form onSubmit={handleRegister} className="flex flex-col gap-8 mt-8 my-4">
                        <div className="flex flex-col gap-2">
                            <label className="font-[Open Sans] text-xl font-semibold text-[#505050]">Tanggal Lahir</label>
                            <input
                                value={input.dob}
                                onChange={handleInput}
                                name="dob"
                                type="date"
                                className="h-[57px] rounded-full bg-gray-100 focus:outline-none p-6"
                            />
                            <p className="font-[Open Sans] text-base font-semibold text-[#9E9E9E]">Pastikan sudah sesuai dengan KTP/Paspor</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="font-[Open Sans] text-xl font-semibold text-[#505050]">Nomor Ponsel</label>
                            <input
                                value={input.phone}
                                onChange={handleInput}
                                name="phone"
                                type="text"
                                className="h-[57px] rounded-full bg-gray-100 focus:outline-none p-6"
                            />
                        </div>
                        <div className="flex flex-col gap-[18px]">
                            <label className="font-[Open Sans] text-xl font-semibold text-[#505050]">Sapaan</label>
                            <div className="flex gap-8">
                                <div className="flex gap-2 items-center">
                                    <input type="radio" name="greeting" value="tuan" onChange={handleInput} className="w-6 h-6" />
                                    <label htmlFor="tuan" className="font-[Open Sans] text-xl font-semibold text-[#505050]">Tuan</label>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <input type="radio" name="greeting" value="nyonya" onChange={handleInput} className="w-6 h-6" />
                                    <label htmlFor="nyonya" className="font-[Open Sans] text-xl font-semibold text-[#505050]">Nyonya</label>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <input type="radio" id="nona" name="greeting" value="nona" onChange={handleInput} className="w-6 h-6" />
                                    <label htmlFor="nona" className="font-[Open Sans] text-xl font-semibold text-[#505050]">Nona</label>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="h-[57px] rounded-full bg-blue-500 hover:bg-blue-400 text-white font-bold font-[Open Sans] text-xl">
                            Daftar
                        </button>
                    </form>
                </div>
            </div>
    );
};

export default FormAdditionalInformation;
