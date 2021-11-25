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

    const postsRes = await axios.get("https://worldofnabeeda-strapi.herokuapp.com/posts")
  
    return {
      props: {
        posts: postsRes.data
      }
    }
}