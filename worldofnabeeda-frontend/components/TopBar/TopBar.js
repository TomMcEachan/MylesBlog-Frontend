import React, {useState, useEffect} from 'react'
import Link from 'next/link';
import {BsTwitter, BsFacebook, BsInstagram, BsYoutube} from 'react-icons/bs';


export default function TopBar() {

    //Renders the TopBar
    return (
        <nav className="topBar">
            <div className="container">
                <div className="latestContainer">
                    <p className="latestBox">Latest Posts</p>
                    <p className="latestBoxPost">some text</p>
                </div>
                <div className="socialContainer">
                    <ul>
                        <li>
                            <Link  href="/">
                            <BsTwitter className="socialLink" />
                            </Link>
                            <Link href="/">
                                <BsFacebook className="socialLink" />
                            </Link>
                            <Link  href="/">
                            <BsInstagram className="socialLink" />
                            </Link>
                            <Link href="/">
                                <BsYoutube className="socialLink" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
    </nav>
    )
}
