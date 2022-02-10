/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';


export default function PostPreview({post}) {
    
        return (
            <>
                <div className="postPreview">
                    <Link href={`posts/${post.title}`} passHref>  
                        <img alt={post.image[0].caption} src={post.image[0].formats.large.url} className="previewImage" />
                    </Link>
                    <div className="categoryBox">
                            <Link href={`/${post.categories[0].name}`} passHref>
                                <button className="category">{post.categories[0].name}</button>
                            </Link>
                    </div>
                    <div className="postPreviewContent">
                        <h3 className="title">{post.title}</h3>
                        <div className="author">
                            <p>By <Link href="https://www.linkedin.com/in/myles-elio-mceachan-32238b210/"><a className="authorName">Myles McEachan</a></Link></p>
                        </div>
                        <p className="postDescription">{post.description}</p>
                        <Link href={`posts/${post.title}`} passHref>  
                            <button className="readMoreButton">Read More</button>
                        </Link>
                    </div>
                </div>
            </>
        )
}

