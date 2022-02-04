import axios from 'axios';
import Grid from '@mui/material/Grid';
import Head from 'next/head';
import PagePreview from '../components/PagePreview/PagePreview';

export default function Posts({posts, title}) {

  function shufflePosts(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
  }
    
    return (
     
      <>
      
       {shufflePosts(posts)}
      <Head>
         <title>Myles McEachan - Blog | {title} </title>
       </Head>
       <main>
         <div className="container">
             <h2 className="categoryPageTitle">{title}</h2>
             <p className="categoryDescriptor">All of my blogs from over the years...</p>
             <hr className="separator"/>
             <Grid container spacing={4}>
               {posts.map((post) => (
                 <PagePreview posts={post} key={post} /> 
               ))}       
             </Grid>
         </div>
       </main>
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