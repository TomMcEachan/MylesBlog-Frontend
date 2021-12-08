import React from 'react'
import Link from 'next/link';

export default function NavBar() {
    return (
        
        <nav className="navBar">
            <div className="container">
                <Link href="/">
                <img className="logo" src="https://res.cloudinary.com/tommceachan/image/upload/v1637766266/WorldOfNabeeda/Logo-Transparent01_tnf7ov.png"/>
                </Link>
                
                <ul>
                    <li>
                        <Link  href="/travel">
                            <a className="menuLink">Travel</a>
                        </Link>
                        <Link href="/">
                            <a className="menuLink">Lifestyle</a>
                        </Link>
                        <Link href="/">
                            <a className="menuLink">Causes</a>
                        </Link>
                        <Link href="/">
                            <a className="menuLink">Careers</a>
                        </Link>
                        <Link href="/">
                            <a className="menuLink">Education</a>
                        </Link>
                        <Link href="/">
                            <a className="menuLink">Ask Nabeeda</a>
                        </Link>
                        <Link href="/posts">
                            <a className="menuLink">All</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
