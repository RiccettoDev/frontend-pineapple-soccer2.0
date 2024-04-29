import ShieldPlayers from "./ShieldPlayers"
import Stars from "../profile/Stars"

export default function CardPlayer({ playerProps }: any) {

  return (
    <div className="flex items-center w-full rounded-lg bg-yellow-400 lg:w-[500px]">
      <div className="p-4">
        <div>
          <ShieldPlayers
            name1={playerProps.name}
            name2={playerProps.surname}
            img={playerProps.img}
          />
        </div>
      </div>
      <div className="p-2">
        <div className="flex gap-2">
          <h1 key={playerProps.id} className="hidden lg:block lg:text-yellow-700 lg:font-extrabold"><span className="text-lime-900 drop-shadow-lg shadow-black">Nome:</span> {playerProps.name} {playerProps.surname}</h1>
        </div>
        <div className="flex flex-col">
          <h1 key={playerProps.id} className="text-yellow-700 font-extrabold"><span className="text-lime-900 drop-shadow-lg shadow-black">Vigor:</span> {playerProps.force}%</h1>
          <h1 key={playerProps.id} className="text-yellow-700 font-extrabold"><span className="text-lime-900 drop-shadow-lg shadow-black">Ataque:</span> {playerProps.attack}%</h1>
          <h1 key={playerProps.id} className="text-yellow-700 font-extrabold"><span className="text-lime-900 drop-shadow-lg shadow-black">Defesa:</span> {playerProps.defense}%</h1>
          <h1 key={playerProps.id} className="text-yellow-700 font-extrabold"><span className="text-lime-900 drop-shadow-lg shadow-black">Gols:</span> {playerProps.goals}</h1>
          <h1 key={playerProps.id} className="text-yellow-700 font-extrabold"><span className="text-lime-900 drop-shadow-lg shadow-black">Assistências:</span> {playerProps.assistance}</h1>
          <h1 key={playerProps.id} className="text-yellow-700 font-extrabold"><span className="text-lime-900 drop-shadow-lg shadow-black">Posição:</span> {playerProps.position}</h1>
          <h1 key={playerProps.id} className="text-yellow-700 font-extrabold"><span className="text-lime-900 drop-shadow-lg shadow-black">Status:</span> {playerProps.status}</h1>
          <h1 key={playerProps.id} className="text-yellow-700 font-extrabold -mb-8"><span className="text-lime-900 drop-shadow-lg shadow-black">Nota:</span></h1>
          <Stars qtd={playerProps.stars} size={25} color="#5a8a10" />
        </div>
      </div>
    </div>
  )
}