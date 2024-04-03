interface ButtonProps{
  title: string
}

export default function ButtonLink({ title }: ButtonProps){
  return(
    <div className='flex items-center justify-center h-10 w-24 rounded-3xl bg-lime-500'>
      <h1 className='text-lime-900 font-extrabold'>{title}</h1>
    </div>
  )
}