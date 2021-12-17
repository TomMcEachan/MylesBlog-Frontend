/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';


export default function PostPreview({post}) {
    
        return (
            <>
                <div className="postPreview">
                    <img alt={post.image.caption} src={post.image[0].formats.medium.url} className="previewImage" />
                    <div className="categoryBox">
                            <Link href={`${post.categories[0].name}`} passHref>
                                <button className="category">{post.categories[0].name}</button>
                            </Link>
                    </div>
                    <div className="postPreviewContent">
                        <h3 className="title">{post.title}</h3>
                        <div className="author">
                            <p>By <Link href="https://twitter.com/worldofnabeeda"><a className="authorName">Nabeeda Bakali</a></Link></p>
                        </div>
                        <p className="postDescription">{post.description}</p>
                        <Link href={`/posts/${post.id}`} passHref>  
                            <button className="readMoreButton">Read More</button>
                        </Link>
                    </div>
                </div>
            </>
        )
}

