import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MenuIcon }  from 'lucide-react'

const Nav = () => {
    const [open,setOpen] = useState(false)
  return (
    <div>
        <div className='hidden md:flex justify-between items-center bg-gray-700 text-white px-20 py-2'>
            <h1>RealState</h1>
            <div className='flex space-x-2 font-bold'>
                <Link to={'/'}> Home</Link>
                <Link to={'/'}> About</Link>
                <Link to={'/'}> Contact</Link>
            </div>
            <div className='bg-blue-600 px-2 py-1 text-white'>
                Login
            </div>
        </div>


        {/* //mobile */}
        <div className='md:hidden flex justify-between items-center bg-gray-700 text-white px-8 py-2'>
            <h1>RealState</h1>
            <button onClick={()=>setOpen(!open)}><MenuIcon/></button>
        </div>
        {
            open &&
            <div className='md:hidden flex flex-col space-y-4 bg-gray-300 py-1'>
                <div className='flex flex-col space-y-2 px-2 py-2'>
                <Link to={'/'}> Home</Link>
                <Link to={'/'}> About</Link>
                <Link to={'/'}> Contact</Link>
            </div>
            <div className='bg-blue-600 px-2 py-1 text-white'>
                Login
            </div>
            </div>
        }
    </div>
  )
}

export default Nav