import React from 'react'
import Link from 'next/link';

export default function NavLinks() {
    return (
        <div className="hamburgerMenu">
            <ul>
                <li>
                    <Link  href="/travel">
                        <a className="mobileLink">Travel</a>
                    </Link>
                    <Link href="/lifestyle">
                    <a className="mobileLink">Lifestyle</a>
                    </Link>
                    <Link href="/causes">
                        <a className="mobileLink">Causes</a>
                    </Link>
                    <Link href="/careers">
                        <a className="mobileLink">Careers</a>
                    </Link>
                    <Link href="/education">
                        <a className="mobileLink">Education</a>
                    </Link>
                    <Link href="/all">
                        <a className="mobileLink">All</a>
                    </Link>         
                </li>
            </ul> 
        </div>
    )
}
