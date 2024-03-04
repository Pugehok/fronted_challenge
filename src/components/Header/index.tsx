import react, { useState } from 'react'
import { LogoIcon } from '../../Icons/Logo'
import { NavItem } from '../nav-item'
import { ArrowDown } from '../../Icons/ArrowDown'
import { NavMenu } from '../nav-menu'
import { COMPANY, FEATURES } from '../constants/constants'

export const Header = ()=>{
   
    return(
        <header className='flex'>
            <LogoIcon/>
            <nav className='flex space-x-6 ml-8 items-center'>
                <NavItem text='Feature' isDropdown={true}>
                   <NavMenu MenuList={FEATURES} />
                </NavItem>
                <NavItem text='Company' isDropdown={true}>
                    <NavMenu MenuList={COMPANY} />
                </NavItem>
                <NavItem text='Careers' />
                <NavItem text='About' />
            </nav>
        </header>
    )
}