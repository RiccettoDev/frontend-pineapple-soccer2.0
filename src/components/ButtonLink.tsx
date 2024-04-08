interface ButtonProps{
  title: string
}

export default function ButtonLink({ title }: ButtonProps){
  return(
    <div className='flex items-center justify-center h-10 w-24 rounded-3xl bg-lime-700 hover:scale-110'>
      <h1 className='text-white font-extrabold'>{title}</h1>
    </div>
  )
}