import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Hamburger from './Hamburger';
import {useState} from 'react';

export default function NavBar() {


    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen);
    }




    return (
        <nav className="navBar">
            <div className="container">
                <Link href="/" passHref>
                <Image  alt="world of nabeeda logo" className="logo" width={250} height={150} src="https://res.cloudinary.com/tommceachan/image/upload/v1639073186/Logo_Transparent_01_25b1dcad52.png"/>
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

                <div className="hamburger" onClick={toggleHamburger}>
                    <Hamburger isOpen={hamburgerOpen}/>
                </div>
            </div>
        </nav>  
    )
}
