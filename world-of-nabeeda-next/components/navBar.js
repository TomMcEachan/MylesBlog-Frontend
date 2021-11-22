import React from 'react'
import Link from 'next/link';

export default function NavBar() {
    return (
       <nav>
           <Link href="/">
                <a>World of Nabeeda</a>
           </Link>

           <ul>
               <li>
                   <Link href="/posts">
                        <a>All Posts</a>
                   </Link>
               </li>
           </ul>
       </nav>
    )
}
