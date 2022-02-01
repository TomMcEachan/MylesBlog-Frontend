/* eslint-disable @next/next/no-img-element */
import React from 'react';
import axios from 'axios';
import Head from 'next/head';
const {URL} = require('url');
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

export default function PostPage({post}) {

   
    const htmlContent = post[0].content;
    

    return (
    <div className="container">
        <Head>
            <title>World of Nabeeda | {post.title}</title>
            <meta name="description" content={post.description}/>
            <meta name="keywords" content={post.keywords} />
        </Head>
        <div className="categoryBoxSmallPost">
            <Link href={`/${post[0].categories[0].name}`} passHref>
                <button className="categorySmallPost">{post[0].categories[0].name}</button>
            </Link>
        </div>
        <main>
            <article>
                <header>
                    <h1 className="blogTitle">{post[0].title}</h1>
                    <h3 className="authorNameBlog">Nabeeda Bakali</h3>
                    <h2 className="blogDescription">{post[0].description}</h2>
                    <img className="blogHeroImage" src={post[0].image[0].formats.medium.url} alt="placeholder" />
                </header>
                <ReactMarkdown>{htmlContent}</ReactMarkdown>
            </article>
        </main>
    </div>
    )
}


 export async function getStaticProps({params}) {

    const postURL = `/posts/?title=${params.title}`
    const postRes = await axios.get(postURL)

    return {
        props: {
            post: postRes.data
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

