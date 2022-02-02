import React from 'react'
import axios from 'axios';
import Head from 'next/head';

export default function Posts({posts, title}) {
    return (
        <>
            <Head>
              <title>World of Nabeeda | All Posts</title>
            </Head>
            <div className="container">
            </div>
        </>

    )
}


export async function getStaticProps() {

    const postsRes = await axios.get("/posts")
  
    return {
      props: {
        posts: postsRes.data, 
        title: "All Posts"
      }
    }
}