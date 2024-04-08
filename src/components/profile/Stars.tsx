import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { BsStar } from "react-icons/bs";

interface StarsProps{
  qtd: number
}

export default function Stars({ qtd }: StarsProps){
  return(
    <div className="flex gap-2 mt-8">
      {qtd === 10 && (
        <>
          <BsStarFill size={38} color="#fb8c00"/>
          <BsStarFill size={38} color="#fb8c00"/>
          <BsStarFill size={38} color="#fb8c00"/>
          <BsStarFill size={38} color="#fb8c00"/>
          <BsStarFill size={38} color="#fb8c00"/>
        </>
      )}
      {qtd === 9 && (
        <>
          <BsStarFill size={38} color="#fb8c00"/>
          <BsStarFill size={38} color="#fb8c00"/>
          <BsStarFill size={38} color="#fb8c00"/>
          <BsStarFill size={38} color="#fb8c00"/>
          <BsStarHalf size={38} color="#fb8c00"/>
        </>
      )}
      {qtd === 8 && (
        <>
          <BsStarFill size={38} color="#fb8c00"/>
          <BsStarFill size={38} color="#fb8c00"/>
          <BsStarFill size={38} color="#fb8c00"/>
          <BsStarFill size={38} color="#fb8c00"/>
          <BsStar size={38} color="#fb8c00"/>
        </>
      )}
      {qtd === 7 && (
        <>
          <BsStarFill size={38} color="#fb8c00"/>
          <BsStarFill size={38} color="#fb8c00"/>
          <BsStarFill size={38} color="#fb8c00"/>
          <BsStarHalf size={38} color="#fb8c00"/>
          <BsStar size={38} color="#fb8c00"/>
        </>
      )}
      {qtd === 6 && (
        <>
          <BsStarFill size={38} color="#fb8c00"/>
          <BsStarFill size={38} color="#fb8c00"/>
          <BsStarFill size={38} color="#fb8c00"/>
          <BsStar size={38} color="#fb8c00"/>
          <BsStar size={38} color="#fb8c00"/>
        </>
      )}
      {qtd === 5 && (
        <>
          <BsStarFill size={38} color="#fb8c00"/>
          <BsStarFill size={38} color="#fb8c00"/>
          <BsStarHalf size={38} color="#fb8c00"/>
          <BsStar size={38} color="#fb8c00"/>
          <BsStar size={38} color="#fb8c00"/>
        </>
      )}
      {qtd === 4 && (
        <>
          <BsStarFill size={38} color="#fb8c00"/>
          <BsStarFill size={38} color="#fb8c00"/>
          <BsStar size={38} color="#fb8c00"/>
          <BsStar size={38} color="#fb8c00"/>
          <BsStar size={38} color="#fb8c00"/>
        </>
      )}
      {qtd === 3 && (
        <>
          <BsStarFill size={38} color="#fb8c00"/>
          <BsStarHalf size={38} color="#fb8c00"/>
          <BsStar size={38} color="#fb8c00"/>
          <BsStar size={38} color="#fb8c00"/>
          <BsStar size={38} color="#fb8c00"/>
        </>
      )}
      {qtd === 2 && (
        <>
          <BsStarFill size={38} color="#fb8c00"/>
          <BsStar size={38} color="#fb8c00"/>
          <BsStar size={38} color="#fb8c00"/>
          <BsStar size={38} color="#fb8c00"/>
          <BsStar size={38} color="#fb8c00"/>
        </>
      )}
      {qtd === 1 && (
        <>
          <BsStarHalf size={38} color="#fb8c00"/>
          <BsStar size={38} color="#fb8c00"/>
          <BsStar size={38} color="#fb8c00"/>
          <BsStar size={38} color="#fb8c00"/>
          <BsStar size={38} color="#fb8c00"/>
        </>
      )}
      {qtd === 0 && (
        <>
          <BsStar size={38} color="#fb8c00"/>
          <BsStar size={38} color="#fb8c00"/>
          <BsStar size={38} color="#fb8c00"/>
          <BsStar size={38} color="#fb8c00"/>
          <BsStar size={38} color="#fb8c00"/>
        </>
      )}
    </div>
  )
}