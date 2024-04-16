import React from "react";
import Accordion from "./accordion";

const Checkin = () => {
  return (
    <>
      <div className="p-4 border-[1px] border-[#E0E0E0] rounded-lg">
        <Accordion
          title={
            <div className="flex gap-4 font-sans text-xl font-semibold leading-7 text-[#505050]">
              <div className="flex items-center">
                <img
                  src="https://i.ibb.co/YQMnThx/Lion-Air.png"
                  alt="Lion-Air"
                />
              </div>
              <p>Lion Air</p>
            </div>
          }
          answer={
            <div className="font-sans text-sm text-[#505050] font-medium leading-5">
              <p>
                &bull; Link : {/**/}
                <a
                  href="https://www.bookcabin.com/check-in"
                  className="text-blue-600"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  https://www.bookcabin.com/check-in
                </a>
              </p>
              <p>&bull; Pilih maskapai sesuai penerbangan yang digunakan</p>
              <p>&bull; Cara : Input kode booking dan nama belakang</p>
              <p>
                &bull; Web Check-in hanya dapat dilakukan untuk keberangkatan
                rute domestik
              </p>
              <p>
                &bull; Nama yang tertera pada Tiket harus sesuai dengan
                identitas (KTP)
              </p>
              <p>
                &bull; Web Check-in dibuka 12 jam sebelum waktu keberangkatan
                dan ditutup 45 menit sebelum waktu keberangkatan
              </p>
            </div>
          }
        />
      </div>
      <div className="p-4 border-[1px] border-[#E0E0E0] rounded-lg">
        <Accordion
          title={
            <div className="flex gap-12 font-sans text-xl font-semibold leading-7 text-[#505050]">
              <div className="flex items-center">
                <img
                  src="https://i.ibb.co/9cCQ0P6/Air-Asia.png"
                  alt="Air-Asia"
                />
              </div>
              <p>Air Asia</p>
            </div>
          }
          answer={
            <div className="font-sans text-sm text-[#505050] font-medium leading-5">
              <p>
                &bull; Link : {/* */}
                <a
                  href="https://www.airasia.com/check-in/id/id"
                  className="text-blue-600"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  https://www.airasia.com/check-in/id/id
                </a>
              </p>
              <p>&bull; Cara : Input kode booking dan nama belakang</p>
              <p>
                &bull; Dibuka 14 hari sebelum keberangkatan dan ditutup 1 jam
                sebelum keberangkatan
              </p>
              <p>
                &bull; Web check-in tidak berlaku untuk Ibu hamil, pax dengan
                infant & anak-anak, pax berkebutuhan khusus, dan pax yang
                mengalami perubahan jadwal terbang jadi sarankan check-in manual
                di Bandara
              </p>
            </div>
          }
        />
      </div>
      <div className="p-4 border-[1px] border-[#E0E0E0] rounded-lg">
        <Accordion
          title={
            <div className="flex gap-4 font-sans text-xl font-semibold leading-7 text-[#505050]">
              <div className="flex items-center">
                <img
                  src="https://i.ibb.co/qgTyk3t/Citilink.png"
                  alt="Citilink"
                />
              </div>
              <p>Citilink</p>
            </div>
          }
          answer={
            <div className="font-sans text-sm text-[#505050] font-medium leading-5">
              <p>
                &bull; Link : {/* */}
                <a
                  href="https://book.citilink.co.id/searchwebcheckin.aspx"
                  className="text-blue-600"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  https://book.citilink.co.id/searchwebcheckin.aspx
                </a>
              </p>
              <p>
                &bull; Web Check-in dibuka mulai 100 hari hingga 30 menit
                sebelum waktu keberangkatan. Khusus untuk keberangkatan dari
                Bandara Soekarno-Hatta batas maksimal Check-in hingga 45 Menit
                sebelum waktu keberangkatan.
              </p>
              <p>
                &bull; Web Check-In hanya diperbolehkan untuk tiket dengan
                status Confirmed / Terbayar Penuh / Tidak ada tunggakan
                pembayaran.
              </p>
              <p>
                &bull; Untuk proses validasi, Web Check-In memerlukan Kode
                Booking (6 digit) dan Nama terakhir penumpang. Silahkan periksa
                kembali nama penumpang yang tertulis di tiket anda.
              </p>
              <p>
                &bull; Penumpang diharuskan berada di ruang tunggu 40 menit
                sebelum waktu keberangkatan (seperti yang tertera pada boarding
                pass)
              </p>
              <p>
                &bull; Website check in dan mobile check in tidak berlaku untuk
                penerbangan Internasional, website check in dan mobile check in
                hanya berlaku untuk penerbangan Domestik.
              </p>
            </div>
          }
        />
      </div>
      <div className="p-4 border-[1px] border-[#E0E0E0] rounded-lg">
        <Accordion
          title={
            <div className="flex gap-16 font-sans text-xl font-semibold leading-7 text-[#505050]">
              <div className="flex items-center">
                <img
                  src="https://i.ibb.co/wBCsZMX/Garuda-Indonesia.png"
                  alt="Garuda-Indonesia"
                />
              </div>
              <p>Garuda Indonesia</p>
            </div>
          }
          answer={
            <div className="font-sans text-sm text-[#505050] font-medium leading-5">
              <p>
                &bull; Link : {/* */}
                <a
                  href="https://digital.garuda-indonesia.com/ssci/identification"
                  className="text-blue-600"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  https://digital.garuda-indonesia.com/ssci/identification
                </a>
              </p>
              <p>
                &bull; Pilih Jenis Identifikasi (Referensi Pemesanan / Nomor
                tiket)
              </p>
              <p>
                &bull; Input kode booking dan nama belakang jika memilih
                Referensi Pemesanan atau Input 13 digit nomor e-ticket dan nama
                belakang jika memilih Nomor E-tiket
              </p>
              <p>
                &bull; Web check-in tersedia mulai dari 48 jam hingga 2 jam
                sebelum waktu keberangkatan untuk penerbangan domestik dan 48
                jam hingga 4 jam sebelum waktu keberangkatan untuk penerbangan
                internasional
              </p>
              <p>
                &bull; Web check-in tidak berlaku untuk Ibu hamil, pax dengan
                infant & anak-anak, pax berkebutuhan khusus, dan pax yang
                mengalami perubahan jadwal terbang jadi sarankan check-in manual
                di Bandara
              </p>
              <p>
                &bull; Web Check-in dibuka 12 jam sebelum waktu keberangkatan
                dan ditutup 45 menit sebelum waktu keberangkatan
              </p>
            </div>
          }
        />
      </div>
    </>
  );
};

export default Checkin;
