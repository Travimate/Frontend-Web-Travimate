import { FlightData } from "../../../types"
import { formatDate } from "../../../utils"



const ItemCardFlightOrdersDetails = ({data, index}: {data: FlightData, index: number}) => {
    const dof = formatDate(data?.dof?.join('-'))

    // console.log(dof)

    return (
        <div className="mt-3">
            <div>
                <div className="flex flex-row items-center justify-between">
                    <p className="bg-blue-100 text-blue-700 py-1 px-4 rounded-full text-sm">{index === 0 ? "Pergi" : "Pulang"}</p>
                    <p className="text-gray-400 text-md font-['Open Sans']">{dof}</p>
                </div>
                <div className="my-3 flex flex-row gap-2 justify-start items-center">
                    <div className='h-16'>
                        <img src={ data?.airline[0].imageUrl} className='pe-2 px-2 w-full h-full' alt="Airplane" />
                    </div>
                    <p className="text-gray-700 text-lg font-bold font-['Open Sans'] px-2">{data?.airline_operator}</p>
                </div>
            </div>
            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-col">
                    <p className="text-neutral-600 text-[24px] font-bold font-['Open Sans'] leading-10">{`${data.departure_time[0]} : ${data.departure_time[1]}`}</p>
                    <p className="text-neutral-400 text-xl font-semibold font-['Open Sans'] leading-7">{data?.departure_airport?.iata_code}</p>
                </div>
                <div>
                    <p className="text-center text-gray-400">
                        2J 15M
                    </p>
                    <div className="w-[186.44px] h-6 relative">
                        <div className="w-[186.44px] h-[7.65px] left-0 top-[7.87px] absolute">
                            <div className="w-[7.81px] h-[7.65px] left-0 -top-[2.5px] absolute bg-zinc-500 rounded-full" />
                            <hr className="border-[1.5px]" />
                            <div className="w-[7.81px] h-[7.65px] left-[178.63px] -top-[2.5px] absolute bg-zinc-500 rounded-full" />
                        </div>
                    </div>
                    <p className="text-center text-gray-400">
                        {data.stops === 1 ? 'Transit' : "Langsung"}
                    </p>
                </div>
                <div className="flex flex-col">
                    <p className="text-neutral-600 text-[24px] font-bold font-['Open Sans'] leading-10">{`${data.arrival_time[0]} : ${data.arrival_time[1]}`}</p>
                    <p className="text-neutral-400 text-xl font-semibold font-['Open Sans'] leading-7">{data?.arrival_airport?.iata_code}</p>
                </div>
            </div>
            <div className="flex flex-row justify-center mt-8">
                <p className="font-bold cursor-pointer text-blue-700">Details</p>
            </div>
            <hr className="my-8" />
        </div>
    )
}

export default ItemCardFlightOrdersDetails