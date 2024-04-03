import { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { IoIosCloseCircle } from "react-icons/io";
import { Link } from 'react-router-dom'

import logo from '../../public/pineappleIcon.png'

export default function Header(){
  const [visible, setVisible] = useState(false)

  return(
    <div className="bg-slate-900 w-full h-24 flex p-4 items-center justify-between shadow-2xl shadow-black absolute">
      <div>
        <Link to={'/'} className="flex items-center p-2 custom:m-12">
          <img src={logo} alt="logo image" className='h-20 hover:scale-110'/>
          <h1 className="text-slate-900 lg:text-lime-500 lg:font-extrabold lg:text-3xl lg:mt-6 lg:hover:scale-110 lg:hover:text-white">PineappleSoccer</h1>
          <button onClick={() => setVisible(!visible)} className="right-8 absolute cursor-pointer text-lime-500 hover:text-white hover:scale-110  lg:hidden">
            <TiThMenu size={50}/>
          </button>
        </Link>
      </div>
      <div>
        <ul className='hidden lg:flex lg:m-16 lg:mb-10 lg:gap-6 custom:m-36 custom:gap-12'>
          <li className=' lg:text-lime-500 lg:font-extrabold lg:text-xl lg:hover:scale-105 lg:hover:text-white custom:text-3xl'><Link to={'/'}>Jogadores</Link></li>
          <li className=' lg:text-lime-500 lg:font-extrabold lg:text-xl lg:hover:scale-105 lg:hover:text-white custom:text-3xl'><Link to={'/'}>Jogadores</Link></li>
          <li className=' lg:text-lime-500 lg:font-extrabold lg:text-xl lg:hover:scale-105 lg:hover:text-white custom:text-3xl'><Link to={'/'}>Jogadores</Link></li>
          <li className=' lg:text-lime-500 lg:font-extrabold lg:text-xl lg:hover:scale-105 lg:hover:text-white custom:text-3xl'><Link to={'/'}>Jogadores</Link></li>
        </ul>
      </div>
      <div className="top-0 absolute">
        <div className={visible ? '' : 'hidden'}>
          <div className="w-[300px] h-full right-0 bg-slate-800 fixed z-50 p-6 lg:hidden">
            <button onClick={() => setVisible(!visible)} className="text-lime-500 hover:text-white hover:scale-110">
              <IoIosCloseCircle size={38}/>
            </button>
            <ul className="flex flex-col right-12 top-28 gap-6 absolute">
              <li className="font-extrabold text-2xl text-lime-500 hover:text-white hover:scale-110">jogador</li>
              <li className="font-extrabold text-2xl text-lime-500 hover:text-white hover:scale-110">jogador</li>
              <li className="font-extrabold text-2xl text-lime-500 hover:text-white hover:scale-110">jogador</li>
              <li className="font-extrabold text-2xl text-lime-500 hover:text-white hover:scale-110">jogador</li>
            </ul>
          </div>
          <div className="w-full h-[2500px] right-0 bg-black opacity-55 fixed z-40 lg:hidden"></div>
        </div>
      </div>
    </div>
  )
}