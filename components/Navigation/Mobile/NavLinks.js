import React from 'react'
import Link from 'next/link';
import {BsTwitter, BsFacebook, BsInstagram, BsYoutube} from 'react-icons/bs';


export default function NavLinks(props) {
    return (
        <div className="bm-menu">
            <ul className="bm-item-list">
                <li>
                    <Link  href="/" passHref >
                        <a className="mobileLink">Home</a>
                    </Link>
                    <Link  href="/travel" passHref>
                        <a className="mobileLink">Travel</a>
                    </Link>
                    <Link href="/lifestyle" passHref>
                        <a className="mobileLink">Lifestyle</a>
                    </Link>
                    <Link href="/careers" passHref>
                        <a className="mobileLink">Careers</a>
                    </Link>
                    <Link href="/all" passHref>
                        <a className="mobileLink">All</a>
                    </Link>         
                </li>
            </ul> 
            <div className="mobileSocialContainer">
                <ul>
                    <li>
                        <a href="https://twitter.com/worldofnabeeda" target="_blank" rel="noreferrer" >
                            <BsTwitter className="mobileSocialLink" />
                        </a>
                        <a href="https://www.facebook.com/worldofnabeeda" target="_blank" rel="noreferrer" >
                            <BsFacebook className="mobileSocialLink" />
                        </a>
                        <a  href="https://www.instagram.com/worldofnabeeda/?hl=en" target="_blank" rel="noreferrer">
                            <BsInstagram className="mobileSocialLink" />
                        </a>
                        <a href="https://www.youtube.com/channel/UCWPYFsoJUNmbcqazVpQMW3w" target="_blank" rel="noreferrer">
                            <BsYoutube className="mobileSocialLink" />
                        </a>
                    </li>
                </ul>
            </div>     
        </div>
    )
}
