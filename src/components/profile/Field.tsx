import field from '../../assets/img/profile/field.png'
import pinPlayer from '../../assets/img/profile/pinPlayer.png'

interface FieldProps{
  position: string
}

export default function Field({ position }: FieldProps){
  return(
    <div className='relative'>
      <img src={field} alt="Image field" className='w-[600px]'/>
      {position === 'z' && (
        <img src={pinPlayer} alt="Image pin gps" className='absolute w-20 -top-[2px] right-[220px] lg:top-[10px] lg:right-[400px]'/>
      )}
      {position === 'm' && (
        <img src={pinPlayer} alt="Image pin gps" className='absolute w-20 -top-[2px] right-[130px] lg:top-[10px] lg:right-[260px]'/>
      )}
      {position === 'a' && (
        <img src={pinPlayer} alt="Image pin gps" className='absolute w-20 -top-[2px] right-[60px] lg:top-[10px] lg:right-[130px]'/>
      )}
    </div>
  )
}