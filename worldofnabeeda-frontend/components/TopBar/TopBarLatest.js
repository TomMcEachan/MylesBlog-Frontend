import React, {useState, useEffect} from 'react';
import Link from 'next/link';

export default function TopBarLatest({post}) {
    
    return (
        <Link>
        <p>{post.title}</p>
        </Link>
    )
}
