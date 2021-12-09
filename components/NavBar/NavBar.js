import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

export default function NavBar() {
    return (
        <nav className="navBar">
            <div className="container">
                <Link href="/" passHref>
                <Image  alt="world of nabeeda logo" className="logo" width={250} height={150} src="https://res.cloudinary.com/tommceachan/image/upload/v1637775945/WorldOfNabeeda/Logo-Transparent-01_raa5wa.png"/>
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
