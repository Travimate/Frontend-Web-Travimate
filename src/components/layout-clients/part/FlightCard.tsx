import React from 'react'

import Citilink from '../../../assets/citilink.svg';
import Planeline from '../../../assets/planeline.svg';


type Props = {}

const FlightCard = (props: Props) => {
  return (
    <div className="container-lg mx-12 my-8">
    <div className="flex justify-between gap-10">
        <div className="flex flex-col gap-4 px-7 p-7 text-center w-full bg-slate-50 rounded-3xl">
            <div className='flex justify-between'>
                <div className='flex justify-start'>
                    <img src={Citilink} className='pe-2' alt="Airplane" />
                    <p className="text-black text-[28px] font-bold font-['Open Sans']">Citilink</p>
                </div>  
                <a href="" className="text-blue-700 text-[20px] font-bold font-['Open Sans']">lihat detail</a>
            </div>
            <div className='flex justify-between'>
                <div className='flex justify-start'>
                    <div className='flex flex-col justify-center'>
                        <h3 className="text-black text-[28px] font-bold font-['Open Sans']">07:00</h3>
                        <p className="text-gray-400 text-[20px] font-semibold font-['Open Sans']">CGK</p>
                    </div>   
                    <div className='flex flex-col justify-center pe-2 ps-2'>
                        <p className="text-gray-400 text-[16px] font-semibold font-['Open Sans']">2jam 15m</p>
                        <img className="pe-2 ps-2" src={Planeline} alt="Planeline" />
                        <p className="text-gray-400 text-[16px] font-semibold font-['Open Sans']">Langsung</p>
                    </div>
                    <div className='flex flex-col justify-center'>
                        <h3 className="text-black text-[28px] font-bold font-['Open Sans']">08:15</h3>
                        <p className="text-gray-400 text-[20px] font-semibold font-['Open Sans']">DPS</p>
                    </div>  
                </div>
                <div className='flex flex-col justify-end'>
                    <h2 className="text-black text-[24px] font-bold font-['Open Sans']">Rp. 169.000 <span className="text-gray-400 text-[20px] font-semibold font-['Open Sans']">/orang</span></h2>
                </div>
            </div>
        </div>
        </div>
        </div>
  )
}

export default FlightCard