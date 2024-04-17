import { useState, useEffect } from "react"
import { getUserLocalStorage } from "../../context/AuthProvider/util";
import { IUser } from "../../context/AuthProvider/types";

export default function FormEditProfile(){
  const [user, setUser] = useState<IUser | null>()

  useEffect(() => {
    const user =  getUserLocalStorage()

    if(user) {
      setUser(user)
    }
  }, [])

  return(
    <form className="flex flex-col w-full pl-4 pr-4 lg:pl-20">
      <label className="text-lime-500 font-extrabold">Digite seu nome</label>
      <input type="text" className="bg-lime-700 shadow-xl mt-1 w-[90%] h-10 rounded p-4 text-white font-extrabold placeholder:text-white placeholder:font-extrabold" placeholder={`${user?.name}`} />
      <label className="text-lime-500 font-extrabold">Digite seu sobrenome</label>
      <input type="text" className="bg-lime-700 shadow-xl mt-1 w-[90%] h-10 rounded p-4 text-white font-extrabold placeholder:text-white placeholder:font-extrabold" placeholder={`${user?.surname}`} />
      <label className="text-lime-500 font-extrabold">Digite o vigor de 0% a 100%</label>
      <input type="text" className="bg-lime-700 shadow-xl mt-1 w-[60%] h-10 rounded p-4 text-white font-extrabold placeholder:text-white placeholder:font-extrabold" placeholder={`${user?.force}`} />
      <label className="text-lime-500 font-extrabold">Digite o ataque de 0% a 100%</label>
      <input type="text" className="bg-lime-700 shadow-xl mt-1 w-[60%] h-10 rounded p-4 text-white font-extrabold placeholder:text-white placeholder:font-extrabold" placeholder={`${user?.attack}`} />
      <label className="text-lime-500 font-extrabold">Digite a defesa de 0% a 100%</label>
      <input type="text" className="bg-lime-700 shadow-xl mt-1 w-[60%] h-10 rounded p-4 text-white font-extrabold placeholder:text-white placeholder:font-extrabold" placeholder={`${user?.defense}`} />
      <label className="text-lime-500 font-extrabold">Digite seus gols</label>
      <input type="text" className="bg-lime-700 shadow-xl mt-1 w-[40%] h-10 rounded p-4 text-white font-extrabold placeholder:text-white placeholder:font-extrabold" placeholder={`${user?.goals}`} />
      <label className="text-lime-500 font-extrabold">Digite suas assistências</label>
      <input type="text" className="bg-lime-700 shadow-xl mt-1 w-[40%] h-10 rounded p-4 text-white font-extrabold placeholder:text-white placeholder:font-extrabold" placeholder={`${user?.assistance}`} />
      <h2 className="text-lime-500 font-extrabold mt-4">Posição de jogo</h2>
      <div className="flex w-full items-baseline justify-around">
        <label className="text-lime-500 font-extrabold mt-4">AT</label>
        <input name="position" type="radio"  className="bg-lime-700 shadow-xl w-4 h-4"/>
        <label className="text-lime-500 font-extrabold mt-4">ME</label>
        <input name="position" type="radio"  className="bg-lime-700 shadow-xl w-4 h-4"/>
        <label className="text-lime-500 font-extrabold mt-4">ZG</label>
        <input name="position" type="radio"  className="bg-lime-700 shadow-xl w-4 h-4"/>
      </div>
      <input 
        type="submit"
        value="Salvar"
        className="
          cursor-pointer 
          w-52 
          p-2 
          mt-6 
          bg-lime-500 
          rounded 
          font-extrabold 
          text-lime-800
          hover:text-white
          hover:scale-105
          active:opacity-45"
      />
    </form>
  )
}