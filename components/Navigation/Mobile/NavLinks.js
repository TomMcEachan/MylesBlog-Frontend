import React from 'react'
import Link from 'next/link';

export default function NavLinks(props) {
    return (
        <div className="hamburgerMenu">
            <ul>
                <li>
                    <Link  href="/" onClick={() => props.isMobile && props.closeMobileMenu()}>
                        <a className="mobileLink">Home</a>
                    </Link>
                    <Link  href="/travel" onClick={() => props.isMobile && props.closeMobileMenu()}>
                        <a className="mobileLink">Travel</a>
                    </Link>
                    <Link href="/lifestyle" onClick={() => props.isMobile && props.closeMobileMenu()}>
                    <a className="mobileLink">Lifestyle</a>
                    </Link>
                    <Link href="/causes" onClick={() => props.isMobile && props.closeMobileMenu()}>
                        <a className="mobileLink">Causes</a>
                    </Link>
                    <Link href="/careers" onClick={() => props.isMobile && props.closeMobileMenu()}>
                        <a className="mobileLink">Careers</a>
                    </Link>
                    <Link href="/education" onClick={() => props.isMobile && props.closeMobileMenu()}>
                        <a className="mobileLink">Education</a>
                    </Link>
                    <Link href="/all" onClick={() => props.isMobile && props.closeMobileMenu()}>
                        <a className="mobileLink">All</a>
                    </Link>         
                </li>
            </ul> 
        </div>
    )
}
