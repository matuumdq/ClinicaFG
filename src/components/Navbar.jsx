import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { GrMail } from 'react-icons/gr'
import { FaHandHoldingMedical, FaSyringe } from 'react-icons/fa'
import logo from '../assets/logo.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [nav, setNav] = useState(false)
  return (
    <div className='bg-gray-50 h-16 mx-auto flex justify-between items-center p-4'>
        {/* Left */}
        <Link to='/' className='flex items-center gap-6'> 
            <img src={logo} alt="logo-cicec" className='h-14 w-14' />
            <h1 className='text-2xl  ml-2 font-bold text-purple-900'>
                Cicec
            </h1>
        </Link>
            <div className='hidden md:flex items-center cursor-pointer font-medium gap-4 p-1'>
                <Link to='/conocenos' className='border-b-2 border-transparent hover:border-purple-600 hover:text-purple-600 ease-in duration-300'>Conocenos</Link>
                <Link to='/tratamientos' className='border-b-2 border-transparent hover:border-purple-600 hover:text-purple-600 ease-in duration-300'>Tratamientos</Link>
                <Link to='/conocenos' className='border-b-2 border-transparent hover:border-purple-600 hover:text-purple-600 ease-in duration-300'>Contactanos</Link>
            </div>
            <div className='cursor-pointer md:hidden' onClick={() => setNav(!nav)}>
                <AiOutlineMenu size={30} className='text-purple-900 hover:scale-110 ease-in duration-300'/>
            </div>
      

        
        {/* Mobile Menu */}
        {/* Overlay */}
        {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}

            {/* Side menu */}
            <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-120%] w-[300px] h-screen bg-white z-10 duration-300'}>
                <AiOutlineClose size={30} className='absolute right-4 top-4 cursor-pointer text-purple-900 hover:scale-110 ease-in duration-300' onClick={() => setNav(!nav)}/>
            <Link to='/'>
                <img src={logo} alt="logo-cicec" className='h-14 w-14 md:h-24 md:w-24 mx-auto mt-4' />
            </Link>
                <h2 className='text-2xl font-bold text-purple-900 p-4'>Cicec</h2>
                <nav>
                    <ul className='flex flex-col p-4 text-gray-800'>
                        <Link to={'/conocenos'} className='text-xl py-4 flex'><FaHandHoldingMedical size={25} className='mr-4'/>Conocenos</Link>
                        <Link to='/tratamientos' className='text-xl py-4 flex'><FaSyringe size={25} className='mr-4'/> Tratamientos</Link>
                        <Link to='/tratamientos' className='text-xl py-4 flex'><GrMail size={25} className='mr-4'/> Contactanos</Link>
                    </ul>
                </nav>
            </div>
    </div>
  )
}

export default Navbar