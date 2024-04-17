import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { BsStar } from "react-icons/bs";

interface StarsProps{
  qtd?: string
  size: number
  color: string
}

export default function Stars({ qtd, size, color }: StarsProps){
  const qtdStars = parseInt(qtd || '0', 10);
  return(
    <div className="flex gap-2 mt-8">
      {qtdStars === 10 && (
        <>
          <BsStarFill size={size} color={`${color}`}/>
          <BsStarFill size={size} color={`${color}`}/>
          <BsStarFill size={size} color={`${color}`}/>
          <BsStarFill size={size} color={`${color}`}/>
          <BsStarFill size={size} color={`${color}`}/>
        </>
      )}
      {qtdStars === 9 && (
        <>
          <BsStarFill size={size} color={`${color}`}/>
          <BsStarFill size={size} color={`${color}`}/>
          <BsStarFill size={size} color={`${color}`}/>
          <BsStarFill size={size} color={`${color}`}/>
          <BsStarHalf size={size} color={`${color}`}/>
        </>
      )}
      {qtdStars === 8 && (
        <>
          <BsStarFill size={size} color={`${color}`}/>
          <BsStarFill size={size} color={`${color}`}/>
          <BsStarFill size={size} color={`${color}`}/>
          <BsStarFill size={size} color={`${color}`}/>
          <BsStar size={size} color={`${color}`}/>
        </>
      )}
      {qtdStars === 7 && (
        <>
          <BsStarFill size={size} color={`${color}`}/>
          <BsStarFill size={size} color={`${color}`}/>
          <BsStarFill size={size} color={`${color}`}/>
          <BsStarHalf size={size} color={`${color}`}/>
          <BsStar size={size} color={`${color}`}/>
        </>
      )}
      {qtdStars === 6 && (
        <>
          <BsStarFill size={size} color={`${color}`}/>
          <BsStarFill size={size} color={`${color}`}/>
          <BsStarFill size={size} color={`${color}`}/>
          <BsStar size={size} color={`${color}`}/>
          <BsStar size={size} color={`${color}`}/>
        </>
      )}
      {qtdStars === 5 && (
        <>
          <BsStarFill size={size} color={`${color}`}/>
          <BsStarFill size={size} color={`${color}`}/>
          <BsStarHalf size={size} color={`${color}`}/>
          <BsStar size={size} color={`${color}`}/>
          <BsStar size={size} color={`${color}`}/>
        </>
      )}
      {qtdStars === 4 && (
        <>
          <BsStarFill size={size} color={`${color}`}/>
          <BsStarFill size={size} color={`${color}`}/>
          <BsStar size={size} color={`${color}`}/>
          <BsStar size={size} color={`${color}`}/>
          <BsStar size={size} color={`${color}`}/>
        </>
      )}
      {qtdStars === 3 && (
        <>
          <BsStarFill size={size} color={`${color}`}/>
          <BsStarHalf size={size} color={`${color}`}/>
          <BsStar size={size} color={`${color}`}/>
          <BsStar size={size} color={`${color}`}/>
          <BsStar size={size} color={`${color}`}/>
        </>
      )}
      {qtdStars === 2 && (
        <>
          <BsStarFill size={size} color={`${color}`}/>
          <BsStar size={size} color={`${color}`}/>
          <BsStar size={size} color={`${color}`}/>
          <BsStar size={size} color={`${color}`}/>
          <BsStar size={size} color={`${color}`}/>
        </>
      )}
      {qtdStars === 1 && (
        <>
          <BsStarHalf size={size} color={`${color}`}/>
          <BsStar size={size} color={`${color}`}/>
          <BsStar size={size} color={`${color}`}/>
          <BsStar size={size} color={`${color}`}/>
          <BsStar size={size} color={`${color}`}/>
        </>
      )}
      {qtdStars === 0 && (
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