import { ReactTyped } from "react-typed"

const Hero = () => {
    return (
        <div className="hero px-12 -mb-12 md:px-12 xl:px-32 h-[36rem] md:h-[50rem] bg-[url('/src/assets/plane.png')] bg-no-repeat bg-fixed md:bg-[url('')] md:relative pt-12 bg-blue-500 rounded-bl-[72px] rounded-br-[72px] flex flex-row justify-between items-center">
            <div className="flex flex-col justify-end h-[30rem] md:h-0">
                <div className="text-white md:mb-12 text-[32px] font-semibold font-['Open Sans'] leading-10">
                    <p data-aos="fade-up" data-aos-duration="1000" className="text-white text-lg md:text-xl lg:text-[2rem] font-bold font-['Open Sans'] lg:mb-8">
                        #KawanSetiaPerjalananmu
                    </p>
                    
                    <div data-aos="fade-up" data-aos-duration="1500" className="text-[1.3rem] md:text-4xl xl:text-[2.4rem]">
                        <p>
                            Pesan Tiket Pesawat Jadi Lebih
                        </p>
                        <p className="text-yellow-300 font-bold font-['Open Sans'] leading-10 -mt-2 lg:mt-4">
                            <ReactTyped
                                loop
                                typeSpeed={60}
                                backSpeed={90}
                                strings={["Menyenangkan 🥰"]}
                                smartBackspace
                                shuffle={false}
                                backDelay={1}
                                fadeOut={false}
                                fadeOutDelay={200}
                                loopCount={0}
                                showCursor
                                // cursorChar="|"
                                />                    
                        </p>
                    </div>
                </div>
            </div>
            
            <div className="w-[60%] xl:w-[40%] h-[80%] md:h-[100%] hidden md:block md:absolute top-12 right-0">
                <img src="/src/assets/plane.png" className="w-full h-full" alt="" />
            </div>
            
        </div>   
    )
}

export default Hero