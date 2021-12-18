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
                                <img alt={data.posts[0].image[0].caption} src={data.posts[0].image[0].formats.medium.url} className="previewImageSmall" />
                                <div className="categoryBoxSmall">
                                    <Link href={`/${data.name}`} passHref>
                                        <button className="categorySmall">{data.name}</button>
                                    </Link>
                            </div>
                            <div className="postPreviewContentSmall">
                                <h3 className="titleSmall">{data.posts[0].title}</h3>
                                <div className="authorSmall">
                                    <p>By <Link href="https://twitter.com/worldofnabeeda"><a className="authorNameSmall">Nabeeda Bakali</a></Link></p>
                                </div>
                                <Link href={`/posts/${data.posts[0].id}`} passHref>  
                                    <button className="readMoreButtonSmall">Read More</button>
                                </Link>
                            </div>
                        </div>
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>
                        <div className="postPreview">
                            <img alt={data.posts[1].image[0].caption} src={data.posts[1].image[0].formats.medium.url} className="previewImageSmall" />
                                <div className="categoryBoxSmall">
                                    <Link href={`/${data.name}`} passHref>
                                        <button className="categorySmall">{data.name}</button>
                                    </Link>
                                </div>
                            <div className="postPreviewContentSmall">
                                    <h3 className="titleSmall">{data.posts[1].title}</h3>
                                    <div className="authorSmall">
                                        <p>By <Link href="https://twitter.com/worldofnabeeda"><a className="authorNameSmall">Nabeeda Bakali</a></Link></p>
                                    </div>
                                    <Link href={`/posts/${data.posts[1].id}`} passHref>  
                                        <button className="readMoreButtonSmall">Read More</button>
                                    </Link>
                            </div>
                        </div>
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>
                        <div className="postPreview">
                            <img alt={data.posts[2].image[0].caption} src={data.posts[2].image[0].formats.medium.url} className="previewImageSmall" />
                                <div className="categoryBoxSmall">
                                    <Link href={`/${data.name}`} passHref>
                                        <button className="categorySmall">{data.name}</button>
                                    </Link>
                                </div>
                            <div className="postPreviewContentSmall">
                                    <h3 className="titleSmall">{data.posts[2].title}</h3>
                                    <div className="authorSmall">
                                        <p>By <Link href="https://twitter.com/worldofnabeeda"><a className="authorNameSmall">Nabeeda Bakali</a></Link></p>
                                    </div>
                                    <Link href={`/posts/${data.posts[2].id}`} passHref>  
                                        <button className="readMoreButtonSmall">Read More</button>
                                    </Link>
                            </div>
                        </div>
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>
                        <div className="postPreview">
                            <img alt={data.posts[3].image[0].caption} src={data.posts[3].image[0].formats.medium.url} className="previewImageSmall" />
                                <div className="categoryBoxSmall">
                                    <Link href={`/${data.name}`} passHref>
                                        <button className="categorySmall">{data.name}</button>
                                    </Link>
                                </div>
                            <div className="postPreviewContent">
                                    <h3 className="titleSmall">{data.posts[3].title}</h3>
                                    <div className="authorSmall">
                                        <p>By <Link href="https://twitter.com/worldofnabeeda"><a className="authorNameSmall">Nabeeda Bakali</a></Link></p>
                                    </div>
                                    <Link href={`/posts/${data.posts[3].id}`} passHref>  
                                        <button className="readMoreButtonSmall">Read More</button>
                                    </Link>
                            </div>
                        </div>
                    </Item>
                </Grid>
            </Grid>       
        </div>
    )
}