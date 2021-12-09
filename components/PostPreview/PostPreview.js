import React from 'react';
import Link from 'next/link';


export default function PostPreview({post}) {

        return (
            <>
                <div className="postPreview">
                    <h3>{post.title}</h3>
                    <p>{post.description}</p>
                    <p className="category">{post.category}</p>
                    <Link href={`/posts/${post.id}`} passHref>  
                    <button>Read This Blog</button>
                    </Link>
                </div>
            </>
        )
}

