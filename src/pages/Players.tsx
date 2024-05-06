// Componente Players
import { useState, useEffect } from "react"
import CardPlayer from "../components/players/CardPlayer"
import { Api } from "../services/api"

interface PlayersProps {
  id: string
  name: string
  surname: string
  force: string
  attack: string
  defense: string
  position: string
  goals: string
  assistance: string
  status: string
  stars: string
  img: string
}

export default function Players() {
  const [players, setPlayers] = useState<PlayersProps[]>([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await Api.get('/users');
        setPlayers(response.data.users);
      } catch (error) {
        console.log(error);
      }
    };

    setTimeout(() => {
      fetchPlayers();
    }, 500)
  }, []);

  return (
    <div className="animate-slide-down flex flex-col items-center justify-center w-full mb-6 gap-4 pt-36 p-4">
      {players.length > 0 ? (
        players.map((player) => (
          <CardPlayer key={player.id} playerProps={player} />
        ))
      ) : (
        <p className="text-3xl text-white font-extrabold">Loading...</p>
      )}
    </div>
  );
}
