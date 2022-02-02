import React from 'react'
import AllPostLists from '../components/PostLists/PostLists'
import axios from 'axios';
import Head from 'next/head';

export default function Posts({posts, title}) {
    return (
        <>
            <Head>
              <title>World of Nabeeda | All Posts</title>
            </Head>
            <AllPostLists className="categoryPosts" posts= {posts} listTitle={title}/>
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