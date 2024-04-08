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
      <div className="flex flex-col items-center justify-center w-full top-[150px] absolute">
        <Shield name1="Neymar Jr." name2="" img={neymar} />
        <Stars qtd={10} />
        <div className="flex flex-col items-center justify-center lg:flex-row mt-12">
          <div className="mt-10">
            <Field position="z"/>
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
        <div className="mb-6 lg:top-4 lg:right-12 lg:absolute custom:z-50">
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