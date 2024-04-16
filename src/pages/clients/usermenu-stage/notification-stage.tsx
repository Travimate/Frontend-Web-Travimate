import React from 'react'
import { HistoryIllustration, NotifIllustration } from '../../../assets/ilustrations'
import EmptyState from '../../../components/layout-clients/empty-state/empty-state'
import { GoArrowSwitch } from 'react-icons/go'

interface INotificationStage {
    setNotification: (state:string) => void
    notification: string
}

const NotificationStage = ({setNotification, notification}: INotificationStage) => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='bg-white p-8 w-full rounded-[27.51px]'>
        <h2 className='font-bold text-lg text-gray-600'>Riwayat Pembayaran</h2>
        <div className='flex flex-row gap-3 mt-4 text-blue-800'>

          <button onClick={()=>setNotification('transaction')}>
            <div className={`font-bold text-blue-500 px-12 py-4 rounded-full ${notification === 'transaction' ? 'bg-blue-400 bg-opacity-20 font-bold ' : 'ring-1 ring-blue-700' }`}>
                Transaction
            </div>
          </button>

          <button onClick={()=>setNotification('promo')}>
            <div className={`font-bold text-blue-500 px-12 py-4 rounded-full ${notification === 'promo' ? 'bg-blue-400 bg-opacity-20 font-bold ' : 'ring-1 ring-blue-700' }`}>
                Promo
            </div>
          </button>

          <button onClick={()=>setNotification('payment')}>
            <div className={`font-bold text-blue-500 px-12 py-4 rounded-full ${notification === 'payment' ? 'bg-blue-400 bg-opacity-20 font-bold ' : 'ring-1 ring-blue-700' }`}>
                Payment
            </div>
          </button>
        </div>
      </div>

      <div className='bg-white p-8 w-full rounded-[27.51px]'>
        {/* Button1 */}
        {
          notification === 'transaction' && (
            <div className='mb-10'>
              <div className='my-4 border-b'>
                <div className='flex flex-wrap justify-between items-center'>
                  <h1 className="font-['Open_Sans'] text-2xl font-semibold mx-4 leading-[45px] tracking-[-0.1px]">
                    Selamat, pembayaranmu telah berhasil! &#127882;
                  </h1>

                  <h1 className="font-['Open_Sans'] text-2xl text-slate-300 mx-4 leading-[45px] tracking-[-0.1px]">
                    15 / 02 / 2024
                  </h1>
                </div>
                  <a  href="https://media.suara.com/images/2016/11/24/o_1b2alidjh6nq9gm10896be68cg.jpg" 
                      className="font-['Open_Sans'] text-2xl font-medium mx-4 mb-2 leading-[45px] tracking-[-0.1px] relative whitespace-nowrap" 
                      target="_blank" 
                      rel="noopener noreferrer">
                      Yuk, lihat e-ticketmu disini
                  </a>
              </div>

              <div className='my-4 border-b'>
                <div className='flex flex-wrap justify-between items-center'>
                  <h1 className="font-['Open_Sans'] text-2xl font-semibold mx-4 leading-[45px] tracking-[-0.1px]">
                    Selamat, pembayaranmu telah berhasil! &#127882;
                  </h1>

                  <h1 className="font-['Open_Sans'] text-2xl text-slate-300 mx-4 leading-[45px] tracking-[-0.1px]">
                    18 / 02 / 2024
                  </h1>
                </div>
                  <a  href="https://media.suara.com/images/2016/11/24/o_1b2alidjh6nq9gm10896be68cg.jpg" 
                      className="font-['Open_Sans'] text-2xl font-medium mx-4 mb-2 leading-[45px] tracking-[-0.1px] relative whitespace-nowrap" 
                      target="_blank" 
                      rel="noopener noreferrer">
                      Yuk, lihat e-ticketmu disini
                  </a>
              </div>
            </div>
          )
        }
        {/* {
          notification === 'transaction' && (
            <div className='mt-4'>
              <EmptyState ilustration={<NotifIllustration/>} title='Transaksimu masih kosong sekarang, nih' description='Yuk, pesan tiketmu terlebih dahulu!' />
            </div>
          )
        } */}
        
        {/* Button2 */}
        {
          notification === 'promo' && (
            <div className='mb-10'>
              <div className='my-4 border-b'>
                <div className='flex flex-wrap justify-between items-center'>
                  <h1 className="font-['Open_Sans'] text-2xl font-semibold mx-4 leading-[45px] tracking-[-0.1px]">
                    Pengen liburan ke Bali, tapi khawatir budget gak cukup? &#127882;
                  </h1>

                  <h1 className="font-['Open_Sans'] text-2xl text-slate-300 mx-4 leading-[45px] tracking-[-0.1px]">
                    15 / 02 / 2024
                  </h1>
                </div>
                  <a  href="https://sta.nusatrip.net/cmsimg/61/61/banner-mandala_promo_id.jpg" 
                      className="font-['Open_Sans'] text-2xl font-medium mx-4 mb-2 leading-[45px] tracking-[-0.1px] relative whitespace-nowrap" 
                      target="_blank" 
                      rel="noopener noreferrer">
                      Yuk, cek disini karena ada yang istimewa buat kamu!
                  </a>
              </div>
            </div>
          )
        }
        {/* {
          notification === 'promo' && (
            <div className='mt-4'>
              <EmptyState ilustration={<NotifIllustration/>} title='Kamu masih belum memiliki promo' description='Tapi jangan sedih, kamu tetap mendapatkan penawaran terbaik dari kami!' />
            </div>
          )
        } */}

        {/* Button3 */}
        {
          notification === 'payment' && (
            <div>
                
            </div>
          )
        }
        {
          notification === 'payment' && (
            <div className='mt-4'>
              <EmptyState ilustration={<NotifIllustration/>} title='Pembayaranmu masih kosong sekarang, nih' description='Yuk, bayar tiketmu terlebih dahulu!' />
            </div>
          )
        }
      </div>

      {/* Empty State */}
    </div>
  )
}

export default NotificationStage