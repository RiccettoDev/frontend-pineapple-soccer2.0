import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { BsStar } from "react-icons/bs";

interface StarsProps{
  qtd: number
  size: number
  color: string
}

export default function Stars({ qtd, size, color }: StarsProps){
  return(
    <div className="flex gap-2 mt-8">
      {qtd === 10 && (
        <>
          <BsStarFill size={size} color={`${color}`}/>
          <BsStarFill size={size} color={`${color}`}/>
          <BsStarFill size={size} color={`${color}`}/>
          <BsStarFill size={size} color={`${color}`}/>
          <BsStarFill size={size} color={`${color}`}/>
        </>
      )}
      {qtd === 9 && (
        <>
          <BsStarFill size={size} color={`${color}`}/>
          <BsStarFill size={size} color={`${color}`}/>
          <BsStarFill size={size} color={`${color}`}/>
          <BsStarFill size={size} color={`${color}`}/>
          <BsStarHalf size={size} color={`${color}`}/>
        </>
      )}
      {qtd === 8 && (
        <>
          <BsStarFill size={size} color={`${color}`}/>
          <BsStarFill size={size} color={`${color}`}/>
          <BsStarFill size={size} color={`${color}`}/>
          <BsStarFill size={size} color={`${color}`}/>
          <BsStar size={size} color={`${color}`}/>
        </>
      )}
      {qtd === 7 && (
        <>
          <BsStarFill size={size} color={`${color}`}/>
          <BsStarFill size={size} color={`${color}`}/>
          <BsStarFill size={size} color={`${color}`}/>
          <BsStarHalf size={size} color={`${color}`}/>
          <BsStar size={size} color={`${color}`}/>
        </>
      )}
      {qtd === 6 && (
        <>
          <BsStarFill size={size} color={`${color}`}/>
          <BsStarFill size={size} color={`${color}`}/>
          <BsStarFill size={size} color={`${color}`}/>
          <BsStar size={size} color={`${color}`}/>
          <BsStar size={size} color={`${color}`}/>
        </>
      )}
      {qtd === 5 && (
        <>
          <BsStarFill size={size} color={`${color}`}/>
          <BsStarFill size={size} color={`${color}`}/>
          <BsStarHalf size={size} color={`${color}`}/>
          <BsStar size={size} color={`${color}`}/>
          <BsStar size={size} color={`${color}`}/>
        </>
      )}
      {qtd === 4 && (
        <>
          <BsStarFill size={size} color={`${color}`}/>
          <BsStarFill size={size} color={`${color}`}/>
          <BsStar size={size} color={`${color}`}/>
          <BsStar size={size} color={`${color}`}/>
          <BsStar size={size} color={`${color}`}/>
        </>
      )}
      {qtd === 3 && (
        <>
          <BsStarFill size={size} color={`${color}`}/>
          <BsStarHalf size={size} color={`${color}`}/>
          <BsStar size={size} color={`${color}`}/>
          <BsStar size={size} color={`${color}`}/>
          <BsStar size={size} color={`${color}`}/>
        </>
      )}
      {qtd === 2 && (
        <>
          <BsStarFill size={size} color={`${color}`}/>
          <BsStar size={size} color={`${color}`}/>
          <BsStar size={size} color={`${color}`}/>
          <BsStar size={size} color={`${color}`}/>
          <BsStar size={size} color={`${color}`}/>
        </>
      )}
      {qtd === 1 && (
        <>
          <BsStarHalf size={size} color={`${color}`}/>
          <BsStar size={size} color={`${color}`}/>
          <BsStar size={size} color={`${color}`}/>
          <BsStar size={size} color={`${color}`}/>
          <BsStar size={size} color={`${color}`}/>
        </>
      )}
      {qtd === 0 && (
        <>
          <BsStar size={size} color={`${color}`}/>
          <BsStar size={size} color={`${color}`}/>
          <BsStar size={size} color={`${color}`}/>
          <BsStar size={size} color={`${color}`}/>
          <BsStar size={size} color={`${color}`}/>
        </>
      )}
    </div>
  )
}