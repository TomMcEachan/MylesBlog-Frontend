import React from 'react'
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';

import {BsTwitter, BsFacebook, BsInstagram, BsYoutube} from 'react-icons/bs';

export default function Footer() {
    return (
        <>
            <footer className="footer">
               <div>
                    <ul>
                        <li>
                            <a className="socialLinkContainer" href="https://twitter.com/worldofnabeeda" target="_blank" rel="noreferrer" >
                                <BsTwitter className="socialLink" />
                            </a>
                            <a className="socialLinkContainer" href="https://www.facebook.com/worldofnabeeda" target="_blank" rel="noreferrer" >
                                <BsFacebook className="socialLink" />
                            </a>
                            <a  className="socialLinkContainer" href="https://www.instagram.com/worldofnabeeda/?hl=en" target="_blank" rel="noreferrer">
                                <BsInstagram className="socialLink" />
                            </a>
                            <a  className="socialLinkContainer" href="https://www.youtube.com/channel/UCWPYFsoJUNmbcqazVpQMW3w" target="_blank" rel="noreferrer">
                                <BsYoutube className="socialLink" />
                             </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <a href="https://www.tommceachan.co.uk" target="_blank" rel="noreferrer">
                        <p>Designed by Tom McEachan in Glasgow, Scotland</p>
                    </a>
                </div>
                <div className="copyright">
                    <p>© 2022 NABEEDA BAKALI</p>
                </div>
            </footer>
        </>
    )
}
