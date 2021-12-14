/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function PostPreview({post}) {

        console.log(post.image);

        return (
            <>
                <div className="postPreview">
                    <img alt={post.image.caption} src={post.image[0].formats.medium.url} className="previewImage" />
                    <div className="categoryBox">
                            <button className="category">{post.categories[0].name}</button>
                    </div>
                    <h3>{post.title}</h3>
                    <p>{post.description}</p>
                    <Link href={`/posts/${post.id}`} passHref>  
                    <button>Read More</button>
                    </Link>
                </div>
            </>
        )
}

