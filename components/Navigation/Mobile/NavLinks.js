import React from 'react'
import Link from 'next/link';
import {BsInstagram, BsLinkedin} from 'react-icons/bs';


export default function NavLinks() {
    return (
        <div className="bm-menu">
            <ul className="bm-item-list">
                <li>
                    <Link href="/" passHref>
                        <a className="mobileLink">Home</a>
                    </Link>
                    <Link href="/culture" passHref>
                        <a className="mobileLink">Culture</a>
                    </Link>
                    <Link href="/lifestyle" passHref>
                            <a className="mobileLink">Lifestyle</a>
                    </Link>
                    <Link href="/current-affairs" passHref>
                            <a className="mobileLink">Current Affairs</a>
                    </Link>
                    <Link href="/arts-and-literature" passHref>
                            <a className="mobileLink">Arts &amp; Literature</a>
                    </Link>
                    <Link href="/all" passHref>
                            <a className="mobileLink">All</a>
                    </Link>    
                </li>
            </ul> 
            <div className="mobileSocialContainer">
                <ul>
                    <li>
                    <a  href="https://www.instagram.com/touristinyouth/?hl=en" target="_blank" rel="noreferrer">
                                <BsInstagram className="mobileSocialLink" />
                            </a>
                            <a href="https://www.linkedin.com/in/myles-elio-mceachan-32238b210/" target="_blank" rel="noreferrer">
                                <BsLinkedin className="mobileSocialLink" />
                            </a>
                    </li>
                </ul>
            </div>     
        </div>
    )
}
