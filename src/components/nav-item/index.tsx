import { ArrowDown, ArrowUp } from "../../Icons"
import { Children, ReactNode, useEffect, useState } from "react"

interface IProps{
    text: string
    children? : ReactNode
    isDropdown?: boolean
}
export const NavItem = (props:IProps) =>{
    const [selected, setSelected] = useState(false)
    const toggleDroppable = () => {
        if (!props.isDropdown) return
        setSelected(!selected) 
    }


    return(
        <div className="relative ml-4">
            <div onClick={toggleDroppable} className="flex space-2 cursor-pointer items-center space-x-2">
                <span className="text-lightgray hover:text-black">{props.text}</span>
                {!selected && props.isDropdown?  <ArrowDown/>:<></>}
                {selected? <ArrowUp/> :<></>}
            </div>
            {selected? props.children : <></>}
        </div>
    )
}