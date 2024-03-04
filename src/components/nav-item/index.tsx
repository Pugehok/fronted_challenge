import { ArrowDown, ArrowUp } from "../../Icons"
import { Children, ReactNode, useState } from "react"

interface IProps{
    text: string
    children? : ReactNode
    isDropdown?: boolean
}
export const NavItem = (props:IProps) =>{
    const [selected, setSelected] = useState(false)
 
    return(
        <div className="relative">
            <div onClick={()=>setSelected(!selected)} className="flex space-2 cursor-pointer items-center space-x-2">
                <span className="text-lightgray hover:text-black">{props.text}</span>
                {props.isDropdown && !selected? <ArrowDown/>:<><ArrowUp/></>}
            </div>
            {selected? props.children : <></>}
        </div>
    )
}