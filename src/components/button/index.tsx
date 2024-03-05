import { ReactNode } from 'react'

interface IProps{
    children: ReactNode
    hasBorder?: boolean
    isFilled?: boolean
}


const borderStyles = 'border-2 border-black rounded-lg'
const filledStyles = 'text-boneless bg-black rounded-lg font-bold py-4 px-6 hover: bg-transperent hover: text-black border-2 border-black'

export const Button = (props: IProps)=> {
  return (
    <button className={` text-lightgray px-5 py-2 ${props.hasBorder && borderStyles} ${props.isFilled && filledStyles}`}>{props.children}</button>
  )
}
