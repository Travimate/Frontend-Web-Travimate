import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback, useMemo, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import airasia from '../../../assets/flight-white/air-aisa.png'
import citilink from '../../../assets/flight-white/citilink.png'
import garuda from '../../../assets/flight-white/garuda-indonesia.png'
import lionair from '../../../assets/flight-white/lion-air.png'
import malaysiaair from '../../../assets/flight-white/malaysia-airlines.png'
import qatarair from '../../../assets/flight-white/qatar-airways.png'
import singaporeair from '../../../assets/flight-white/singapore-airlines.png'
import { Link } from "react-router-dom";
import { useParams, useRouter } from "../../../routes/hooks";
import { useForm } from 'react-hook-form';
import travimatev2 from '../../../api/tavimatev2';
import { ToggleSwitch } from 'flowbite-react';
import { FormProvider as Form, UseFormReturn } from 'react-hook-form';

const InputField = () => {

  const IMAGE_FLIGHT = [
    {id: 1, src:airasia},
    {id: 2, src:citilink},
    {id: 3, src:garuda},
    {id: 4, src:lionair},
    {id: 5, src:malaysiaair},
    {id: 6, src:qatarair},
    {id: 7, src:singaporeair}
  ]

  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const LoginSchema = Yup.object().shape({
      departure: Yup.string().required('Departure is required'),
      destination: Yup.string().required('Destinations is required'),
      departure_date: Yup.string().required('Date is required'),
      destinations_date: Yup.string().nullable(),
  });
  const [switch1, setSwitch1] = useState(false);

  console.log(switch1)

  const defaultValues = useMemo(
      () => ({
        departure: '',
        destination: '',
        departure_date: '',
        destinations_date: ''
      }),
  []
  );

  const methods = useForm({
      resolver: yupResolver(LoginSchema),
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

  console.log(values.departure)

  const onSubmitSearch = handleSubmit(async (data) => {
      setLoading(true)
      router.push('/flight/search?dep=dps&arr=cgk&dateDep=2024-02-01&dateArr=2024-02-04&flightClass=economy&isAroundTrip=true')  
  })

  const handleClickSearch = useCallback(()=>{
    onSubmitSearch()
  },[])

  
  return (
    <div className='w-full'>
      <Form {...methods}>
        <form className="flex w-full items-center gap-3">
          <div className='main-container relative px-12 lg:px-16'>
            <div className="flex justify-center ">
              <div className="form-input py-6 flex w-[105%] shadow rounded-full px-12 relative translate-y-[0%] md:translate-y-[-150%] lg:translate-y-[-180%] xl:translate-y-[-230%] bg-white">

                  <div className="flex w-[30%] gap-4 items-center">
                    <div className="w-full mb-6 md:mb-0">
                      <div className="relative inputText">
                        <label className="pb-1 px-2">Dari</label>
                        <input
                          type="text"
                          id="departure"
                          name='departure'
                          onChange={(e)=>setValue('departure', e.target.value)}
                          className="form-control block appearance-none w-full text-gray-700 py-3 px-2 pr-6 rounded-[10px] leading-tight focus:outline-none focus:bg-white border-none"
                          placeholder="Negara, Kota, atau Bandara"
                          required
                        />
                      </div>
                    </div>

                    {
                      switch1 && (
                        <>
                          <div className="bg-amber-500 text-white font-bold rounded-full w-32 h-8 flex items-center justify-center">
                            <FaArrowRightArrowLeft />
                          </div>

                          <div className="w-full mb-6 md:mb-0">
                            <div className="relative inputText">
                              <label className="pb-1 px-2">Ke</label>
                              <input
                                type="text"
                                id="text"
                                className="form-control block appearance-none w-full text-gray-700 py-3 px-2 pr-6 rounded-[10px] leading-tight focus:outline-none focus:bg-white border-none"
                                placeholder="Negara, Kota, atau Bandara"
                                required
                              />
                            </div>
                          </div>
                        </>
                      )
                    }
                  </div>

                  <div className="flex w-[67%] gap-4 items-center">
                    <div className="w-full  mb-6 md:mb-0">
                      <div className="relative inputDate">
                        <label className="pb-1 px-1">Berangkat</label>
                        <input
                          type="date"
                          id="departure_date"
                          name='departure_date'
                          className="form-control block appearance-none px-4 w-full text-gray-700 py-3 px-1 pr-6 rounded-[10px] leading-tight focus:outline-none focus:bg-white border-none"
                          placeholder="Pilih Tanggal"
                          required
                        />
                      </div>
                    </div>

                    {
                      switch1 && (
                        <div className="w-full mb-6 md:mb-0">
                          <div className="relative inputDate">
                            <label className="pb-1 px-1">Pulang</label>
                            <input
                              type="date"
                              id="destinations_date"
                              name='destinations_date'
                              className="form-control block appearance-none w-full text-gray-700 py-3 px-4 pr-6 rounded-[10px] leading-tight focus:outline-none focus:bg-white border-none"
                              placeholder="Pilih Tanggal"
                              required
                            />
                          </div>
                        </div>
                      )
                    }


                    <div className="w-full mb-6 md:mb-0">
                      <div className="relative inputTime">
                        <label className="pb-1 px-2">Penumpang dan Kelas Kabin</label>
                        <select
                          className="form-select block appearance-none w-full text-gray-700 py-3 px-2 pr-6 rounded-[10px] leading-tight focus:outline-none focus:bg-white border-none"
                          id="time"
                          aria-label="Default select example"
                          required
                        >
                          <option hidden>Pilih</option>
                          <option value="01:00:00">1 Dewasa, Ekonomi</option>
                          {/* <option value="02:00:00">09.00 WIB</option>
                          <option value="03:00:00">10.00 WIB</option>
                          <option value="04:00:00">11.00 WIB</option>
                          <option value="05:00:00">12.00 WIB</option> */}
                        </select>
                      </div>
                    </div>
                  </div>
                  
                  {/* <Link to={'/flight/search'}> */}
                    <div className="flex w-[3%] items-end">
                      <button onClick={handleClickSearch} className="bg-blue-500 hover:bg-white text-white font-bold hover:text-blue-500 border border-blue-500 hover:border-blue-500 rounded-full w-[40px] h-10 text-xl flex items-center justify-center">
                        <IoSearch />
                      </button>
                    </div>
                  {/* </Link> */}
                
              </div>
            </div>
            <div className="flex flex-col text-center justify-center translate-y-[0%] md:translate-y-[-320%] lg:translate-y-[-290%] xl:translate-y-[-190%] -mb-12">
              <ToggleSwitch checked={switch1} className='mx-auto my-4 text-white' label="Round Trip" onChange={setSwitch1} />
                <h4 className="text-white text-lg lg:text-2xl font-semibold mb-4">Menemani perjalananmu bersama partner kami</h4>
                <div className="flex flex-row justify-center gap-3 items-center">
                  {
                    IMAGE_FLIGHT.map((item: {id: number, src: string})=>(
                      <div key={item.id} className="h-5 lg:h-6">
                        <img src={item.src} className="w-full h-full " alt="image 1" />
                      </div>
                    ))
                  }
                </div>
            </div>
          </div>
        </form>
      </Form>
    </div>
  )
}

export default InputField