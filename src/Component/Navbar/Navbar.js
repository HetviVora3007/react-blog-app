import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';

import './Navbar.css'

const Navbar = () => {

    const [movileUiLink, setMobileUiLink] = useState(false)

    return (
        <>
            <div className='navbar-maincontainer'>
                <div className='navbar-subcontainer'>
                    <div className='navbar-title'>Inner Pieces</div>
                    <div className={movileUiLink ? 'mobile-nav-link' : 'navbar-links-container'} onClick={() => setMobileUiLink(movileUiLink)}>
                        <Link className='navbar-links' to='/'>Home</Link>
                        <Link className='navbar-links' to='/blog'>Blog</Link>
                        <Link className='navbar-links' to='/about'>About</Link>
                        <Link className='navbar-links' to='/contact'>Contact</Link>
                    </div>
                    <button className='menu-icon' onClick={() => setMobileUiLink(!movileUiLink)} >
                        {movileUiLink ? <ClearIcon /> : <MenuIcon />}
                    </button>
                </div>
            </div>
        </>
    )
}

export default Navbar