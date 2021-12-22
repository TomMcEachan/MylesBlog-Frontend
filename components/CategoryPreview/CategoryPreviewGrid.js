/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import Link from 'next/link';

export default function CategoryPreviewGrid({data}) {
    return (
        <div>
            <Grid container rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md: 3}}>
                <Grid item xs={6}>
                    <Item>
                        <div className="postPreview">
                                <Link href={`/posts/${data.posts[0].title}`} passHref> 
                                   <a><img alt={data.posts[0].image[0].caption} src={data.posts[0].image[0].formats.medium.url} className="previewImageSmall" /> </a> 
                                </Link>
                                <div className="categoryBoxSmall">
                                    <Link href={`/${data.name}`} passHref>
                                        <button className="categorySmall">{data.name}</button>
                                    </Link>
                            </div>
                            <div className="postPreviewContentSmall">
                                <h3 className="titleSmall">{data.posts[0].title}</h3>
                            </div>
                        </div>
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>
                        <div className="postPreview">
                        <Link href={`/posts/${data.posts[1].title}`} passHref>
                            <a><img alt={data.posts[1].image[0].caption} src={data.posts[1].image[0].formats.medium.url} className="previewImageSmall" /> </a> 
                        </Link>
                        <div className="categoryBoxSmall">
                                <Link href={`/${data.name}`} passHref>
                                    <button className="categorySmall">{data.name}</button>
                                </Link>
                                </div>
                        <div className="postPreviewContentSmall">
                                    <h3 className="titleSmall">{data.posts[1].title}</h3>
                            </div>
                        </div>
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>
                        <div className="postPreview">
                            <Link href={`/posts/${data.posts[2].title}`} passHref>
                                <a><img alt={data.posts[2].image[0].caption} src={data.posts[2].image[0].formats.medium.url} className="previewImageSmall" /> </a>
                            </Link>
                            <div className="categoryBoxSmall">
                                    <Link href={`/${data.name}`} passHref>
                                        <button className="categorySmall">{data.name}</button>
                                    </Link>
                            </div>
                            <div className="postPreviewContentSmall">
                                    <h3 className="titleSmall">{data.posts[2].title}</h3>
                            </div>
                        </div>
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>
                        <div className="postPreview">
                        <Link href={`/posts/${data.posts[3].title}`} passHref>  
                            <a><img alt={data.posts[3].image[0].caption} src={data.posts[3].image[0].formats.medium.url} className="previewImageSmall" /> </a>              
                        </Link>
                                <div className="categoryBoxSmall">
                                    <Link href={`/${data.name}`} passHref>
                                        <button className="categorySmall">{data.name}</button>
                                    </Link>
                                </div>
                            <div className="postPreviewContent">
                                    <h3 className="titleSmall">{data.posts[3].title}</h3>
                            </div>
                        </div>
                    </Item>
                </Grid>
            </Grid>       
        </div>
    )
}
