import React from 'react'
import {BsLinkedin, BsInstagram} from 'react-icons/bs';

export default function Footer() {
    return (
        <>
            <footer className="footer">
               <div>
                    <ul>
                        <li>
                            <a className="socialLinkContainer" href="https://www.linkedin.com/in/myles-elio-mceachan-32238b210/" target="_blank" rel="noreferrer" >
                                <BsLinkedin className="socialLink" />
                            </a>
                            <a  className="socialLinkContainer" href="https://www.instagram.com/touristinyouth/?hl=en" target="_blank" rel="noreferrer">
                                <BsInstagram className="socialLink" />
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
                    <p>© 2022 MYLES MCEACHAN</p>
                </div>
                <div className="footerLinks">
                    <ul>
                        <li>
                            <a href="https://www.mylesmceachan.co.uk/sitemap-0.xml" target="_blank" rel="noreferrer">
                                <p>Sitemap</p>
                            </a> 
                        </li>
                        <li>
                            <a href="/cookies" target="_blank" rel="noreferrer">
                                <p>Cookies Statement</p>
                            </a> 
                        </li>
                        <li>
                            <a href="/accessibility" target="_blank" rel="noreferrer">
                                <p>Accessibility Statement</p>
                            </a> 
                        </li>
                    </ul>     
                </div>
            </footer>
        </>
    )
}
