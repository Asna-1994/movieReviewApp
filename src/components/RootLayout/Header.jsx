import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className='bg-zinc-900  h-16 flex items-center  '>
            <div className='container mx-auto flex flex-row justify-between items-center px-4'>
                <span className='text-2xl  text-red-600'>
                    MovieReviewer
                </span>
                <div>
                    <ul className='flex flex-row gap-4 '>
                        <li className='text-neutral-400 hover:text-neutral-100'>
                            <Link to={'/'}>Home</Link>
                        </li>
                        <li className='text-neutral-400 hover:text-neutral-100'>
                            <Link to={'/movies'}>Movies</Link>
                        </li>
                        <li className='text-neutral-400 hover:text-neutral-100'>
                            <Link to={'/'}>About</Link>
                        </li>
                        <li className='text-neutral-400 hover:text-neutral-100'>
                            <Link to={'/'}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header