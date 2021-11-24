import React, {useState, useEffect} from 'react'
import Link from 'next/link';
import {BsTwitter, BsFacebook, BsInstagram, BsYoutube} from 'react-icons/bs';
import TopBarLatest from './TopBarLatest';

export default function TopBar({posts}) {

    const [latestPosts, setLatestPosts] = useState([]);

    useEffect(() => {
        setLatestPosts(posts.slice(0,5));
    }, [posts]);

    function renderLatestPosts() {
        return latestPosts.map((post) => {
            return <TopBarLatest post={post} key={post.id} />;
        });
    }


    //Renders the TopBar
    return (
        <nav className="topBar">
            <div className="container">
                <div className="latestContainer">
                    <p className="latestBox">Latest Posts</p>
                    {renderLatestPosts()}
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
