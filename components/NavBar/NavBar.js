/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link';
import NavLinks from './NavLinks';

export default function NavBar() {
    
    return (
        <nav className="navBar">
            <div className="navContainer">
                <Link  href="/" passHref>
                    <div className="imageContainer">
                        <img  alt="world of nabeeda logo" 
                                className="navLogo" 
                                src="https://res.cloudinary.com/tommceachan/image/upload/v1639073186/Logo_Transparent_01_25b1dcad52.png"/>
                    </div>
                </Link>
                <NavLinks />
                </div>
        </nav>  
    )
}
