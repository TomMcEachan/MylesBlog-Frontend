import React from 'react'
import AllPostLists from '../components/AllPostsList/AllPostLists'
import axios from 'axios';

export default function Posts({posts}) {
    return (
        <>
            <AllPostLists posts= {posts}/>
        </>

    )
}



export async function getStaticProps() {

    const postsRes = await axios.get("http://localhost:8005/posts")
  
    return {
      props: {
        posts: postsRes.data
      }
    }
}