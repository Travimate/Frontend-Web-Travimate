import { ChangeEvent, useState } from "react";
import { PaymentDataKey } from "./payment-page-view";
import { useSelector } from 'react-redux'
import { Dropdown, Label, Radio, Select, TextInput } from "flowbite-react";
import { selectDataFlighState } from "../../../store/flights/flights.slice";
import { FlightData } from "../../../types";

interface ICardPayment {
  handlePayment?: (e: any) => void;
  onSubmit: any;
  handleSetValueInput: ({key, values}: {key: PaymentDataKey, values: any}) => void;
  values: any;
}

const CardPayment = ({onSubmit, values, handleSetValueInput}:ICardPayment) => {

  const dataDetailFlight = useSelector(selectDataFlighState)

  const [checked, setChecked] = useState<"bca" | "credit">("bca");

  const renderCardLeft = (
    <>
      <div className="font-bold text-xl text-slate-700 mb-18">
        Pilih Metode Pembayaran
      </div>
      <div 
        className="mt-4 text-lg flex gap-6 text-slate-600">
          <div className="flex items-center gap-2">
            <Radio 
              onChange={(e)=>{
                handleSetValueInput({
                  key: 'payment_method',
                  values: e.target.value
                })
              }}
              id="united-state" name="payment_method" value="BCA" defaultChecked />
            <Label htmlFor="united-state">BCA Virtual Account</Label>
          </div>
          <div className="flex items-center gap-2">
            <Radio 
              onChange={(e)=>{
                handleSetValueInput({
                  key: 'payment_method',
                  values: e.target.value
                })
              }}
              id="germany" name="payment_method" value="Card" />
            <Label htmlFor="germany">Kartu kredit/debit</Label>
          </div>
      </div>
      <div className="mt-4 text-lg text-slate-600">
          <div className="flex flex-col gap-2 mb-4">
              <label className="font-[Open Sans] text-lg font-semibold text-[#727070]">No Kartu</label>
              <TextInput title='no_card. Handphone' name="no_card" sizing='md' onChange={(e: any)=> {
                handleSetValueInput({
                  key: 'no_card',
                  values: e.target.value
                })
              }} placeholder="No kartu milikmu" type='text'/>
          </div>

          <div className="mb-1 flex justify-between gap-4">
            <div className="w-full">
              <div className="flex flex-col gap-2 mb-4">
                  <label className="font-[Open Sans] text-lg font-semibold text-[#727070]">Masa Berlaku</label>
                  <TextInput title='expired_card. Handphone' name="expired_card" sizing='md' onChange={(e: any)=> {
                    handleSetValueInput({
                      key: 'expired_card',
                      values: e.target.value
                    })
                  }} type='date'/>
              </div>
            </div>
            <div className="w-full">
              <div className="flex flex-col gap-2 mb-4">
                  <label className="font-[Open Sans] text-lg font-semibold text-[#727070]">CVC / CVV</label>
                  <TextInput title='no_cv. Handphone' name="no_cv" sizing='md' onChange={(e: any)=> {
                    handleSetValueInput({
                      key: 'no_cv',
                      values: e.target.value
                    })
                  }} placeholder="No. CVC / CVV" type='text'/>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 mb-4">
              <label className="font-[Open Sans] text-lg font-semibold text-[#727070]">Nama pemilik kartu</label>
              <TextInput title='name_card. Handphone' name="name_card" sizing='md' onChange={(e: any)=> {
                handleSetValueInput({
                  key: 'name_card',
                  values: e.target.value
                })
              }} placeholder="Nama pemilik kartu" type='text'/>
          </div>

          <div className="flex flex-col gap-2 mb-4">
            <label className="font-[Open Sans] text-lg font-semibold text-[#727070]">Pilih Pembayaran</label>
            <Select 
              onChange={(e)=>{
                handleSetValueInput({
                  key: 'payment_select',
                  values: e.target.value
                });
              }}
              id="countries" required>
              <option>United States</option>
              <option>Canada</option>
              <option>France</option>
              <option>Germany</option>
            </Select>
          </div>

          <div className="mb-6"></div>
      </div>
    </>
  )

  const renderCardRight = (
    <>
      {
        dataDetailFlight?.flights?.map((item: FlightData)=>(
          <div className="flex flex-col justify-between h-full">
            <div className="">
              <div className="text-lg text-slate-600">Order ID : 1</div>
              <div className="font-bold text-xl text-slate-700 capitalize mt-2">
                Ringkasan Pesanan
              </div>
              <div className="mt-2 text-lg text-slate-600">
                02-02-2024 - 04-02-2024
              </div>
              <div className="flex justify-start items-center gap-2 mt-2 text-lg text-slate-600">
                <div>{item?.departure_airport?.city}</div>
                <div>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.875 9.28125C20.0312 9.125 20.0312 8.90625 19.875 8.75L16.875 5.75C16.625 5.5 16.2188 5.6875 16.2188 6V8.25H4.375C4.15625 8.25 4 8.4375 4 8.625V9.375C4 9.59375 4.15625 9.75 4.375 9.75H16.2188V12.0312C16.2188 12.3438 16.625 12.5312 16.875 12.2812L19.875 9.28125ZM4.09375 15.2812L7.09375 18.2812C7.34375 18.5312 7.75 18.3438 7.75 18.0312V15.75H19.625C19.8125 15.75 20 15.5938 20 15.375V14.625C20 14.4375 19.8125 14.25 19.625 14.25H7.75V12C7.75 11.6875 7.34375 11.5 7.09375 11.75L4.09375 14.75C3.9375 14.9062 3.9375 15.125 4.09375 15.2812Z"
                      fill="#333333"
                    />
                  </svg>
                </div>
                <div>{item?.arrival_airport?.city}</div>
              </div>
              <div className="flex justify-center items-center text-blue-600 font-bold my-5 text-lg">
                
              </div>
            </div>
            <div className="border-t-2 border-slate-200 pt-4">
              <div className="flex flex-col gap-2 mb-4">
                  <label className="font-[Open Sans] text-lg font-semibold text-[#727070]">Masukkan kode promo</label>
                  <TextInput title='promo_code. Handphone' name="promo_code" sizing='md' onChange={(e: any)=> {
                    handleSetValueInput({
                      key: 'promo_code',
                      values: e.target.value
                    })
                  }} placeholder="Promo Code" type='text'/>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full mt-4 font-bold bg-blue-500 text-white p-2 rounded-3xl hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                >
                  Terapkan
                </button>
              </div>
            </div>
            <div className="border-t-2 border-slate-200 mt-6">
              <div className="flex justify-between items-center mt-2">
                <div className="text-sm">Total Pembayaran</div>
                <div className="flex justify-end items-center">
                  <div className="font-bold text-2xl">Rp1.368.000</div>
                  <div>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.41 8.29492L12 12.8749L16.59 8.29492L18 9.70492L12 15.7049L6 9.70492L7.41 8.29492Z"
                        fill="#505050"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </>
  ) 

  return (
    <div className="bg-blue-100 min-h-screen w-full font-sans">
      <div className="max-w-[90%] mx-auto pt-32">
        <div className="grid grid-cols-3 gap-10">
          <div className="w-full bg-white col-span-2 p-16 rounded-xl">
            {renderCardLeft}
          </div>
          <div>
            <div className="w-full bg-white rounded-xl p-16 max-h-screen">
              {renderCardRight}
            </div>
            <div className="mt-6">
              <button
                type="submit"
                onClick={onSubmit}
                className="p-2 bg-amber-500 hover:bg-orange-400 text-white text-lg font-bold rounded-3xl w-full"
              >
                Bayar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPayment;

