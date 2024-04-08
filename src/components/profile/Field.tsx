import field from '../../assets/img/profile/field.png'
import pinPlayer from '../../assets/img/profile/pinPlayer.png'

interface FieldProps{
  position: string
}

export default function Field({ position }: FieldProps){
  return(
    <div>
      <img src={field} alt="Image field" className='w-[600px]'/>
      {position === 'z' && (
        <img src={pinPlayer} alt="Image pin gps" className='absolute w-20 top-[540px] right-[240px] lg:top-[670px] lg:right-[900px]'/>
      )}
      {position === 'm' && (
        <img src={pinPlayer} alt="Image pin gps" className='absolute w-20 top-[540px] right-[150px] lg:top-[670px] lg:right-[770px]'/>
      )}
      {position === 'a' && (
        <img src={pinPlayer} alt="Image pin gps" className='absolute w-20 top-[540px] right-[70px] lg:top-[670px] lg:right-[650px]'/>
      )}
    </div>
  )
}