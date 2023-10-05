import React , {useState} from 'react'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { Dropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'
import Drop from './Drop';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'



function Navbar() {

    const [openLinks, setOpenLinks] = useState(false)

    const toggleNavbar = () => {
        setOpenLinks(!openLinks)
    }

  return (
    <div className='navbar'>
        <div className='leftSide'>
            <img src={Logo} />
            <label className='frepe'>Frepe</label>
        </div>
        <div className='rightSide'>
            <Link id='link' to='/'>Home</Link>
            <Link id='link' to='/signup'>Sign Up</Link>
            <Link id='link' to='/about'>About Us</Link>
            <Link id='link' to='/profile' className='user'>👩‍🦰</Link>
            <Drop></Drop>
        </div>

    </div>
  )
}

export default Navbar
