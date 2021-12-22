/* eslint-disable @next/next/no-img-element */
import React from 'react';
import axios from 'axios';
import MarkdownIt from 'markdown-it';
import Head from 'next/head';

export default function PostPage({post}) {

    const md = new MarkdownIt();
    const htmlContent = md.render(post[0].content);
    

    return (
    <div className="container">
        <Head>
            <title>World of Nabeeda | {post.title}</title>
            <meta name="description" content={post.description}/>
            <meta name="keywords" content={post.keywords} />
        </Head>
            <article>
                <header>
                    <h1 className="blogTitle">{post[0].title}</h1>
                    <h2 className="blogDescription">{post[0].description}</h2>
                    <h3 className="blogCategory">{post[0].category}</h3>
                    <img className="blogHeroImage" src={post[0].image[0].formats.medium.url} alt="placeholder" />
                </header>
                <section dangerouslySetInnerHTML={{__html: htmlContent}}></section>
            </article>
    </div>
    )
}


 export async function getStaticProps({params}) {

    const postRes = await axios.get(`/posts/?title=${params.title}`)

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

