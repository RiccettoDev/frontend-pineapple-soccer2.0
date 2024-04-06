import range from '../assets/img/range.svg'

interface ShieldProps{
  name1: string;
  name2: string;
  img: string;
}

export default function Shield({img, name1, name2}: ShieldProps){
  return(
    <div className="w-80 h-96 relative">
      <div className="w-full h-full rounded-shield bg-gradient-to-r from-amber-400 relative z-10 flex items-center justify-center">
        <div className="w-[98%] h-[98%] rounded-shield bg-slate-800 relative z-20 flex items-center justify-center">
          <div className="w-[88%] h-[88%] rounded-shield bg-gradient-to-r from-amber-400 absolute z-30 inset-0 m-auto justify-center items-center">
            <img src={img} alt="Image Player" className="w-full h-[85%] m-1"/>
          </div>
          <div className='w-[600px] top-[180px] absolute z-40'>
            <img src={range} alt="Image range" />
            <div className='w-40 absolute top-[125px] right-[220px] items-center justify-center flex gap-2'>
              {!name2 && (
                <h1 className='text-white font-extrabold text-lg'>{name1}</h1>
              )}
              {name2 && (
                <h1 className='text-white font-extrabold text-lg -rotate-6'>{name1}</h1>
              )}
              {name2 && (
                <h1 className='text-white font-extrabold text-lg rotate-6'>{name2}</h1>  
              )}  
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
