// Componente Players
import { useState, useEffect } from "react"
import CardPlayer from "../components/players/CardPlayer"

import Layout from "../layout/Layout"

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
    setTimeout(() => {
      fetch('http://91.108.126.64:3333/users', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(resp => resp.json())
        .then(data => {
          console.log(data);
          setPlayers(data.users);
        })
        .catch(err => console.log(err));
    }, 500);
  }, []);

  return (
    <Layout>
      <div className="animate-slide-down flex flex-col items-center justify-center w-full mb-6 gap-4 pt-36 p-4">
        {players.length > 0 ? (
          players.map((player) => (
            <CardPlayer key={player.id} playerProps={player} />
          ))
        ) : (
          <p className="text-3xl text-white font-extrabold">Loading...</p>
        )}
      </div>
    </Layout>
  );
}
