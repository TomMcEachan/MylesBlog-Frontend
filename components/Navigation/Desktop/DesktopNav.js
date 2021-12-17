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
                        <Link  href="/travel">
                            <a className="menuLink">Travel</a>
                        </Link>
                        <Link href="/lifestyle">
                            <a className="menuLink">Lifestyle</a>
                        </Link>
                        <Link href="/causes">
                            <a className="menuLink">Causes</a>
                        </Link>
                        <Link href="/careers">
                            <a className="menuLink">Careers</a>
                        </Link>
                        <Link href="/education">
                            <a className="menuLink">Education</a>
                        </Link>
                        <Link href="/all">
                            <a className="menuLink">All</a>
                        </Link>
                    </li>
                </ul>
                </div>
        </nav>  
    )
}
