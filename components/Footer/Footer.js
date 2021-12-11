import React from 'react'
import {BsTwitter, BsFacebook, BsInstagram, BsYoutube} from 'react-icons/bs';

export default function Footer() {
    return (
        <div>
              <div className="footerSocialContainer">
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
