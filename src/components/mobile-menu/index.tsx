import { NavItem } from '../nav-item'
import { COMPANY, FEATURES } from '../../constants/constants'
import { MenuItem } from '../menu-item'
import { Button } from '../button'
interface IProps{
    isOpen?:boolean
}


export const MobileMenu =(props: IProps) =>{
  return (
    <>
        <div className={`absolute top-0 left-0 right-0 bg-black opacity-50 z-10 min-h-[150vh] ${props.isOpen ? 'flex' : 'hidden'}`} />
        <div className={`absolute right-0 top-0 w-1/2 bg-white z-20 justify-center min-h-[150vh] ${props.isOpen ? 'flex' : 'hidden'}`}>
            <nav className='my-20 mx-10 space-y-5 w-full text-lg'>
                <NavItem text='Features' isDropdown={true}>
                    <div className="flex flex-col space-y-5 p-2 mt-4">
                        {FEATURES.map((element, index)=> <MenuItem text={element.text} icon={element.icon} key={index}/>) }
                    </div>
                </NavItem>
                <NavItem text='Company' isDropdown={true}>
                <div className="flex flex-col space-y-5 p-2 mt-4">
                    {COMPANY.map((element, index)=> <MenuItem text={element.text} key={index} />) }
                </div>
                </NavItem>
                <NavItem text='Careers' isDropdown={false}></NavItem>
                <NavItem text='About' isDropdown={false}></NavItem>
                <div className='flex flex-col space-y-5'>
                    <Button hasBorder={true}>Login</Button>
                    <Button isFilled={true}>Register</Button>
                </div>
            </nav>
        </div>
    </>
  )
}
