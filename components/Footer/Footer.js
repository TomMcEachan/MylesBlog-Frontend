import React from 'react'
import {BsTwitter, BsFacebook, BsInstagram, BsYoutube} from 'react-icons/bs';
import {Grid, Item} from "@mui/material/Grid"


export default function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footerSocialContainer">
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
                    <div className="designer">
                        <a href="https://www.linkedin.com/in/tommceachan/?originalSubdomain=uk" target="_blank" rel="noreferrer">
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
