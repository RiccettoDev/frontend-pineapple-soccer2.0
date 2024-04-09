// Componente Players
import { useState, useEffect } from "react"
import CardPlayer from "../components/players/CardPlayer"

interface PlayersProps {
  id: string
  name: string
  surname: string
  surname2: string
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
    setTimeout(() => {
      fetch('http://localhost:5000/user', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(resp => resp.json())
        .then(data => {
          console.log(data);
          setPlayers(data);
        })
        .catch(err => console.log(err));
    }, 500);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full mb-6 gap-4 pt-36 p-4">
      {players.map((player) => (
        <CardPlayer key={player.id} playerProps={player}/>
      ))}
    </div>
  );
}
