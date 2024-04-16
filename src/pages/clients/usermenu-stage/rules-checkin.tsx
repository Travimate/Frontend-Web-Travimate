import React from "react";
import Checkin from "../../../components/layout-clients/part/checkin";

const RulesCheckin = () => {
  return (
    <div className="bg-white w-full rounded-[27.51px]">
      <div className="pt-8">
        <img
          src="https://i.ibb.co/9TVvw7G/Ilustrasi.png"
          alt="Ilustrasi"
          className="w-full"
        />
      </div>
      <div className="flex flex-col gap-4 p-8">
        <h2 className="font-sans text-[28px] font-bold leading-10 text-[#505050] text-center">
          Selamat Datang di Layanan Web check-in
        </h2>
        <Checkin />
      </div>
    </div>
  );
};

export default RulesCheckin;
