import Shield from "../components/Shield"
import Stars from "../components/Stars"
import Field from "../components/Field"
import Statistic from "../components/Statistic"

import neymar from '../assets/img/neymar.png'

export default function Profile(){
  return(
    <div>
      <div className="flex flex-col items-center justify-center w-full top-[150px] absolute">
        <Shield name1="Neymar Jr." name2="" img={neymar} />
        <Stars qtd={10} />
        <div className="flex flex-col items-center justify-center lg:flex-row mt-12">
          <div className="mt-10">
            <Field position="a"/>
          </div>
          <div className="flex">
            <Statistic
              force="100"
              attack="100"
              defense="60"
              position="AT"
              goals="72"
              assistance="34"
            />
          </div>
        </div>
      </div>
    </div>
  )
}