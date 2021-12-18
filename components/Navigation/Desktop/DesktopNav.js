/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link';

export default function DesktopNav() {

    
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
                <ul>
                    <li>
                        <Link href="/travel" passHref>
                            <a className="menuLink">Travel</a>
                        </Link>
                        <Link href="/lifestyle" passHref>
                            <a className="menuLink">Lifestyle</a>
                        </Link>
                        <Link href="/careers" passHref>
                            <a className="menuLink">Careers</a>
                        </Link>
                        <Link href="/all" passHref>
                            <a className="menuLink">All</a>
                        </Link>
                    </li>
                </ul>
                </div>
        </nav>  
    )
}
