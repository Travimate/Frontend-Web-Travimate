import { TbBell, TbPhone, TbUserFilled } from "react-icons/tb"
import { Link, NavLink } from "react-router-dom"
import { IUser } from "../../../types/user"


interface INavbarClient {
  dataClient: IUser | undefined
  navbar?: boolean;
}

const Navbar = ({dataClient, navbar}: INavbarClient) => {
  // console.log(dataClient?.pp)
  return (
    <div className="navbar flex flex-row py-1 justify-between items-center min-h-max px-12 md:px-32">
        <div className="flex justify-around md:justify-between">
          <NavLink to="/">
            <div className="w-44">
              <img className="w-full h-full" src={navbar ? '/src/assets/logo.png' : '/src/assets/logo-travimate-light.png'} alt="logo"/>
            </div>
          </NavLink>
        </div>

        <div className="flex flex-row gap-4 items-center">
          <a href="https://api.whatsapp.com/send?phone=nomor-telepon-anda" target="_blank" rel="noopener noreferrer">
            <button className="w-[204px] transition-all hover:bg-amber-400 h-[51.50px] px-[28.50px] py-[13.75px] bg-amber-500 rounded-[27.51px] justify-center items-center gap-1 inline-flex">
                <div className="text-xl mr-2 text-white">
                    <TbPhone />
                </div>
                <div className="text-white text-sm font-bold font-['Open Sans'] leading-snug">Customer Service</div>
            </button>
          </a>
          
          {
            !dataClient && (
              <>
                <NavLink to="/login">
                    <button 
                      className="w-[103px] h-[49.50px] px-[28.50px] py-[13.75px] bg-white hover:bg-slate-200 rounded-[27.51px] justify-center items-center gap-1 inline-flex">
                        <div className="text-blue-500 text-sm font-bold font-['Open Sans'] leading-snug">Masuk</div>
                      </button>
                </NavLink>
                <NavLink to="/register">
                    <button 
                      className="w-[101px] h-[49.50px] px-[8.50px] py-[13.75px] border-2 border-white hover:bg-blue-400 rounded-[27.51px] justify-center items-center gap-1 inline-flex">
                        <div className="text-white text-sm font-bold font-['Open Sans'] leading-snug">Daftar</div>
                      </button>
                </NavLink>
              </>
            )
          }


          
          
          {
            dataClient && (
              <>
                <NavLink to="/notification" className="bg-blue-500 hover:bg-blue-700 text-white rounded-full p-3 transition-all cursor-pointer">
                  <TbBell className="w-8 h-8" />
                </NavLink>

                <NavLink to="/profile" className="flex items-center">
                  <div className="text-xl text-white font-semibold">Halo, {dataClient?.username}</div>
                  <div className="bg-blue-100 hover:bg-blue-400 text-blue-600 hover:text-blue-700 w-12 h-12 ml-3 rounded-full flex items-end">
                    <img src={dataClient?.pp} alt="image client" className="w-[100%] h-[100%] object-cover" />
                    {/* <TbUserFilled className="w-8 h-8" /> */}
                  </div>
                </NavLink>
              </>
            )
          }
        </div>
    </div>
  )
}

export default Navbar