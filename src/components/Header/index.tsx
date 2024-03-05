import react, { useState } from 'react'
import { LogoIcon } from '../../Icons/Logo'
import { NavItem } from '../nav-item'
import { ArrowDown } from '../../Icons/ArrowDown'
import { NavMenu } from '../nav-menu'
import { COMPANY, FEATURES } from '../../constants/constants'
import { Button } from '../button'

export const Header = ()=>{
   
    return(
        <header className='flex items-center'>
            <LogoIcon/>
            <nav className='hidden xl:flex space-x-6 ml-8 '>
                <NavItem text='Feature' isDropdown={true}>
                   <NavMenu MenuList={FEATURES} />
                </NavItem>
                <NavItem text='Company' isDropdown={true}>
                    <NavMenu MenuList={COMPANY} />
                </NavItem>
                <NavItem text='Careers'  isDropdown={false}>
                </NavItem>
                <NavItem text='About'> </NavItem>
            </nav>
            <div className='hidden ml-auto xl:flex space-x-5'>
                <Button>Login</Button>
                <Button hasBorder={true}>Register</Button>
            </div>
        </header>
    )
}