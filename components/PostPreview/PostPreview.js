import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function PostPreview({post}) {

        return (
            <Link href={`/posts/${post.id}`}>  
                <div className="postPreview">
                    <h3>{post.title}</h3>
                    <p>{post.description}</p>
                    <p className="category">{post.category}</p>
                </div>
            </Link>
        )
}

