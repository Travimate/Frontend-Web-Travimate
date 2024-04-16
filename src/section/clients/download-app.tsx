import { Link } from "react-router-dom";
import Mockup from "../../assets/Mockup.png";
import Cloud from "../../assets/Cloud.png";

const DownloadApp = () => {
    return (
        <section className="bg-blue-700 mt-24 relative w-full h-[46rem] xl:h-[38rem]">
            <div className="w-full px-8 xl:px-32 z-[300]">
                <div data-aos="fade-left" data-aos-duration="1000" className="w-full md:w-1/2 flex flex-col justify-center">
                    <div className="w-full mt-20 xl:mt-52">
                            <p className="text-white font-bold text-[1.5rem] md:text-[2rem] font-['Open Sans']">Kamu sudah siap berangkat?</p>
                        <div className="py-1 mt-2 mb-4 bg-orange-500 w-[30%] rounded-full">
                        </div>
                        <p className="text-white font-bold text-2xl md:text-[2rem] leading-10 font-['Open Sans']">Download aplikasi <span className="">travimate</span> di playstore sekarang!</p>
                        <Link to="/download" className="flex justify-center items-center font-bold font-['Open Sans'] text-md md:text-xl text-blue-500 bg-white p-3.5 rounded-full w-[60%] md:w-[20%] mt-8">
                            Download
                        </Link>
                    </div>
                </div>
                <div className="w-1/2">
                    <img src={Mockup} className="absolute end-0 bottom-0" alt="Mockup Travimate" />
                </div>
            </div>
            <img src={Cloud} className="absolute bottom-0" alt="Image Cloud" />
        </section>
    );
};

export default DownloadApp;