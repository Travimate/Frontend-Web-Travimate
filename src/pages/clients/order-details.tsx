import React, { useEffect, useMemo, useState } from 'react'
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { FormProvider as Form, UseFormReturn } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { ArrowsLeftRight } from '@phosphor-icons/react'
import { useSelector } from "react-redux";
import { Helmet } from 'react-helmet'
import { Datepicker, Label, Radio, TextInput, ToggleSwitch } from 'flowbite-react'
import ItemCardFlightOrdersDetails from '../../components/layout-clients/part/item-card-flight'
import LayoutClient from '../../components/layout-clients/layout'
import { CounterState } from '../../store/clients/client.slice';
import { FlightState, checkoutData, selectDataFlighState, selectQueryFlighState } from '../../store/flights/flights.slice';
import { FlightData } from '../../types';
import { formatterCurrency } from '../../utils';
import { useRouter } from '../../routes/hooks';

const OrderDetailsPage = () => {

    const router = useRouter()
    const dispatch = useDispatch()

    const dataClient = useSelector(
        (state: { client: CounterState }) => state?.client?.profileClient
    );
    const dataDetailFlight = useSelector(selectDataFlighState)
    const dataQueryFlight = useSelector(selectQueryFlighState)
    const totalFare = dataDetailFlight?.flights?.map((item:any)=>item?.baseFare?.adultBaseFare)?.reduce((a:any, b:any)=>a + b, 0)

    const adultSUM:number = 3

    const [sameWithPemesan, setSameWithPemesan] = useState(false);

    const defaultTraveler = {
        sapaan: '',
        name: '',
        dob: '',
        type: ''
    };

    const [traveler, setTraveler] = useState(Array.from({ length: adultSUM }, () => ({
        sapaan: '',
        name: '',
        dob: '',
        type: ''
    })));

    const handleSapaanChange = (index, newValue) => {
        setTraveler(prevTraveler => {
            const updatedTraveler = [...prevTraveler];
            updatedTraveler[index] = { ...updatedTraveler[index], sapaan: newValue };
            return updatedTraveler;
        });
    };
    
    const handleNameChange = (index, newValue) => {
        setTraveler(prevTraveler => {
            const updatedTraveler = [...prevTraveler];
            updatedTraveler[index] = { ...updatedTraveler[index], name: newValue };
            return updatedTraveler;
        });
    };
    
    const handleDOBChange = (index, newValue) => {
        setTraveler(prevTraveler => {
            const updatedTraveler = [...prevTraveler];
            updatedTraveler[index] = { ...updatedTraveler[index], dob: newValue };
            return updatedTraveler;
        });
    };
    
    // console.log(traveler)

    function getCurrentDate(date:string) {
        const currentDate = new Date(date);
        const year = currentDate.getFullYear();
        const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
        const day = currentDate.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    useEffect(()=>{
        if(sameWithPemesan){
            setTraveler([
                {
                    sapaan: dataClient?.greeting,
                    name: dataClient?.username,
                    dob: getCurrentDate(dataClient?.dob),
                    type: 'adult'
                }
            ])
        } else {
            setTraveler([
                {
                    sapaan: '',
                    name: '',
                    dob: '',
                    type: 'adult'
                }
            ])
        }
    },[sameWithPemesan])

    const NewBlogSchema = Yup.object().shape({
        title: Yup.string().nullable(),
        name: Yup.string().nullable(),
        no_hp: Yup.string().nullable(),        
        email: Yup.mixed<any>().nullable(),
        // excerpt: Yup.string().nullable(),
        // content: Yup.string().required('Konten is required '),
        // categories: Yup.array().min(1, 'Must have at least 1 categories'),
        // featured_images: Yup.array().nullable(),
        // published_at: Yup.object().shape({
        //     published_at_calendar: Yup.mixed<any>().nullable(),
        //     published_at_clock: Yup.mixed<any>().nullable()
        // }),
        // visibility: Yup.string(),
        // status: Yup.string(),
        // source: Yup.string().nullable(),
    });

    const defaultValues = useMemo(
    () => ({
        title: '',
        name: '',
        no_hp: '',
        email: dataClient?.email || '',
        // excerpt: '',
        // content: '',
        // categories: [],
        // featured_images: [],
        // published_at: {
        // published_at_calendar: null,
        // published_at_clock: null
        // },
        // visibility: '',
        // status: '0',
        // source: '',
    }),
    [dataClient]
    );

    const methods = useForm({
        resolver: yupResolver(NewBlogSchema),
        defaultValues,
    });
    
    const {
        reset,
        watch,
        control,
        setValue,
        handleSubmit,
        formState: { isSubmitting, isValid },
    } = methods;
    
    const values = watch();

    useEffect(() => {
        if (dataClient) {
          reset(defaultValues);
        }
    }, [dataClient, defaultValues, reset]);

    const handleToPayment = () => {
        const payload = {
            orderDetail : {
                customer: {
                    sapaan: dataClient?.greeting,
                    name: dataClient?.username,
                    dob: getCurrentDate(dataClient?.dob)
                },
                travalers: traveler
            }
        }
        dispatch(checkoutData(payload))
        router.push('/flight/payment')
    }


    const renderDetailPemesan = (
        <>
            <div>
                <h5 className="text-neutral-600 text-2xl font-bold font-['Open Sans'] leading-10">Detail Pemesan</h5>
                <p className="text-neutral-500 text-base font-semibold font-['Open Sans'] leading-normal">Detail kontak ini akan digunakan untuk pengiriman e-ticket</p>
            </div>
            <div className='bg-white rounded-[27.51px] p-8 w-full flex flex-col gap-4 mt-4 pb-10'>
                {/* Section Sapaan */}
                <div className='sapaan'>
                    <h6 className="text-neutral-600 text-md font-semibold font-['Open Sans'] leading-7">Sapaan</h6>
                    <fieldset className="flex max-w-md flex-row gap-4 mt-2">
                        <div className="flex items-center gap-2">
                            <Radio id="tuan" name="sapaan" value="tuan" checked={dataClient?.greeting === 'tuan'} />
                            <Label htmlFor="tuan">Tuan</Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Radio id="Nyonya" name="sapaan" value="nyonya" checked={dataClient?.greeting === 'nyonya'} />
                            <Label htmlFor="Nyonya">Nyonya</Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Radio id="spain" name="sapaan" value="nona" checked={dataClient?.greeting === 'nona'} />
                            <Label htmlFor="Nona">Nona</Label>
                        </div>
                    </fieldset>
                </div>


                <div className='nama_lengkap flex flex-col gap-2'>
                    <h6 className="text-neutral-600 text-md font-semibold font-['Open Sans'] leading-7">Nama Lengkap</h6>
                    <TextInput disabled title='Nama Lengkap' value={dataClient?.username} name='name' onChange={(e)=>console.log(e.target.value)} type='text'/>
                    <p className='text-sm text-gray-300'>Seperti di KTP, Paspor, dan SIM</p>
                </div>

                <div className='nama_lengkap flex flex-col gap-2'>
                    <h6 className="text-neutral-600 text-md font-semibold font-['Open Sans'] leading-7">Nomor Ponsel</h6>
                    <TextInput disabled title='Nomor Ponsel' value={dataClient?.phone} name='no_hp' type='number'/>
                </div>

                <div className='nama_lengkap flex flex-col gap-2'>
                    <h6 className="text-neutral-600 text-md font-semibold font-['Open Sans'] leading-7">Email</h6>
                    <TextInput disabled title='Email' value={dataClient?.email} name='email' id='email' type='email'/>
                </div>

            </div>
        </>
    )

    const renderDetailPenumpangDewasa = Array(adultSUM).fill(defaultTraveler).map((_, index) => (
        <div key={index} className='bg-white rounded-[27.51px] p-8 w-full flex flex-col gap-4 mt-4 pb-10'>
            <div className='flex flex-row justify-between'>
                <h1>Penumpang {index + 1} (Dewasa)</h1>
                {
                    index === 0 && (
                        <ToggleSwitch checked={sameWithPemesan} label="Sama dengan pemesan" onChange={setSameWithPemesan} />
                    )
                }
            </div>
            {/* Section Sapaan */}
            <div className='sapaan'>
                <h6 className="text-neutral-600 text-md font-semibold font-['Open Sans'] leading-7">Sapaan</h6>
                <fieldset className="flex max-w-md flex-row gap-4 mt-2">
                    <div className="flex items-center gap-2">
                        <Radio id={`tuan${index}`} name={`countries${index}`} value="tuan" checked={traveler[index]?.sapaan === 'tuan'} onChange={(e) => handleSapaanChange(index, e.target.value)} />
                        <Label htmlFor={`tuan${index}`}>Tuan</Label>
                    </div>
                    <div className="flex items-center gap-2">
                        <Radio id={`nyonya${index}`} name={`countries${index}`} value="nyonya" checked={traveler[index]?.sapaan === 'nyonya'} onChange={(e) => handleSapaanChange(index, e.target.value)} />
                        <Label htmlFor={`nyonya${index}`}>Nyonya</Label>
                    </div>
                    <div className="flex items-center gap-2">
                        <Radio id={`nona${index}`} name={`countries${index}`} value="nona" checked={traveler[index]?.sapaan === 'nona'} onChange={(e) => handleSapaanChange(index, e.target.value)} />
                        <Label htmlFor={`nona${index}`}>Nona</Label>
                    </div>
                </fieldset>
            </div>
    
            <div className='nama_lengkap flex flex-col gap-2'>
                <h6 className="text-neutral-600 text-md font-semibold font-['Open Sans'] leading-7">Nama Lengkap</h6>
                <TextInput title='Nama Lengkap' value={traveler[index]?.name} type='text' onChange={(e) => handleNameChange(index, e.target.value)} />
                <p className='text-sm text-gray-300'>Seperti di KTP, Paspor, dan SIM</p>
            </div>
    
            <div className='tanggal_lagir flex flex-col gap-2'>
                <h6 className="text-neutral-600 text-md font-semibold font-['Open Sans'] leading-7">Tanggal Lahir</h6>
                <Datepicker className='w-full' value={traveler[index]?.dob} title="Tanggal Lahir" onChange={(value) => handleDOBChange(index, value)} />
            </div>
        </div>
    ));
    
    

    const renderDetailPenumpangAnak = (
        <>
            <div className='bg-white rounded-[27.51px] p-8 w-full flex flex-col gap-4 mt-4 pb-10'>
                <div className='flex flex-row'>
                    <h1>Penumpang 1 (Anak-anak)</h1>
                </div>
                {/* Section Sapaan */}
                <div className='sapaan'>
                    <h6 className="text-neutral-600 text-md font-semibold font-['Open Sans'] leading-7">Sapaan</h6>
                    <fieldset className="flex max-w-md flex-row gap-4 mt-2">
                        <div className="flex items-center gap-2">
                            <Radio id="tuan" name="countries" value="tuan" defaultChecked />
                            <Label htmlFor="tuan">Tuan</Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Radio id="Nona" name="countries" value="Nona" />
                            <Label htmlFor="Nona">Nona</Label>
                        </div>
                    </fieldset>
                </div>

                <div className='nama_lengkap flex flex-col gap-2'>
                    <h6 className="text-neutral-600 text-md font-semibold font-['Open Sans'] leading-7">Nama Lengkap</h6>
                    <TextInput title='Nama Lengkap' value='' type='text'/>
                    <p className='text-sm text-gray-300'>Seperti di KTP, Paspor, dan SIM</p>
                </div>

                <div className='tanggal_lagir flex flex-col gap-2'>
                    <h6 className="text-neutral-600 text-md font-semibold font-['Open Sans'] leading-7">Tanggal Lahir</h6>
                    <Datepicker className='w-full' title="Tanggal Lahir" />
                    <p className='text-sm text-gray-300'>Penumpang anak (Usia 2-11 tahun)</p>
                </div>

            </div>
        </>
    )

    const renderDetailPenumpangBayi = (
        <>
            <div className='bg-white rounded-[27.51px] p-8 w-full flex flex-col gap-4 mt-4 pb-10'>
                <div className='flex flex-row'>
                    <h1>Penumpang 1 (Bayu)</h1>
                </div>
                {/* Section Sapaan */}
                <div className='sapaan'>
                    <h6 className="text-neutral-600 text-md font-semibold font-['Open Sans'] leading-7">Sapaan</h6>
                    <fieldset className="flex max-w-md flex-row gap-4 mt-2">
                        <div className="flex items-center gap-2">
                            <Radio id="tuan" name="countries" value="tuan" defaultChecked />
                            <Label htmlFor="tuan">Tuan</Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Radio id="Nona" name="countries" value="Nona" />
                            <Label htmlFor="Nona">Nona</Label>
                        </div>
                    </fieldset>
                </div>

                <div className='nama_lengkap flex flex-col gap-2'>
                    <h6 className="text-neutral-600 text-md font-semibold font-['Open Sans'] leading-7">Nama Lengkap</h6>
                    <TextInput title='Nama Lengkap' value='' type='text'/>
                    <p className='text-sm text-gray-300'>Seperti di KTP, Paspor, dan SIM</p>
                </div>

                <div className='tanggal_lagir flex flex-col gap-2'>
                    <h6 className="text-neutral-600 text-md font-semibold font-['Open Sans'] leading-7">Tanggal Lahir</h6>
                    <Datepicker className='w-full' title="Tanggal Lahir" />
                    <p className='text-sm text-gray-300'>Penumpang bayi harus diatas 3 bulan dan di bawah 2 tahun</p>
                </div>

            </div>
        </>
    )

    const renderInfoFlight = (
        <>
            {
                dataDetailFlight?.flights?.map((item:FlightData, index:number)=>(
                    <div className='flex flex-col gap-3'>
                        <div className='bg-white p-8 rounded-[27.51px]'>
                            <div className='flex flex-row items-center gap-3'>
                                <p className='font-bold text-lg'>{item?.departure_airport?.city}</p>
                                <ArrowsLeftRight size={24} />
                                <p className='font-bold text-lg'>{item?.arrival_airport?.city}</p>
                            </div>
                            <hr className='my-8' />
                            <ItemCardFlightOrdersDetails data={item} index={index}/>
                            <div className='flex flex-row justify-between items-center'>
                                <p className='text-md text-gray-600'>Total Pembayaran</p>
                                <p className='text-lg text-gray-700 font-bold'>{formatterCurrency.format(totalFare)?.replace(/,00$/, '')}</p>
                            </div>
                        </div>
                        <button onClick={()=>handleToPayment()} className='my-3 rounded-full w-full bg-[#F1A025] py-4 font-bold text-xl text-white'>
                            Lanjut Pembayaran
                        </button>
                    </div>
                ))
            }
        </>
    )

    return (
        <LayoutClient dataClient={dataClient}>
            <div className='px-32 flex flex-col md:flex-row justify-between gap-2 w-full bg-indigo-50 pt-12 pb-32'>
                <Helmet>
                    <title>Flight | Order Detail</title>
                    <meta name="description" content="Order details" />
                </Helmet>
                <Form {...methods}>
                    <div className='flex flex-col gap-1 mt-12 w-[68%]'>
                        {renderDetailPemesan}
                        <div className='mt-4'>
                            <h5 className="text-neutral-600 text-2xl font-bold font-['Open Sans'] leading-10">Detail Penumpang</h5>
                        </div>
                        {renderDetailPenumpangDewasa}
                        {/* {renderDetailPenumpangAnak}
                        {renderDetailPenumpangBayi} */}
                    </div>
                    <div className='flex flex-col gap-1 mt-10 w-[30%]'>
                        {renderInfoFlight}
                    </div>
                </Form>
            </div>
        </LayoutClient>
    )
}

export default OrderDetailsPage