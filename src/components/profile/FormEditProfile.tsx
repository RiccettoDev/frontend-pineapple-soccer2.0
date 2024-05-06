import { useState, useEffect } from "react"
import { getUserLocalStorage } from "../../context/AuthProvider/util";
import { IUser } from "../../context/AuthProvider/types";
import { updateUser } from "../../services/api/updateUser";
import { Api } from "../../services/api";

interface FormEditProfileProps {
  closeModal: () => void; // Defina closeModal como uma propriedade esperada
}

export default function FormEditProfile({ closeModal }: FormEditProfileProps) {
  const [user, setUser] = useState<IUser | null>({
    name: "",
    surname: "",
    email: "",
    password: "",
    stars: "",
    position: "",
    force: "",
    attack: "",
    defense: "",
    goals: "",
    assistance: "",
    status: "",
    img: ""
  })

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
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleChangePosition = (position: string) => {
    setUser((prevUser) => ({
      ...prevUser,
      position: position,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Chame a função para enviar a requisição de atualização
      await updateUser(user);
      alert("Perfil atualizado com sucesso!");
      closeModal();
    } catch (error) {
      console.error("Erro ao atualizar perfil:", error);
      alert("Erro ao atualizar perfil. Por favor, tente novamente.");
    }
  };

  return (
    <form className="flex flex-col w-full pl-4 pr-4 lg:pl-20" onSubmit={handleSubmit}>

      <label className="text-lime-500 font-extrabold">{user?.name}</label>
      <input
        type="text"
        name="name"
        value={user?.name}
        onChange={handleChange}
        className="bg-lime-700 shadow-xl mt-1 w-[90%] h-10 rounded p-4 text-white font-extrabold placeholder:text-white placeholder:font-extrabold"
        placeholder={'Digite seu nome'}
      />

      <label className="text-lime-500 font-extrabold">{user?.surname}</label>
      <input
        type="text"
        name="surname"
        value={user?.surname}
        onChange={handleChange}
        className="bg-lime-700 shadow-xl mt-1 w-[90%] h-10 rounded p-4 text-white font-extrabold placeholder:text-white placeholder:font-extrabold"
        placeholder={'Digite seu sobrenome'}
      />

      <label className="text-lime-500 font-extrabold">{user?.email}</label>
      <input
        type="text"
        name="email"
        value={user?.email}
        onChange={handleChange}
        className="bg-lime-700 shadow-xl mt-1 w-[60%] h-10 rounded p-4 text-white font-extrabold placeholder:text-white placeholder:font-extrabold"
        placeholder={'Digite seu e-mail'}
      />

      <label className="text-lime-500 font-extrabold">******</label>
      <input
        type="text"
        name="password"
        value={user?.password}
        onChange={handleChange}
        className="bg-lime-700 shadow-xl mt-1 w-[60%] h-10 rounded p-4 text-white font-extrabold placeholder:text-white placeholder:font-extrabold"
        placeholder={'Digite sua senha'}
      />

      <h2 className="text-lime-500 font-extrabold mt-4">Posição de jogo</h2>
      <div className="flex w-full items-baseline justify-around">
        <label className="text-lime-500 font-extrabold mt-4">AT</label>
        <input
          value="AT"
          checked={user?.position === "AT"}
          onChange={(e) => handleChangePosition(e.target.value)}
          name="position"
          type="radio"
          className="bg-lime-700 shadow-xl w-4 h-4"
        />
        <label className="text-lime-500 font-extrabold mt-4">ME</label>
        <input
          value="ME"
          checked={user?.position === "ME"}
          onChange={(e) => handleChangePosition(e.target.value)}
          name="position"
          type="radio"
          className="bg-lime-700 shadow-xl w-4 h-4"
        />
        <label className="text-lime-500 font-extrabold mt-4">ZG</label>
        <input
          value="ZG"
          checked={user?.position === "ZG"}
          onChange={(e) => handleChangePosition(e.target.value)}
          name="position"
          type="radio"
          className="bg-lime-700 shadow-xl w-4 h-4"
        />
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