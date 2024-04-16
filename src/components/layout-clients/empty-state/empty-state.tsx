import React from 'react'

interface IEmptyCustom {
    ilustration: React.ReactNode;
    title?: string;
    description?: string;
}

const EmptyState = ({ilustration, title, description}:IEmptyCustom) => {
    return (
        <div className='text-center'>
            <div className='w-full flex flex-row justify-center'>
                <div className='w-[30%]'>
                    {ilustration}
                </div>
            </div>
            <div className='w-full justify-center'>
                <h2 className='mt-4 font-bold text-xl text-gray-700'>{title}</h2>
                <p className='mt-1 font-normal text-lg text-gray-700'>{description}</p>
            </div>
        </div>
    )
}

export default EmptyState