import { useNavigate } from 'react-router-dom'
import { useState, FormEvent } from 'react'
import { useAuth } from '../context/AuthProvider/useAuth'

import pineappleSoccer from '../../public/pineappleIcon.png'

export default function Login(){
  const auth = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function onFinish(event : FormEvent<HTMLFormElement>) {
    event.preventDefault()

    try {
      await auth.authenticate(email, password)

      navigate('/home')
    } catch (error) {
      alert('Invalid email or password')
    }
  }

  return(
    <div className="flex items-center justify-center w-full h-[90vh]">
      <div className="absolute w-full h-[100vh] bg-slate-950 z-50 opacity-50"></div>
      <form onSubmit={onFinish} className="flex flex-col justify-center items-center gap-4 p-2 bg-yellow-400 w-[90%] h-[90%] mt-20 absolute z-50 rounded-3xl shadow-2xl animate-opacity">
        <div className='bg-lime-700 rounded-full p-2 -mt-10 animate-bounce'>
          <img src={pineappleSoccer} alt="Image PineappleSoccer" />
        </div>
        <h1 className='text-lime-700 font-extrabold text-2xl text-center animate-slide-down'>Bem Vindo ao <span className='text-lime-600 drop-shadow-lg shadow-lime-700'>PineappleSoccer!</span></h1>
        <label className="text-lime-700 font-extrabold animate-slide-down">Digite seu usuário:</label>
        <input 
          name='email' 
          type="text" 
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
          className="bg-slate-300 rounded-3xl w-full h-12 flex justify-center items-center text-center placeholder: text-lime-700 font-extrabold placeholder:text-lime-700 placeholder:font-extrabold shadow-lg shadow-lime-700" placeholder="User"/>
        <label className="text-lime-700 font-extrabold animate-slide-down">Digite sua senha:</label>
        <input 
          name='password' 
          type="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
          className="bg-slate-300 rounded-3xl w-full h-12 flex justify-center items-center text-center placeholder: text-lime-700 font-extrabold placeholder:text-lime-700 placeholder:font-extrabold shadow-lg shadow-lime-700" placeholder="Password"/>
        <div className='flex items-center justify-center h-10 w-24 rounded-3xl bg-lime-700 hover:scale-110'>
          <input type="submit" value="Entrar" className='text-white font-extrabold'/>
        </div>  
      </form>
    </div>
  )
}