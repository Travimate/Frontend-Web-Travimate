


const ItemCardFlightOrdersDetails = () => {
  return (
    <div className="mt-3">
        <div>
            <div className="flex flex-row items-center justify-between">
                <p className="bg-blue-100 text-blue-700 py-1 px-4 rounded-full text-sm">Pergi</p>
                <p className="text-gray-400 text-md font-['Open Sans']">Senin, 7 Juli 2023</p>
            </div>
            <div className="my-3 flex flex-row gap-4">
                <div className="w-[100px] h-[32px]">
                    <img className="w-[100%] h-[100%]" src="https://dummyimage.com/600x400/e6e6e6/cfcfe3" alt="" />
                </div>
                <p className="text-[24px] text-gray-800 font-bold">Lion Air</p>
            </div>
        </div>
        <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col">
                <p className="text-neutral-600 text-[24px] font-bold font-['Open Sans'] leading-10">07:00</p>
                <p className="text-neutral-400 text-xl font-semibold font-['Open Sans'] leading-7">CGK</p>
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
                    Langsung
                </p>
            </div>
            <div className="flex flex-col">
                <p className="text-neutral-600 text-[24px] font-bold font-['Open Sans'] leading-10">08:35</p>
                <p className="text-neutral-400 text-xl font-semibold font-['Open Sans'] leading-7">DPS</p>
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