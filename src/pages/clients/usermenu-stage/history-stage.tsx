import React, { useState } from 'react';
import { HistoryIllustration } from "../../../assets/ilustrations";
import EmptyState from "../../../components/layout-clients/empty-state/empty-state";
import { GoArrowSwitch } from "react-icons/go";
import RoundTripOnePerson from "../../../components/layout-clients/part/round-trip-one-person";
import RoundTripMorePerson from "../../../components/layout-clients/part/round-trip-more-person";
import OneWay from "../../../components/layout-clients/part/one-way";

interface IHistoryStage {
  setRiwayat: (state: string) => void;
  riwayat: string;
  type?: "oneWay" | "roundTrip";
  passengers?: number;
}

const HistoryStage = ({ setRiwayat, riwayat }: IHistoryStage) => {
  const [showDetails, setShowDetails] = useState(false);

  const renderDetails = [
    <OneWay key="oneWay" />,
    <RoundTripOnePerson key="roundTripOnePerson" />,
    <RoundTripMorePerson key="roundTripMorePerson" />
  ];

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  if (riwayat === "etiket" && showDetails) {
    return renderDetails;
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="bg-white p-8 w-full rounded-[27.51px]">
        <h2 className="font-bold text-lg text-gray-600">Riwayat Pembayaran</h2>
        <div className="flex flex-row gap-3 mt-4 text-blue-800">
          <button onClick={() => setRiwayat("pending")}>
            <div className={`px-12 py-4 rounded-full ${
              riwayat === "pending" 
                ?"bg-blue-400 bg-opacity-20 font-semibold " 
                :"ring-1 ring-blue-700"}`
              }>
              Menunggu Pembayaran
            </div>
          </button>
          <button onClick={() => setRiwayat("etiket")}>
            <div className={`px-12 py-4 rounded-full ${
              riwayat === "etiket" 
                ?"bg-blue-400 bg-opacity-20 font-semibold " 
                :"ring-1 ring-blue-700"}`
              }>
              E-Tiket aktif
            </div>
          </button>
          <button onClick={() => setRiwayat("selesai")}>
            <div className={`px-12 py-4 rounded-full ${
              riwayat === "selesai" 
                ?"bg-blue-400 bg-opacity-20 font-semibold " 
                :"ring-1 ring-blue-700"}`
              }>
              Selesai
            </div>
          </button>
        </div>
      </div>

      <div className="bg-white p-8 w-full rounded-[27.51px]">
        {riwayat === "pending" && (
          <div>
            <div>
              <div className="flex flex-col gap-2 mb-2">
                <p className="text-xl font-semibold">Order ID : 1</p>
                <div className="flex flex-row gap-2 w-full items-center font-semibold text-xl">
                  <p>Jakarta (CGK) </p>
                  <GoArrowSwitch className="w-6 h-6" />
                  <p>Bali (DPS)</p>
                </div>
                <p className="font-semibold text-xl">Rp1.368.000 </p>
              </div>
              <button className="w-full">
                <div className="rounded-full px-12 py-4 bg-amber-500 font-bold text-lg text-white">
                  Pembayaran berakhir 00:59:59
                </div>
               </button>
             </div>
          </div>
        )}


        {/* Ini riwayat */}
        {riwayat === "etiket" && (
        // Blok Satu
        <div>
          <div className="flex flex-col mb-2 gap-2">
            <div className="flex flex-row gap-2 w-full items-center font-semibold text-xl">
              <p>Jakarta (CGK) </p>
              <GoArrowSwitch className="w-6 h-6" />
              <p>Bali (DPS)</p>
            </div>
            <p className="text-xl font-normal">
              Senin, 7 Juli 2024 * 07.00-08.35
            </p>
            <p className="font-normal text-xl">
              Lion Air * Bandara Internasional Soekarno-Hatta, Terminal,
              Terminal 2E{" "}
            </p>
          </div>
          <button className="w-1/3 mb-10" onClick={toggleDetails}>
            <div className="rounded-full px-12 py-4 bg-green-600 font-bold text-lg text-white">
              E-ticket diterbitkan
            </div>
          </button>

          <hr />

          {/* Blok kedua */}
          <div className="mt-10">
            <div className="flex flex-col mb-2 gap-2">
              <div className="flex flex-row gap-2 w-full items-center font-semibold text-xl">
                <p>Bali (DPS)</p>
                <GoArrowSwitch className="w-6 h-6" />
                <p>Jakarta (CGK) </p>
              </div>
              <p className="text-xl font-normal">
                Selasa, 8 Juli 2024 * 07.00-08.35
              </p>
              <p className="font-normal text-xl">
                Lion Air * Bandara Internasional Soekarno-Hatta, Terminal,
                Terminal 2E{" "}
              </p>
            </div>
            <button className="w-1/3 mb-10" onClick={toggleDetails}>
              <div className="rounded-full px-12 py-4 bg-green-600 font-bold text-lg text-white">
                E-ticket diterbitkan
              </div>
            </button>
          </div>

          <hr />

          {/* Blok ketiga */}
          <div className="mt-10">
            <div className="flex flex-col mb-2 gap-2">
              <div className="flex flex-row gap-2 w-full items-center font-semibold text-xl">
                <p>Jakarta (CGK) </p>
                <GoArrowSwitch className="w-6 h-6" />
                <p>Bali (DPS)</p>
              </div>
              <p className="text-xl font-normal">
                Rabu, 9 Juli 2024 * 07.00-08.35
              </p>
              <p className="font-normal text-xl">
                Lion Air * Bandara Internasional Soekarno-Hatta, Terminal,
                Terminal 2E{" "}
              </p>
            </div>
            <button className="w-1/3" onClick={toggleDetails}>
              <div className="rounded-full px-12 py-4 bg-green-600 font-bold text-lg text-white">
                E-ticket diterbitkan
              </div>
            </button>
          </div>
        </div>
      )}

        {/* ini yg selesai */}
        {riwayat === "selesai" && (
          <div className="mt-4">
            <EmptyState
              ilustration={<HistoryIllustration />}
              title="Kamu belum memiliki e-ticket"
              description="Yuk, pesan tiket dulu, dan rencanakan perjalananmu! "
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default HistoryStage;