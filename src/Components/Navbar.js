import React from 'react';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import * as FaIcons from 'react-icons/fa'
import './Navbar.css';
// import Button from './Button'
import * as FiIcons from 'react-icons/fi'

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => {
        setClick(!click)
    }

    const closeMobileMenu = () => {
        setClick(false);
    }

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true)
        }
    };

    useEffect(() => {
        showButton();
    }, [] );

    window.addEventListener('resize', showButton);

    return( 
        <nav className="navbar">
            <div className="navbar-container">
                <Link to='/login' className='navbar-logo' onClick={closeMobileMenu}>
                    Login Captivate <FiIcons.FiLogIn />
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    {click ? <FaIcons.FaTimes className="fa-times"/> : <FaIcons.FaBars className="fa-bars" />}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu '}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/animations' className='nav-links' onClick={closeMobileMenu}>
                            Animations <FaIcons.FaCss3Alt />
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/comments' className='nav-links' onClick={closeMobileMenu}>
                            Request
                        </Link>
                    </li>
                </ul>
                {/* {button && <Button buttonStyle='btn-outline'>Business Inquiries</Button>} */}
            </div>
        </nav>
    )
}
export default Navbar;