import { useState, useEffect } from "react";
import CardPlayer from "../components/players/CardPlayer";
import { Api } from "../services/api";
import { IoIosCloseCircle } from "react-icons/io";
import ShieldPlayers from "../components/players/ShieldPlayers";
import Stars from "../components/profile/Stars";
import emailjs from 'emailjs-com';
import { IUser } from "../context/AuthProvider/types";
import { getUserLocalStorage } from "../context/AuthProvider/util"

interface PlayersProps {
  id: string;
  name: string;
  surname: string;
  force: string;
  attack: string;
  defense: string;
  position: string;
  goals: string;
  assistance: string;
  status: string;
  stars: string;
  img: string;
  kick: string;
  pass: string;
  headbutt: string;
}

emailjs.init("k9tvPkQ1DGlpzD7kw");

export default function Players() {
  const [players, setPlayers] = useState<PlayersProps[]>([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState<PlayersProps | null>(null);
  const [user, setUser] = useState<IUser | null>(null);

  // Estados para armazenar os valores dos inputs
  const [force, setForce] = useState('');
  const [attack, setAttack] = useState('');
  const [defense, setDefense] = useState('');
  const [kick, setKick] = useState('');
  const [pass, setPass] = useState('');
  const [headbutt, setHeadbutt] = useState('');

  useEffect(() => {
    const user = getUserLocalStorage();
    const userId = user.id;

    const fetchUser = async () => {
      try {
        const response = await Api.get(`/users/${userId}`);
        if (user) {
          setUser(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    const fetchPlayers = async () => {
      try {
        const response = await Api.get('/users');
        setPlayers(response.data.users);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUser();
    fetchPlayers();
  }, []);

  const handleVoteClick = (player: PlayersProps) => {
    setSelectedPlayer(player);
    // Inicializar os valores dos inputs com os valores do jogador selecionado
    setForce(player.force);
    setAttack(player.attack);
    setDefense(player.defense);
    setKick(player.kick);
    setPass(player.pass);
    setHeadbutt(player.headbutt);
    setModalIsVisible(true);
  };

  const closeModal = () => {
    setModalIsVisible(false);
  };

  const handleSaveClick = () => {
    if (selectedPlayer) {
      const templateParams = {
        user_name: `${user?.name} ${user?.surname}`,
        player_name: `${selectedPlayer.name} ${selectedPlayer.surname}`,
        player_force: force,
        player_attack: attack,
        player_defense: defense,
        player_shoot: kick,
        player_pass: pass,
        player_head: headbutt,
        to_name: "Pineapple Soccer",
        from_name: "Sua Aplicação"
      };

      emailjs.send("service_8z299xu", "template_bgsgfpw", templateParams)
        .then((response) => {
          console.log("Email enviado com sucesso!", response.status, response.text);
          closeModal();
        })
        .catch((error) => {
          console.log("Falha ao enviar o e-mail.", error);
        });
    }
  };

  return (
    <div className="animate-slide-down flex flex-col items-center justify-center w-full mb-6 gap-4 pt-36 p-4">
      <h1 className="text-white font-extrabold text-3xl">Olá {user?.name}!</h1>
      {players.length > 0 ? (
        players.map((player) => (
          <CardPlayer key={player.id} playerProps={{ ...player, onVote: handleVoteClick }} />
        ))
      ) : (
        <p className="text-3xl text-white font-extrabold">Loading...</p>
      )}
      {modalIsVisible && selectedPlayer && (
        <div className="bg-slate-700/80 p-2 w-full h-full fixed top-0 left-0 z-10 flex justify-center items-center">
          <div className="bg-slate-800 w-[700px] h-[400px] flex justify-center items-center relative flex-col rounded-lg">
            <button onClick={closeModal} className="text-lime-600 hover:text-white mt-4 ml-4 absolute top-0 right-5">
              <IoIosCloseCircle size={38} />
            </button>
            <div className="flex gap-4 lg:gap-20">
              <div className="mt-8">
                <ShieldPlayers
                  name1={selectedPlayer.name}
                  name2={selectedPlayer.surname}
                  img={selectedPlayer.img}
                />
                <Stars qtd={selectedPlayer.stars} size={25} color="#5a8a10" />
              </div>
              <div className="flex flex-col gap-4 p-4">
                <h1 className="text-lime-500 font-extrabold">Habilidades:</h1>
                <div className="flex">
                  <h1 className="text-yellow-700 font-extrabold">
                    <span className="text-lime-700 drop-shadow-lg shadow-black">Vigor:</span>{" "}
                    <input
                      type="text"
                      value={force}
                      onChange={(e) => setForce(e.target.value)}
                      className="w-14 bg-slate-700 rounded-lg text-center"
                    />
                  </h1>
                </div>
                <h1 className="text-yellow-700 font-extrabold">
                  <span className="text-lime-700 drop-shadow-lg shadow-black">Ataque:</span>{" "}
                  <input
                    type="text"
                    value={attack}
                    onChange={(e) => setAttack(e.target.value)}
                    className="w-14 bg-slate-700 rounded-lg text-center"
                  />
                </h1>
                <h1 className="text-yellow-700 font-extrabold">
                  <span className="text-lime-700 drop-shadow-lg shadow-black">Defesa:</span>{" "}
                  <input
                    type="text"
                    value={defense}
                    onChange={(e) => setDefense(e.target.value)}
                    className="w-14 bg-slate-700 rounded-lg text-center"
                  />
                </h1>
                <h1 className="text-yellow-700 font-extrabold">
                  <span className="text-lime-700 drop-shadow-lg shadow-black">Chute:</span>{" "}
                  <input
                    type="text"
                    value={kick}
                    onChange={(e) => setKick(e.target.value)}
                    className="w-14 bg-slate-700 rounded-lg text-center"
                  />
                </h1>
                <h1 className="text-yellow-700 font-extrabold">
                  <span className="text-lime-700 drop-shadow-lg shadow-black">Passe:</span>{" "}
                  <input
                    type="text"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    className="w-14 bg-slate-700 rounded-lg text-center"
                  />
                </h1>
                <h1 className="text-yellow-700 font-extrabold">
                  <span className="text-lime-700 drop-shadow-lg shadow-black">Cabeceio:</span>{" "}
                  <input
                    type="text"
                    value={headbutt}
                    onChange={(e) => setHeadbutt(e.target.value)}
                    className="w-14 bg-slate-700 rounded-lg text-center"
                  />
                </h1>
                <button onClick={handleSaveClick} className="bg-lime-700 text-lime-50 rounded-lg hover:opacity-40">Salvar</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
