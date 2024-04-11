import { useState } from "react"

import Shield from "../components/profile/Shield"
import Stars from "../components/profile/Stars"
import Field from "../components/profile/Field"
import Statistic from "../components/profile/Statistic"
import ButtonLink from "../components/ButtonLink"
import ModalProfile from "../components/profile/ModalProfile"

import neymar from '../assets/img/profile/neymar.png'

export default function Profile(){
  const [visible, setVisible] = useState(false)

  const toggleModal = () => {
    setVisible(!visible)
  }

  return(
    <div>
      <div className="flex flex-col lg:flex-row items-center justify-center w-full top-[150px] absolute">
        <div className="animate-slide-down flex flex-col items-center">
          <Shield name1="Neymar Jr." name2="" img={neymar} />
          <Stars qtd={10} size={38} color="#fb8c00"/>
        </div>
        <div className=" animate-slide-down flex flex-col items-center justify-center">
          <div className="m-4 mt-12">
            <Field position="a"/>
          </div>
          <div className="flex">
            <Statistic
              force="80"
              attack="100"
              defense="60"
              position="AT"
              goals="72"
              assistance="34"
            />
          </div>
        </div>
        <div className="animate-slide-down mt-6 mb-6 lg:top-4 lg:right-12 lg:absolute custom:z-50">
          <button onClick={() => setVisible(!visible)}>
            <ButtonLink title="Editar" />
          </button>
        </div>
        {visible && (
          <ModalProfile toggleModal={toggleModal} />
        )}
      </div>
    </div>
  )
}