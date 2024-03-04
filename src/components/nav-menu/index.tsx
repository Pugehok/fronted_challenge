
import React, { ReactElement, ReactNode } from 'react'
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
    <div>
        {props.MenuList.map((element)=>
        <>
          {element.icon? <>
           <element.icon/> 
            <span className='text-lightgray hover:text-black'>{element.text}</span>
           </>:
           <>
             <span className='text-lightgray hover:text-black'>{element.text}</span>
           </>
            }
            
        </>
         
        )}
    </div>
  )
}
