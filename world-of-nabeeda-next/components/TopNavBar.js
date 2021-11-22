import React from 'react'
import Link from 'next/link';

export default function TopNavBar({posts}) {
    return (
       <nav className="topNav">
           <div className="container">
            <div> 
                <div className="latestBox"><p>Latest Post:</p></div>
            </div>
           <ul>
               <li>
                   <Link href="">
                        <a className="socialLink">Twitter</a>
                   </Link>
                   <Link href="">
                        <a className="socialLink">Facebook</a>
                   </Link>
                   <Link href="">
                        <a className="socialLink">YouTube</a>
                   </Link>
                   <Link href="">
                        <a className="socialLink">Instagram</a>
                   </Link>               
                </li>
           </ul>
           </div>
       </nav>
    )
}