/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

export default function PostPreview({data}) {

        

        return (
            <>
                <div className="postPreview">
                    <img alt={data.posts[0].image[0].caption} src={data.posts[0].image[0].formats.medium.url} className="previewImage" />
                    <div className="categoryBox">
                            <Link href={`/${data.name}`} passHref>
                                <button className="category">{data.name}</button>
                            </Link>
                    </div>
                    <div className="postPreviewContent">
                        <h3 className="title">{data.posts[0].title}</h3>
                        <div className="author">
                            <p>By <Link href="https://twitter.com/worldofnabeeda"><a className="authorName">Nabeeda Bakali</a></Link></p>
                        </div>
                        <p className="postDescription">{data.posts[0].description}</p>
                        <Link href={`/posts/${data.posts[0].id}`} passHref>  
                            <button className="readMoreButton">Read More</button>
                        </Link>
                    </div>
                </div>
            </>
        )
}