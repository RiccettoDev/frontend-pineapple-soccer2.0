import img from '../../img/manutencao.png'

export default function Test() {

  return (
    <div className="w-full h-full flex flex-col items-center justify-center pt-52">
      <div className='flex flex-col items-center justify-center w-[90%] h-[400px] bg-lime-500 rounded-lg'>
        <h1 className='text-lime-950 font-extrabold text-2xl'>Estamos em manutenção</h1>
        <img src={img} alt="image" />
      </div>
    </div>
  )
}