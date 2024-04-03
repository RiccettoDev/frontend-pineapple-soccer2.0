import logo from '../assets/img/home/home.jpg'
import pineapple from '../assets/img/pineappleHome.jpg'

export default function Home(){
  return(
    <div>
      <img src={logo} alt="pineappleSoccer" className='top-[100px] h-[500px] relative z-10 lg:w-full custom:w-full custom:h-full' />
      <img src={pineapple} alt="image pineapple" className='animate-slide-down absolute left-6 top-[250px] z-30 h-48 lg:h-[250px] lg:left-[400px] lg:top-[150px] custom:left-[800px] custom:h-[500px] custom:top-[500px]' />
      <div className='animate-slide-down flex items-end p-4 justify-center w-[350px] h-[255px] top-[280px] left-6 bg-gray-800 rounded-2xl absolute z-20 opacity-70 lg:p-10 lg:w-[600px] lg:h-[250px] lg:left-[340px] lg:top-[250px] custom:w-[2000px] custom:left-60 custom:h-[600px] custom:top-[650px]'>
        <h1 className='text-white font-extrabold text-xl text-center lg:text-3xl custom:text-6xl custom:mb-6'>Organize sua pelada com a galera</h1>
      </div>
      <div className="fixed bottom-0 left-0 z-40 w-full h-2/3 bg-gradient-to-t from-black via-transparent to-transparent"></div>
    </div>
  )
}