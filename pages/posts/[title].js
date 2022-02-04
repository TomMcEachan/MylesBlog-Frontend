/* eslint-disable @next/next/no-img-element */
import React from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import Head from 'next/head';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import Link from 'next/link';


export default function PostPage({post, featuredPosts}) {

    const htmlContent = post[0].content
    
    return (
    <div className="container">
        <Head>
            <title>Myles McEachan | {post[0].title}</title>
            <meta name="description" content={post[0].description}/>
            <meta name="keywords" content={post[0].keywords} />
        </Head>
        <div className="categoryBoxSmallPost">
            <Link href={`/${post[0].categories[0].name}`} passHref>
                <button className="categoryBoxSmallBlog">{post[0].categories[0].name}</button>
            </Link>
        </div>
            <article>
                <header>
                    <h1 className="blogTitle">{post[0].title}</h1>
                    <h2 className="blogDescription">{post[0].description}</h2>
                    <h3 className="blogCategory">{post[0].category}</h3>
                    <img className="blogHeroImage" src={post[0].image[0].formats.medium.url} alt="placeholder" />
                </header>
                <main className="blogContentContainer">
                     <ReactMarkdown>{htmlContent}</ReactMarkdown>  
                    <div className="featuredPostsBlog">
                        <h3>Featured Posts</h3>
                            <Grid container rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md: 3}}>
                                <Grid item xs={4}>
                                    <Item>
                                        <div className="postPreview">
                                        <Link href={`/posts/${featuredPosts[0].title}`} passHref> 
                                        <a>
                                            <img 
                                            alt={featuredPosts[0].image[0].caption} 
                                            src={featuredPosts[0].image[0].formats.medium.url} 
                                            className="previewImageSmall" 
                                            /> 
                                        </a> 
                                        </Link>
                                        <div className="categoryBoxSmall">
                                            <Link href={`/${featuredPosts[0].name}`} passHref>
                                                <button className="category">{featuredPosts[0].name}</button>
                                            </Link>
                                        </div>
                                        <div className="postPreviewContentSmall">
                                            <h3 className="titleSmall">{featuredPosts[0].title}</h3>
                                        </div>
                                        </div>
                                    </Item>
                                </Grid>
                                <Grid item xs={4}>
                                     <Item>
                                        <div className="postPreview">
                                        <Link href={`/posts/${featuredPosts[1].title}`} passHref> 
                                        <a>
                                            <img 
                                            alt={featuredPosts[1].image[0].caption} 
                                            src={featuredPosts[1].image[0].formats.medium.url} 
                                            className="previewImageSmall" 
                                            /> 
                                        </a> 
                                        </Link>
                                        <div className="categoryBoxSmall">
                                            <Link href={`/${featuredPosts[1].name}`} passHref>
                                                <button className="category">{featuredPosts[1].name}</button>
                                            </Link>
                                        </div>
                                        <div className="postPreviewContentSmall">
                                        <h3 className="titleSmall">{featuredPosts[1].title}</h3>
                                        </div>
                                        </div>
                                    </Item>
                                </Grid>   
                                <Grid item xs={4}>
                                     <Item>
                                        <div className="postPreview">
                                        <Link href={`/posts/${featuredPosts[2].title}`} passHref> 
                                        <a>
                                            <img 
                                            alt={featuredPosts[2].image[0].caption} 
                                            src={featuredPosts[2].image[0].formats.medium.url} 
                                            className="previewImageSmall" 
                                            /> 
                                        </a> 
                                        </Link>
                                        <div className="categoryBoxSmall">
                                            <Link href={`/${featuredPosts[2].name}`} passHref>
                                                <button className="category">{featuredPosts[2].name}</button>
                                            </Link>
                                        </div>
                                        <div className="postPreviewContentSmall">
                                        <h3 className="titleSmall">{featuredPosts[2].title}</h3>
                                        </div>
                                        </div>
                                    </Item>
                                </Grid>  
                            </Grid>
                    </div>
                </main>
            </article>
    </div>
    )
}


 export async function getStaticProps({params}) {

    const postURL = `/posts/?title=${params.title}`
    const postRes = await axios.get(postURL)
    const featured = await axios.get("/posts?featured=true")

    return {
        props: {
            post: postRes.data,
            featuredPosts: featured.data
        }
    }
}

export async function getStaticPaths(){

const postsRes =  await axios.get("/posts")

const paths = postsRes.data.map((posts) => {
    return {params: {title: posts.title}}
});

    return( {
        paths, 
        fallback: false
    });
}

