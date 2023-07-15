import React from 'react'
import logo from '../assets/LOGO.svg'
import srchIcon from '../assets/Search-Icon.svg'
import { PiCaretDownBold } from 'react-icons/pi'
const Header = () => {
    return (
        <nav>
            <ul className='nav-left'>
                <li><img src={logo} width={158} height={45} alt="logo" srcset="" /></li>
                <li> Courses  <PiCaretDownBold /></li>
                <li>Programs <PiCaretDownBold /></li>
            </ul>
            <ul className='nav-right'>
                <li><img src={srchIcon} alt="logo" srcset="" /></li>
                <li>Log in</li>
                <button>JOIN NOW</button>
            </ul>
        </nav>
    )
}

export default Header