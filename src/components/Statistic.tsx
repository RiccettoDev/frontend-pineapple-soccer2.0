import { GiPositionMarker } from "react-icons/gi";
import { SlEnergy } from "react-icons/sl";
import { GiBrickWall } from "react-icons/gi";
import { GiVelociraptor } from "react-icons/gi";
import { PiSoccerBallFill } from "react-icons/pi";
import { SiIfood } from "react-icons/si";

interface StatisticProps{
  force: string
  attack: string
  defense: string
  position: string
  goals: string
  assistance: string
}

export default function Statistic({ force, attack, defense, position, goals, assistance }: StatisticProps){
  return(
    <div>
      <div className="flex flex-col m-6">
        <div className="flex items-center mt-2">
          <SlEnergy size={32} color="#fff" />
          <h1 className="text-white font-extrabold text-xl m-2">
            Vigor: <span className="text-lime-500">{force}%</span>
          </h1>
          <div className="w-32 h-4 bg-white items-center p-[0.1em]">
            <div className={`w-[100%] h-[99%] bg-lime-500`}></div>
          </div>
        </div>
        <div className="flex items-center mt-2">
          <GiVelociraptor size={32} color="#fff" />
          <h1 className="text-white font-extrabold text-xl m-2">
            Ataque: <span className="text-lime-500">{attack}%</span>
          </h1>
          <div className="w-32 h-4 bg-white items-center p-[0.1em]">
            <div className={`w-[100%] h-[99%] bg-lime-500`}></div>
          </div>
        </div>
        <div className="flex items-center mt-2">
          <GiBrickWall size={32} color="#fff" />
          <h1 className="text-white font-extrabold text-xl m-2">
            Defesa: <span className="text-lime-500">{defense}%</span>
          </h1>
          <div className="w-32 h-4 bg-white items-center p-[0.1em]">
            <div className={`w-[60%] h-[99%] bg-lime-500`}></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start ml-6 mb-6">
        <div className="flex items-center mt-2">
          <GiPositionMarker size={32} color="#fff" />
          <h1 className="text-white font-extrabold text-xl m-2">
            Posição: <span className="text-lime-500">{position}</span>
          </h1>
        </div>
        <div className="flex items-center mt-2">
          <PiSoccerBallFill size={32} color="#fff" />
          <h1 className="text-white font-extrabold text-xl m-2">
            Gols: <span className="text-lime-500">{goals}</span>
          </h1>
        </div>
        <div className="flex items-center mt-2">
          <SiIfood size={32} color="#fff" />
          <h1 className="text-white font-extrabold text-xl m-2">
            Assistência: <span className="text-lime-500">{assistance}</span>
          </h1>
        </div>
      </div>
    </div>
  )
}