import { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";

export default function ModalMatch({ toggleModal }: any) {
  const [visible, setVisible] = useState(true)


  const closeModal = () => {
    setVisible(false)
    console.log(visible);
    toggleModal()
  };

  return (
    <div className="w-[80%] h-[50%] bg-slate-500 absolute top-52 rounded-md text-lime-500 p-4">
      <button onClick={closeModal} className="hover:scale-110">
        <IoIosCloseCircle size={38} />
      </button>
      <div className="flex flex-col items-center justify-center mt-4 mb-6">
        <h1 className="font-extrabold text-white text-2xl">Fala aew peladeiro!</h1>
        <h1 className="font-extrabold text-lime-400 text-2xl">Hoje é dia de jogo</h1>
        <h1 className="font-extrabold text-white text-2xl">Borá se escalar?</h1>

      </div>
      <div className="w-full flex items-center justify-center gap-6">
        <button onClick={closeModal} className="w-[30%] h-[40%] bg-lime-500 text-lime-900 font-extrabold text-2xl rounded-2xl hover:scale-110">Sim</button>
        <button onClick={closeModal} className="w-[30%] h-[40%] bg-lime-500 text-lime-900 font-extrabold text-2xl rounded-2xl hover:scale-110">Não</button>
      </div>
    </div>
  )
}