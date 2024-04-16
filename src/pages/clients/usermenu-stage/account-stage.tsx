import { UserCircle } from '@phosphor-icons/react'
import { Label, Radio, TextInput } from 'flowbite-react'
import React from 'react'
import { TbEdit } from 'react-icons/tb'
import { IUser } from '../../../types/user';

interface IAccountStage {
    dataClient: IUser | undefined;
}

const AccountStage = ({dataClient}:IAccountStage) => {

    const renderProfileFoto = (
        <div className='w-full text-center flex flex-col justify-center'>
            <UserCircle size={100} weight="fill" className='mx-auto' color='blue' />
            <button className='text-blue-500'>
                <p>Edit Profile</p>
            </button>
        </div>
    ) 

    const renderFormAccount = (
        <div className='flex flex-col gap-4'>

            <div className='sapaan'>
                <h6 className="text-neutral-600 text-md font-semibold font-['Open Sans'] leading-7">Sapaan</h6>
                <fieldset className="flex max-w-md flex-row gap-4 mt-2">
                    <div className="flex items-center gap-2">
                        <Radio id="tuan" name="countries" value="tuan" defaultChecked />
                        <Label htmlFor="tuan">Tuan</Label>
                    </div>
                    <div className="flex items-center gap-2">
                        <Radio id="Nyonya" name="countries" value="Nyonya" />
                        <Label htmlFor="Nyonya">Nyonya</Label>
                    </div>
                    <div className="flex items-center gap-2">
                        <Radio id="spain" name="countries" value="Nona" />
                        <Label htmlFor="Nona">Nona</Label>
                    </div>
                </fieldset>
            </div>

            <div className='tanggal_lahir flex flex-col gap-2'>
                <h6 className="text-neutral-600 text-md font-semibold font-['Open Sans'] leading-7">Tanggal Lahir</h6>
                <TextInput title='Tanggal Lahir' onChange={(e)=>console.log(e.target.value)} type='date'/>
                <p className='text-sm text-gray-300'>Pastikan sudah sesuai dengan KTP/Paspor</p>
            </div>

            <div className='nomor_hp flex flex-col gap-2'>
                <h6 className="text-neutral-600 text-md font-semibold font-['Open Sans'] leading-7">Nomor HP</h6>
                <TextInput title='Nomor Ponsel' onChange={(e)=>console.log(e.target.value)} type='number'/>
                {/* <p className='text-sm text-gray-300'>Seperti di KTP, Paspor, dan SIM</p> */}
            </div>

            <div className='foto flex flex-col gap-2'>
                <h6 className="text-neutral-600 text-md font-semibold font-['Open Sans'] leading-7">Foto Profil</h6>
                <TextInput title='Foto Profil' onChange={(e)=>console.log(e.target.value)} type='file'/>
            </div>

            <div className='actions-button'>
                <button className='w-full group mt-10'>
                    <div className='rounded-full py-3 text-lg font-semibold justify-center bg-blue-500 text-white flex flex-row items-center'>
                        <TbEdit size={24} color='white' />
                        <p>Edit Akun</p>
                    </div>
                </button>
            </div>
        </div>
    )

    return (
        <div className='bg-white p-8 w-full rounded-[27.51px]'>
            <div className='flex flex-col'>
                <div>
                    {renderProfileFoto}
                </div>
                <div>
                    {renderFormAccount}
                </div>
            </div>
        </div>    
    )
}

export default AccountStage