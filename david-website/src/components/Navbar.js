import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import {Button} from './Button';
import './Navbar.css';

function Navbar(){
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        }else{
            setButton(true)
        }
    };

    window.addEventListener('resize', showButton)

    return(
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        DAVIDNGUYEN
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    <div className='nav-menu-container'>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className='nav-item'>
                                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                    Home
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/experience' className='nav-links' onClick={closeMobileMenu}>
                                    Experience/Projects
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                                    Contact Me
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {button && <Button buttonStyle='btn--outline'>Experience</Button>}
                </div>
            </nav>

        </>
    )
}

export default Navbar