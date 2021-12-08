import React from 'react'
import AllPostLists from '../components/AllPostsList/AllPostLists'
import axios from 'axios';

export default function Posts({posts}) {
    return (
        <>
            <AllPostLists posts= {posts} listTitle={title}/>
        </>

    )
}



export async function getStaticProps() {

    const postsRes = await axios.get("/posts")
  
    return {
      props: {
        posts: postsRes, 
        title: "All Posts"
      }
    }
}