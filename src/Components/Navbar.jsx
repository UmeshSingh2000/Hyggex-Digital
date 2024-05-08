import React from 'react'
import logo from '../assets/logo.svg'
function Navbar() {
    return (
        <nav className='flex justify-between mt-5 mx-12'>
            <img src={logo} alt="" />
            <ul className='flex gap-8 items-center text-gray-600' id='ul'>
                <a href=''><li>Home</li></a>
                <a href=''><li>Flashcard</li></a>
                <a href=''><li>Contact</li></a>
                <a href=''><li>FAQ</li></a>
                <li><button className='bg-gradient-to-r from-blue-800 to-blue-500 text-white px-4 py-2 rounded-full w-28'>Login</button></li>
            </ul>
        </nav>
    )
}



export default Navbar
