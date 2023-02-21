import React,{useState} from 'react'
import Logo from '../assets/logo.svg'
import lock from '../assets/lock.svg'
import Hamburger from '../assets/hamburgerMenu.svg'
import Close from '../assets/close.svg'

const Navbar = () => {
    const [toggle,setToggle] = useState(false)

    const handleToggle = () =>{
        setToggle(!toggle)
    }

  return (
    <div className='w-full h-[96px] bg-white border-b'>
        <div className='md:max-w-[1080px] max-w-[400px] m-auto w-full h-full flex justify-between items-center'>
            <img src={Logo} alt="logo" className='h-[25px] cursor-pointer'/>
            <div className="flex items-center">
                <ul className='hidden md:flex gap-4'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Support</li>
                    <li>Platform</li>
                    <li>Pricing</li>
                </ul>
            </div>
            <div className='md:flex hidden'>
                <button className='flex justify-content-between items-center bg-transparent px-6 gap-2'>
                    <img src={lock} alt='lock'/>
                    Login
                </button>
                <button className='px-8 py-3 bg-[#208446]'>Sign up for free</button>
            </div>
            <div className="md:hidden cursor-pointer" onClick={handleToggle}>
                <img src={toggle ? Close : Hamburger} alt="hamburger" />
            </div>
        </div>
        <div>
            <ul className={toggle ? 'absolute z-10 p-4 bg-white w-full px-8 md:hidden': 'hidden'}>
                <li className='p-4 hover:bg-gray-50'>Home</li>
                <li className='p-4 hover:bg-gray-50'>About</li>
                <li className='p-4 hover:bg-gray-50'>Support</li>
                <li className='p-4 hover:bg-gray-50'>Platform</li>
                <li className='p-4 hover:bg-gray-50'>Pricing</li> 
                <div className='flex flex-col my-4 gap-4'>
                    <button className='flex border border-[240136] justify-center items-center bg-transparent px-6 gap-2 py-4'>
                        <img src={lock} alt='lock'/>
                        Login
                    </button>
                    <button className='px-8 py-5 bg-[#208446]'>Sign up for free</button>
                </div>
            </ul>
        </div>
    </div>
  )
}

export default Navbar