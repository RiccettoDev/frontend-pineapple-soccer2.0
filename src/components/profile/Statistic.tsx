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
  const forceNumber = parseInt(force)
  const attackNumber = parseInt(attack)
  const defenseNumber = parseInt(defense)

  return(
    <div>
      <div className="flex flex-col m-6">
        <div className="flex items-center mt-2">
          <SlEnergy size={32} color="#fff" />
          <h1 className="text-white font-extrabold text-xl m-2">
            Vigor: <span className="text-lime-500">{force}%</span>
          </h1>
          <div className="w-32 h-4 bg-white items-center p-[0.1em]">
            {forceNumber <= 10 && (
              <div className={`w-[10%] h-[99%] bg-lime-500`}></div>
            )}
            {forceNumber <= 20 && forceNumber > 10 && (
              <div className={`w-[20%] h-[99%] bg-lime-500`}></div>
            )}
            {forceNumber <= 30 && forceNumber > 20 && (
              <div className={`w-[30%] h-[99%] bg-lime-500`}></div>
            )}
            {forceNumber <= 40 && forceNumber > 30 && (
              <div className={`w-[40%] h-[99%] bg-lime-500`}></div>
            )}
            {forceNumber <= 50 && forceNumber > 40 && (
              <div className={`w-[50%] h-[99%] bg-lime-500`}></div>
            )}
            {forceNumber <= 60 && forceNumber > 50 && (
              <div className={`w-[60%] h-[99%] bg-lime-500`}></div>
            )}
            {forceNumber <= 70 && forceNumber > 60 && (
              <div className={`w-[70%] h-[99%] bg-lime-500`}></div>
            )}
            {forceNumber <= 80 && forceNumber > 70 && (
              <div className={`w-[80%] h-[99%] bg-lime-500`}></div>
            )}
            {forceNumber <= 90 && forceNumber > 80 && (
              <div className={`w-[90%] h-[99%] bg-lime-500`}></div>
            )}
            {forceNumber > 90 && (
              <div className={`w-[100%] h-[99%] bg-lime-500`}></div>
            )}
          </div>
        </div>
        <div className="flex items-center mt-2">
          <GiVelociraptor size={32} color="#fff" />
          <h1 className="text-white font-extrabold text-xl m-2">
            Ataque: <span className="text-lime-500">{attack}%</span>
          </h1>
          <div className="w-32 h-4 bg-white items-center p-[0.1em]">
            {attackNumber <= 10 && (
              <div className={`w-[10%] h-[99%] bg-lime-500`}></div>
            )}
            {attackNumber <= 20 && attackNumber > 10 && (
              <div className={`w-[20%] h-[99%] bg-lime-500`}></div>
            )}
            {attackNumber <= 30 && attackNumber > 20 && (
              <div className={`w-[30%] h-[99%] bg-lime-500`}></div>
            )}
            {attackNumber <= 40 && attackNumber > 30 && (
              <div className={`w-[40%] h-[99%] bg-lime-500`}></div>
            )}
            {attackNumber <= 50 && attackNumber > 40 && (
              <div className={`w-[50%] h-[99%] bg-lime-500`}></div>
            )}
            {attackNumber <= 60 && attackNumber > 50 && (
              <div className={`w-[60%] h-[99%] bg-lime-500`}></div>
            )}
            {attackNumber <= 70 && attackNumber > 60 && (
              <div className={`w-[70%] h-[99%] bg-lime-500`}></div>
            )}
            {attackNumber <= 80 && attackNumber > 70 && (
              <div className={`w-[80%] h-[99%] bg-lime-500`}></div>
            )}
            {attackNumber <= 90 && attackNumber > 80 && (
              <div className={`w-[90%] h-[99%] bg-lime-500`}></div>
            )}
            {attackNumber > 90 && (
              <div className={`w-[100%] h-[99%] bg-lime-500`}></div>
            )}
          </div>
        </div>
        <div className="flex items-center mt-2">
          <GiBrickWall size={32} color="#fff" />
          <h1 className="text-white font-extrabold text-xl m-2">
            Defesa: <span className="text-lime-500">{defense}%</span>
          </h1>
          <div className="w-32 h-4 bg-white items-center p-[0.1em]">
            {defenseNumber <= 10 && (
              <div className={`w-[10%] h-[99%] bg-lime-500`}></div>
            )}
            {defenseNumber <= 20 && defenseNumber > 10 && (
              <div className={`w-[20%] h-[99%] bg-lime-500`}></div>
            )}
            {defenseNumber <= 30 && defenseNumber > 20 && (
              <div className={`w-[30%] h-[99%] bg-lime-500`}></div>
            )}
            {defenseNumber <= 40 && defenseNumber > 30 && (
              <div className={`w-[40%] h-[99%] bg-lime-500`}></div>
            )}
            {defenseNumber <= 50 && defenseNumber > 40 && (
              <div className={`w-[50%] h-[99%] bg-lime-500`}></div>
            )}
            {defenseNumber <= 60 && defenseNumber > 50 && (
              <div className={`w-[60%] h-[99%] bg-lime-500`}></div>
            )}
            {defenseNumber <= 70 && defenseNumber > 60 && (
              <div className={`w-[70%] h-[99%] bg-lime-500`}></div>
            )}
            {defenseNumber <= 80 && defenseNumber > 70 && (
              <div className={`w-[80%] h-[99%] bg-lime-500`}></div>
            )}
            {defenseNumber <= 90 && defenseNumber > 80 && (
              <div className={`w-[90%] h-[99%] bg-lime-500`}></div>
            )}
            {defenseNumber > 90 && (
              <div className={`w-[100%] h-[99%] bg-lime-500`}></div>
            )}
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