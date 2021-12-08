import React from 'react';
//import axios from 'axios';
//import MarkdownIt from 'markdown-it';

export default function PostPage({post}) {

    //const md = new MarkdownIt();
    // const htmlContent = md.render(post.content);
    

    return (
       <article>
           <header>
               <h1>Test Title</h1>
               <h2>Test Description</h2>
           </header>
         {/*  <section dangerouslySetInnerHTML={{__html: htmlContent}}></section> */}
       </article>
    )
}


{/* export async function getStaticProps({params}) {

    const postRes = await axios.get(`https://worldofnabeeda-strapi.herokuapp.com/${params.id}`)

    return {
        props: {
            post: postRes.data
        }
    }
}


export async function getStaticPaths(){

const postsRes =  await axios.get("https://worldofnabeeda-strapi.herokuapp.com/posts")

const paths = postsRes.data.map((posts) => {
    return {params: {id: posts.id.toString()}}
});

    return( {
        paths, 
        fallback: false
    });
}

*/}