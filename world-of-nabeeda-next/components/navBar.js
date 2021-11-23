import React from 'react'
import Link from 'next/link';

export default function NavBar() {
    return (
       <nav className="navBar">
           <div className="container">
           <Link href="/">
                <a className="title">World of Nabeeda</a>
           </Link>

           <ul>
               <li>
                   <Link href="/blog/causes">
                        <a>Causes</a>
                   </Link>
               </li>
               <li>
                   <Link href="/blog/lifestyle">
                        <a>Lifestyle</a>
                   </Link>
               </li>
               <li>
                   <Link href="/blog/career">
                        <a>Career</a>
                   </Link>
               </li>
               <li>
                   <Link href="/blog/education">
                        <a>Education</a>
                   </Link>
               </li>
               <li>
                   <Link href="/blog/all">
                        <a>Education</a>
                   </Link>
               </li>
           </ul>
           </div>
       </nav>
    )
}
