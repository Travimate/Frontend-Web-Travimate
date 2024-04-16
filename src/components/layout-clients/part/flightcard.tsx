import React from 'react'
import Citilink from '../../../assets/citilink.svg';
import Planeline from '../../../assets/planeline.svg';
import { FlightData } from '../../../types';


type Props = {
    data: FlightData;
    setFlight?: any;
};

// const props: Props = {
//     airplane: "Citilink",
//     logo: Citilink,
// };

const FlightCard = ({ data, setFlight}: Props) => {

    const formatter = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
    });

    return (
        <div 
            onClick={() => setFlight((prev: any) => {
                if (Array.isArray(prev)) {
                    return [...prev, data];
                } else {
                    return [data];
                }
            })}
            className="mx-12 cursor-pointer hover:scale-105 transition-all">
            <div className="flex justify-between gap-10">
                <div className="flex flex-col gap-4 px-7 p-7 text-center w-full bg-slate-50 rounded-3xl">
                    <div className='flex justify-between'>
                        <div className='flex justify-start items-center'>
                            <div className='h-16'>
                                <img src={ data?.airline[0].imageUrl || Citilink} className='pe-2 px-2 w-full h-full' alt="Airplane" />
                            </div>
                            <p className="text-gray-700 text-[28px] font-bold font-['Open Sans'] px-2">{data?.airline_operator}</p>
                        </div>  
                        <div className='flex flex-row py-2 px-12 text-white rounded-full w-[9%] bg-blue-500 text-[25px] font-semibold'>
                            <a href="/payment" className="my-auto mx-auto">Pilih</a>
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <div className='flex justify-start'>
                            <div className='flex flex-col justify-center'>
                                <h3 className="text-black text-[28px] font-bold font-['Open Sans']">{`${data.departure_time[0]} : ${data.departure_time[1]}`}</h3>
                                <p className="text-gray-400 text-[20px] font-semibold font-['Open Sans']">{data?.departure_airport?.iata_code}</p>
                            </div>   
                            <div className='flex flex-col justify-center pe-2 ps-2'>
                                <p className="text-gray-400 text-[16px] font-semibold font-['Open Sans']">2jam 15m</p>
                                <img className="pe-2 ps-2" src={Planeline} alt="Planeline" />
                                <p className="text-gray-400 text-[16px] font-semibold font-['Open Sans']">{data.stops === 1 ? 'Transit' : "Langsung"}</p>
                            </div>
                            <div className='flex flex-col justify-center'>
                                <h3 className="text-black text-[28px] font-bold font-['Open Sans']">{`${data.arrival_time[0]} : ${data.arrival_time[1]}`}</h3>
                                <p className="text-gray-400 text-[20px] font-semibold font-['Open Sans']">{data?.arrival_airport?.iata_code}</p>
                            </div>  
                        </div>
                        <div className='flex flex-col justify-end'>
                            <h2 className="text-black text-[24px] font-bold font-['Open Sans']">{formatter.format(data?.baseFare.adultBaseFare)?.replace(/,00$/, '')} <span className="text-gray-400 text-[20px] font-semibold font-['Open Sans']">/orang</span></h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlightCard