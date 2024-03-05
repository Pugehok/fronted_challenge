import React from "react"
import { ReactNode } from "react"

interface IProps{
    text: string
    icon?: () => ReactNode
}


export const MenuItem = (props:IProps) => {
    return(
        <div className="flex w-full space-x-4 ">
        {props.icon? 
        <>
            <props.icon/>
            <span className=" text-lightgray hover:text-black cursor-pointer">{props.text}</span>
        </>

        :

        <>
            <span className="text-medium-gray hover:text-black cursor-pointer">{props.text}</span>
        </>
        }
        </div>
    )
}