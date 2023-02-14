import React from 'react'
import { navData } from '../global/Data'

function Navbar() {
    return (
        <nav>
            <ul className="flex space-x-8">
                {navData.navMenu.map((item, idx) => {
                    return (
                        <a href="#"><li key={idx}>{item}</li></a>
                    )
                })}
            </ul>
        </nav>

    )
}

export default Navbar
