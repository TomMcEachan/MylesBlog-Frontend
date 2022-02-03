import {BsTwitter, BsInstagram, BsGithub, BsLinkedin} from 'react-icons/bs';


export default function TopBar() {
    //Renders the TopBar
    return (
        <nav className="topBar">
            <div className="container">
                <div className="socialContainer">
                    <ul>
                        <li>
                            <a  href="https://www.instagram.com/touristinyouth/?hl=en" target="_blank" rel="noreferrer">
                                <BsInstagram className="socialLink" />
                            </a>
                            <a href="https://www.linkedin.com/in/myles-elio-mceachan-32238b210/" target="_blank" rel="noreferrer">
                                <BsLinkedin className="socialLink" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
    </nav>
    ) 
}




