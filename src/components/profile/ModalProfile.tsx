import { useState, useEffect } from "react"
import { getUserLocalStorage } from "../../context/AuthProvider/util";
import { IUser } from "../../context/AuthProvider/types";

import { IoIosCloseCircle } from "react-icons/io";
import { MdEdit } from "react-icons/md";

import FormEditProfile from "./FormEditProfile";

export default function ModalProfile({ toggleModal }: any) {
  const [visible, setVisible] = useState(true)
  const [user, setUser] = useState<IUser | null>()

  const closeModal = () => {
    setVisible(false)
    console.log(visible);
    toggleModal()
  };

  useEffect(() => {
    const user = getUserLocalStorage()

    if (user) {
      setUser(user)
    }
  }, [])

  return (
    <>
      <div className="flex flex-col absolute z-40 w-[90%] h-[90%] lg:h-[1000px] -top-5 rounded-lg bg-slate-800">
        <button onClick={closeModal} className="text-lime-600 hover:text-white mt-4 ml-4">
          <IoIosCloseCircle size={38} />
        </button>
        <div className="w-full h-full flex flex-col items-center mt-6">
          <div className="flex items-center justify-center bg-lime-700 shadow-xl w-[250px] h-[250px] rounded-full">
            <div className="relative">
              <img src={user?.img} alt="Image Player" className="w-[250px] rounded-full" />
              <button className="text-white rounded-full bg-lime-600 p-1 absolute top-32 right-2 hover:scale-110">
                <MdEdit size={38} />
              </button>
            </div>
          </div>
          <FormEditProfile closeModal={closeModal} />
        </div>
      </div>
      <button onClick={closeModal} className="w-full h-[2500px] right-0 bg-black opacity-55 fixed z-30"></button>
    </>
  )
}