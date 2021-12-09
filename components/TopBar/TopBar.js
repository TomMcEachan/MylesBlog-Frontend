import Link from 'next/link';
import {BsTwitter, BsFacebook, BsInstagram, BsYoutube} from 'react-icons/bs';


export default function TopBar({featuredPosts}) {

    //Renders the TopBar
    return (
        <nav className="topBar">
            <div className="container">
                <div className="latestContainer">
                    <p className="latestBox">Latest Post</p>
                    <p className="latestBoxPost">title of very important post</p>
                </div>
                <div className="socialContainer">
                    <ul>
                        <li>
                            <Link  href="https://twitter.com/worldofnabeeda" target="_blank" passHref>
                                <BsTwitter className="socialLink" />
                            </Link>
                            <Link href="https://www.facebook.com/worldofnabeeda" passHref>
                                <BsFacebook className="socialLink" />
                            </Link>
                            <Link  href="https://www.instagram.com/worldofnabeeda/?hl=en" passHref>
                            <BsInstagram className="socialLink" />
                            </Link>
                            <Link href="https://www.youtube.com/channel/UCWPYFsoJUNmbcqazVpQMW3w" passHref>
                                <BsYoutube className="socialLink" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
    </nav>
    ) 
}


