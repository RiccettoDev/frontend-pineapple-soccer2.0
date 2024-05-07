import field from '../assets/img/teams/field.png'

export default function Teams() {
  const currentDate = new Date()
  const year = currentDate.getFullYear()
  const month = currentDate.getMonth() + 1
  const day = currentDate.getDate()

  return (
    <div className="w-full h-full flex flex-col items-center justify-center pt-32">
      <h1 className="text-white font-extrabold text-3xl">{`${day}/${month}/${year}`}</h1>
      <h1 className="font-extrabold text-3xl mt-4 text-cyan-700">Azul</h1>
      <div className='flex flex-col pt-20 mb-8 relative lg:w-[50%] lg:pt-36 lg:mb-28'>
        <img src={field} alt="image field" className='w-[390px] transform rotate-90 lg:w-full' />
        <div className='w-14 h-14 bg-cyan-700 rounded-full absolute left-[43%] active:scale-150 lg:w-28 lg:h-28 lg:left-[260px]'>
          <img src="https://i.ibb.co/HNLzzLK/Eliabe.png" alt="" className='w-[100%] h-[100%] rounded-full' />
        </div>
        <div className='w-14 h-14 bg-cyan-700 rounded-full absolute left-[95px] top-[180px] active:scale-150 lg:w-28 lg:h-28 lg:left-[155px] lg:top-[290px]'>
          <img src="https://i.ibb.co/fG4wjK7/Matheus-Garcia.png" alt="" className='w-[100%] h-[100%] rounded-full' />
        </div>
        <div className='w-14 h-14 bg-cyan-700 rounded-full absolute left-[245px] top-[180px] active:scale-150 lg:w-28 lg:h-28 lg:left-[370px] lg:top-[290px]'>
          <img src="https://i.ibb.co/vs1m56L/Renan-Rosa.png" alt="" className='w-[100%] h-[100%] rounded-full' />
        </div>
        <div className='w-14 h-14 bg-cyan-700 rounded-full absolute left-[95px] top-[280px] active:scale-150 lg:w-28 lg:h-28 lg:left-[155px] lg:top-[450px]'>
          <img src="https://i.ibb.co/N6wXJJQ/Almeida.png" alt="" className='w-[100%] h-[100%] rounded-full' />
        </div>
        <div className='w-14 h-14 bg-cyan-700 rounded-full absolute left-[245px] top-[280px] active:scale-150 lg:w-28 lg:h-28 lg:left-[370px] lg:top-[450px]'>
          <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" className='w-[100%] h-[100%] rounded-full' />
        </div>
      </div>
      <h1 className="font-extrabold text-3xl mt-10 text-white">Branco</h1>
      <div className='flex flex-col pt-20 mb-8 lg:w-[50%] lg:pt-36 lg:mb-28'>
        <img src={field} alt="image field" className='w-[390px] transform rotate-90 lg:w-full' />
        <div className='w-14 h-14 bg-white rounded-full absolute left-[43%] active:scale-150 lg:w-28 lg:h-28 lg:left-[580px]'>
          <img src="https://i.ibb.co/KsJTGcF/Capturar-removebg-preview.png" alt="" className='w-[100%] h-[100%] rounded-full' />
        </div>
        <div className='w-14 h-14 bg-white rounded-full absolute left-[95px] top-[860px] active:scale-150 lg:w-28 lg:h-28 lg:left-[470px] lg:top-[1270px]'>
          <img src="https://i.ibb.co/mTv8Zrh/Breno.png" alt="" className='w-[100%] h-[100%] rounded-full' />
        </div>
        <div className='w-14 h-14 bg-white rounded-full absolute left-[245px] top-[860px] active:scale-150 lg:w-28 lg:h-28 lg:left-[685px] lg:top-[1270px]'>
          <img src="https://i.ibb.co/WVbbmVR/Renan-Bonin.png" alt="" className='w-[100%] h-[100%] rounded-full ' />
        </div>
        <div className='w-14 h-14 bg-white rounded-full absolute left-[95px] top-[960px] active:scale-150 lg:w-28 lg:h-28 lg:left-[685px] lg:top-[1440px]'>
          <img src="https://i.ibb.co/LpXvJcx/Kamacho.png" alt="" className='w-[100%] h-[100%] rounded-full' />
        </div>
        <div className='w-14 h-14 bg-white rounded-full absolute left-[245px] top-[960px] active:scale-150 lg:w-28 lg:h-28 lg:left-[470px] lg:top-[1440px]'>
          <img src="https://i.ibb.co/zh6CHZd/eduardo-Riccetto.png" alt="" className='w-[100%] h-[100%] rounded-full' />
        </div>
      </div>
      <h1 className="font-extrabold text-3xl mt-10 text-amber-400">Amarelo</h1>
      <div className='flex flex-col pt-20 mb-8 lg:w-[50%] lg:pt-36 lg:mb-28'>
        <img src={field} alt="image field" className='w-[390px] transform rotate-90 lg:w-full' />
        <div className='w-14 h-14 bg-amber-400 rounded-full absolute left-[43%] active:scale-150 lg:w-28 lg:h-28 lg:left-[580px]'>
          <img src="https://i.ibb.co/4J7PXBv/Bruno-Bonin.png" alt="" className='w-[100%] h-[100%] rounded-full' />
        </div>
        <div className='w-14 h-14 bg-amber-400 rounded-full absolute left-[95px] top-[1320px] active:scale-150 lg:w-28 lg:h-28 lg:left-[470px] lg:top-[2050px]'>
          <img src="https://i.ibb.co/BswWHj6/Batata.png" alt="" className='w-[100%] h-[100%] rounded-full' />
        </div>
        <div className='w-14 h-14 bg-amber-400 rounded-full absolute left-[245px] top-[1320px] active:scale-150 lg:w-28 lg:h-28 lg:left-[685px] lg:top-[2050px]'>
          <img src="https://i.ibb.co/RTK6P1Z/Rodrigo.png" alt="" className='w-[100%] h-[100%] rounded-full' />
        </div>
        <div className='w-14 h-14 bg-amber-400 rounded-full absolute left-[95px] top-[1420px] active:scale-150 lg:w-28 lg:h-28 lg:left-[470px] lg:top-[2215px]'>
          <img src="https://i.ibb.co/GcMyTcj/pedrin-removebg-preview.png" alt="" className='w-[100%] h-[100%] rounded-full' />
        </div>
        <div className='w-14 h-14 bg-amber-400 rounded-full absolute left-[245px] top-[1420px] active:scale-150 lg:w-28 lg:h-28 lg:left-[685px] lg:top-[2215px]'>
          <img src="https://i.ibb.co/D7C3j1c/Selton.png" alt="" className='w-[100%] h-[100%] rounded-full' />
        </div>
      </div>
    </div>
  )
}