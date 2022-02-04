/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';

export default function PagePreviewTravel({posts}) {
return( 
    <>
        <Grid item xs={12} md={6} xl={4}>
            <Item>
                <div className="desktopContainer">
                    <Link href={`posts/${posts.pagetitle}`} passHref> 
                        <a><img alt={posts.image[0].caption} src={posts.image[0].formats.medium.url} className="previewImageSmall" /> </a> 
                    </Link>
                    <div className="postPreviewContentSmall">
                        <h3 className="titleSmall">{posts.title}</h3>
                        <div className="previewAuthor">
                            <p>By <Link href="https://twitter.com/worldofnabeeda"><a className="authorName">Myles McEachan</a></Link></p>
                        </div>
                        <p className="postDescription">{posts.description}</p>
                        <Link href={`posts/${posts.pagetitle}`} passHref>  
                            <button className="readMoreButton">Read More</button>
                        </Link>
                    </div>                 
                </div>
            </Item>
        </Grid>
    </>
)}


