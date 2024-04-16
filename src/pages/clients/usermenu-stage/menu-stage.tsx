import { Bell, ClockCounterClockwise, ListChecks, SignOut, User, UserCircle } from '@phosphor-icons/react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { logoutClient } from '../../../store/clients/client.slice'
import { IUser } from '../../../types/user'

interface IMenuStage {
    stateMenu: string;
    isActive: string;
    dataClient: IUser | undefined;
}

const MenuStage = ({stateMenu, isActive, dataClient}:IMenuStage) => {

  const dispatch = useDispatch()

  return (
    <div className='flex flex-col w-full gap-4 p-8 pb-12 bg-white rounded-[27.51px]'>
      <div className='flex flex-row gap-4 items-center'>
        <div className='w-24 h-24'>
          <img src={dataClient.pp || ''} alt="photo acccount" className='w-full h-full object-cover' />
          {/* <UserCircle size={100} weight="fill" color='blue' /> */}
        </div>
        <div className='flex flex-col gap-2'>
          <h6 className='font-bold text-gray-600 text-[1.2rem]'>{dataClient.username}</h6>
          <div>
            <p className='font-bold text-gray-400 text-[0.9rem]'>{dataClient.phone}</p>
            <p className='font-bold text-gray-400 text-[0.9rem]'>{dataClient.email}</p>
          </div>
        </div>
      </div>
      <hr className='w-full border-[1px]' />
      <div className='flex flex-col mt-2'>
        <NavLink to="/profile" 
          className={`flex flex-row gap-4 font-bold py-3 px-4 text-gray-500 transition-all hover:bg-blue-100 hover:rounded-md items-center ${stateMenu === 'profile' && isActive}`}>
            <User size={32} weight="bold" />
            <p>Akun</p>
        </NavLink>
        <NavLink to="/history" className={`flex flex-row gap-4 font-bold py-3 px-4 text-gray-500 transition-all hover:bg-blue-100 hover:rounded-md items-center ${stateMenu === 'history' && isActive}`}>
          <ClockCounterClockwise size={32} weight="bold" />
          <p>Riwayat Transaksi</p>
        </NavLink>
        <NavLink to="/checkin" className={`flex flex-row gap-4 font-bold py-3 px-4 text-gray-500 transition-all hover:bg-blue-100 hover:rounded-md items-center ${stateMenu === 'checkin' && isActive}`}>
          <ListChecks size={32} weight="bold" />
          <p>Cek In</p>
        </NavLink>
        <NavLink to="/notification" className={`flex flex-row gap-4 font-bold py-3 px-4 text-gray-500 transition-all hover:bg-blue-100 hover:rounded-md items-center ${stateMenu === 'notification' && isActive}`}>
          <Bell size={32} weight="bold" />
          <p>Notifikasi</p>
        </NavLink>
        <NavLink to="/logout" onClick={()=>{
          sessionStorage.removeItem('at')
          sessionStorage.clear()
          window.open('/', '_self')
          dispatch(logoutClient())
        }} className={`flex flex-row gap-4 font-bold py-3 px-4 text-red-700 transition-all hover:bg-blue-100 hover:rounded-md items-center ${stateMenu === 'logout' && isActive}`}>
          <SignOut size={32} weight="bold" />
          <p>Logout</p>
        </NavLink>
      </div>
    </div>
  )
}

export default MenuStage