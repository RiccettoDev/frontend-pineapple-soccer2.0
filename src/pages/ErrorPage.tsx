import ButtonLink from '../components/ButtonLink'
import { Link } from 'react-router-dom'

import pineappleSoccer from '../assets/img/pineappleHome.jpg'

export default function ErrorPage(){
  return(
    <div className='flex flex-col items-center justify-center p-14 mt-20 lg:mt-0 lg:p-36'>
      <div className='absolute top-12 left-12'>
        <Link to='/'>
          <ButtonLink title='Voltar'/>
        </Link>
      </div>
      <img src={pineappleSoccer} alt="image pineappleSoccer"/>
      <h1 className='text-white font-extrabold text-4xl lg:text-6xl m-6'>Error 404!</h1>
      <h2 className='text-white font-extrabold text-lg text-center lg:text-2xl'>Desculpe, está página não pode ser encontrada!</h2>
    </div>
  )
}