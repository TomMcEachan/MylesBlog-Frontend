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
                                src="https://res.cloudinary.com/tommceachan/image/upload/v1643881203/m_2_Photo_Room_9ed5a2a190.png"/>
                    </div>
                </Link>
                <ul>
                    <li>
                        <Link href="/culture" passHref>
                            <a className="menuLink">Culture</a>
                        </Link>
                        <Link href="/lifestyle" passHref>
                            <a className="menuLink">Lifestyle</a>
                        </Link>
                        <Link href="/current-affairs" passHref>
                            <a className="menuLink">Current Affairs</a>
                        </Link>
                        <Link href="/arts-and-literature" passHref>
                            <a className="menuLink">Arts &amp; Literature</a>
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
