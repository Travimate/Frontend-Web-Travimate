import Handshake from '../../assets/Handshake.png';
import Headphone from '../../assets/Headphone.png';
import Money from '../../assets/Money.png';
import Ellipse from '../../assets/Ellipse.svg';
import Emoticon from '../../assets/Emoticon.png';

const WhyUs = () => {
    return (
        <section className='why-us px-8 xl:px-32 mx-auto my-16'>
            <div className="flex items-center gap-2 mb-5">
                <h2 className="text-[1.7rem] md:text-[2rem] font-bold text-slate-600 font-['Open Sans']">Kenapa Harus Pesan Tiket Pesawat di Sini?</h2>
                <img src={Emoticon} alt="Emoticon Illustration" />
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-10">
                <div data-aos="fade-right" data-aos-duration="1000" className="flex flex-col items-center gap-4 px-7 pb-7 text-center w-full md:w-1/3 bg-blue-500 rounded-3xl">
                    <div className='hover:scale-105'>
                        <div className='flex justify-center'>
                            <img src={Ellipse} alt="Ellipse Illustration" />
                        </div>
                        <div className='flex justify-center'>
                            <img src={Handshake} alt="Handshake Illustration" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-lg font-bold text-white font-['Open Sans']">Transparansi dan Terpercaya</p>
                            <p className="text-sm font-normal text-white font-['Open Sans']">Kami berkomitmen untuk memberikan informasi yang jelas dan akurat kepada Anda, mulai dari harga tiket, ketentuan maskapai, hingga kebijakan pembatalan.</p>
                        </div>
                    </div>
                </div>
                
                <div data-aos="fade-up" data-aos-duration="1000" className="flex flex-col items-center gap-4 px-7 pb-7 text-center w-full md:w-1/3 bg-blue-500 rounded-3xl">
                    <div className='hover:scale-105'>
                        <div className='flex justify-center'>
                            <img src={Ellipse} alt="Ellipse Illustration" />
                        </div>
                        <div className='flex justify-center'>
                            <img src={Headphone} alt="Headphone Illustration" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-lg font-bold text-white font-['Open Sans']">Pelayanan yang Responsif dan Akurat</p>
                            <p className="text-sm font-normal text-white font-['Open Sans']">Kami selalu siap membantu Anda jika Anda memiliki pertanyaan atau masalah selama proses pemesanan.</p>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-left" data-aos-duration="1000" className="flex flex-col items-center gap-4 pb-7 px-7 text-center w-full md:w-1/3 bg-blue-500 rounded-3xl">
                    <div className='hover:scale-105'>
                        <div className='flex justify-center'>
                            <img src={Ellipse} alt="Ellipse Illustration" />
                        </div>
                        <div className='flex justify-center'>
                            <img src={Money} alt="Money Illustration" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-lg font-bold text-white font-['Open Sans']">Pencarian Tiket dengan Harga Terjangkau</p>
                            <p className="text-sm font-normal text-white font-['Open Sans']">Kami menawarkan berbagai pilihan tiket pesawat dengan harga terjangkau dari berbagai maskapai.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhyUs;
