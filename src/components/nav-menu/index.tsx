
import React, { ReactElement, ReactNode } from 'react'
import { MenuItem } from '../menu-item'
// export const FEATURES = [
//     { text: 'Todo List', icon: <Todo /> },
//     { text: 'Calendar', icon: <Calendar /> },
//     { text: 'Reminders', icon: <Reminders /> },
//     { text: 'Planning', icon: <Planning /> },
//   ];

interface Menu {
    text: string
    icon?: ()=> ReactElement
}

interface IProps{
    MenuList: [Menu]
}


export const NavMenu = (props:IProps) => {
  return (
    <div className='flex flex-col px-4 py-2 bg-boneless drop-shadow rounded-lg absolute top-10 right-0 w-36 space-y-2 z-30'>
        {props.MenuList.map((element)=> <MenuItem text={element.text} icon={element.icon}/> )}
    </div>
  )
}
