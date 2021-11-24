import React from 'react'
import Link from 'next/link';

export default function NavBar() {
    return (
        
        <nav className="navBar">
            <div className="container">
                <Link href="/">
                <a className="title">World of Nabeeda</a>
                </Link>
                
                <ul>
                    <li>
                        <Link href="/">
                            <a>Travel</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a>Lifestyle</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a>Causes</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a>Careers</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a>Education</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/posts">
                            <a>All</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
