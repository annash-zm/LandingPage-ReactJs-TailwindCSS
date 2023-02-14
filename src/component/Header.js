import React from 'react'

import { navData } from '../global/Data'
import Navbar from './Navbar'
//import NavbarMobile from './NavbarMobile'

import {FaBars} from 'react-icons/fa'

function Header() {
    return (
        <header className="mb-12 lg:mb-0 relative z-20 px-4 lg:px-20"
            data-aos='fade-down'
            data-aos-delay='1200'
            data-aos-duration='1000'
        >
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-x-[120px]">
                        <a href=''>
                            <img alt="" className="w-30" src={navData.image} />
                        </a>
                        <div className="hidden xl:flex">
                            <Navbar />
                        </div>
                    </div>

                    <div className='hidden xl:flex space-x-3'>
                        <button>Sign In</button>
                        <button className='border border-red-500 rounded-full px-8 py-2'>Sign Up</button>
                    </div>

                    <div className="xl:hidden">
                        <FaBars />
                    </div>
                </div>

            </div>
        </header>
    )
}

export default Header
