/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

export default function PagePreviewTravel({posts}) {

return( 
    <>
        <div className="pagePreviewContainer">
            <Link href={`/posts/${posts[0].title}`} passHref> 
                <a><img alt={posts[0].image[0].caption} src={posts[0].image[0].formats.medium.url} className="previewImageSmall" /> </a> 
            </Link>
            <div className="postPreviewContentSmall">
                <h3 className="titleSmall">{posts[0].title}</h3>
            </div>                 
        </div>
    </>
)}
