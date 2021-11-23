import React from 'react'
import axios from 'axios';


export default function Causes({posts}) {
    return (
        <div>
            <h2>{posts[0].title}</h2>
            <h4>{posts[0].description}</h4>
            <a href=''>Read the blog</a>
        </div>
    )
}


export async function getStaticProps() {
    const postsRes = await axios.get("http://localhost:8005/posts");

    return {
      props: {
        posts: postsRes.data,
      }
    }
  }
