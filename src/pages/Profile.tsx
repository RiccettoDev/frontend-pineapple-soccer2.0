import { useState, useEffect } from "react"
import { getUserLocalStorage } from "../context/AuthProvider/util"
import { IUser } from "../context/AuthProvider/types"
import { Api } from "../services/api"

import Shield from "../components/profile/Shield"
import Stars from "../components/profile/Stars"
import Field from "../components/profile/Field"
import Statistic from "../components/profile/Statistic"
import ButtonLink from "../components/ButtonLink"
import ModalProfile from "../components/profile/ModalProfile"

export default function Profile() {
  const [visible, setVisible] = useState(false)
  const [user, setUser] = useState<IUser | null>()

  const toggleModal = () => {
    setVisible(!visible)
  }

  useEffect(() => {
    const user = getUserLocalStorage()
    const userId = user.id

    const fetchUser = async () => {
      try {
        const response = await Api.get(`/users/${userId}`);
        if (user) {
          setUser(response.data)
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchUser()
  }, [visible])

  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center justify-center pt-40">
        <div className="animate-slide-down flex flex-col items-center">
          <Shield name1={user?.name} name2={user?.surname} img={user?.img} />
          <Stars qtd={user?.stars} size={38} color="#fb8c00" />
        </div>
        <div className=" animate-slide-down flex flex-col items-center justify-center">
          <div className="m-4 mt-12">
            <Field position={user?.position} />
          </div>
          <div className="flex">
            <Statistic
              force={user?.force}
              attack={user?.attack}
              defense={user?.defense}
              position={user?.position}
              goals={user?.goals}
              assistance={user?.assistance}
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