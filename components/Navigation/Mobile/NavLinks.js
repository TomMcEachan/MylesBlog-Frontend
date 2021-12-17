import React from 'react'
import Link from 'next/link';
import {BsTwitter, BsFacebook, BsInstagram, BsYoutube} from 'react-icons/bs';

export default function NavLinks(props) {
    return (
        <div className="bm-menu">
            <ul className="bm-item-list">
                <li>
                    <Link  href="/" >
                        <a className="mobileLink">Home</a>
                    </Link>
                    <Link  href="/travel">
                        <a className="mobileLink">Travel</a>
                    </Link>
                    <Link href="/lifestyle" >
                    <a className="mobileLink">Lifestyle</a>
                    </Link>
                    <Link href="/causes" >
                        <a className="mobileLink">Causes</a>
                    </Link>
                    <Link href="/careers" >
                        <a className="mobileLink">Careers</a>
                    </Link>
                    <Link href="/education" >
                        <a className="mobileLink">Education</a>
                    </Link>
                    <Link href="/all" >
                        <a className="mobileLink">All</a>
                    </Link>         
                </li>
            </ul> 
            <div className="socialContainer">
                <ul>
                    <li>
                        <a href="https://twitter.com/worldofnabeeda" target="_blank" rel="noreferrer" >
                            <BsTwitter className="socialLink" />
                        </a>
                        <a href="https://www.facebook.com/worldofnabeeda" target="_blank" rel="noreferrer" >
                            <BsFacebook className="socialLink" />
                        </a>
                        <a  href="https://www.instagram.com/worldofnabeeda/?hl=en" target="_blank" rel="noreferrer">
                                <BsInstagram className="socialLink" />
                        </a>
                        <a href="https://www.youtube.com/channel/UCWPYFsoJUNmbcqazVpQMW3w" target="_blank" rel="noreferrer">
                            <BsYoutube className="socialLink" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
