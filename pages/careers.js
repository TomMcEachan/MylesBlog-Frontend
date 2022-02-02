import axios from 'axios';
import Grid from '@mui/material/Grid';
import Head from 'next/head';
import PagePreview from '../components/PagePreview/PagePreview';

export default function Travel ({posts, title}) {

    return (
      <>
      <Head>
         <title>World of Nabeeda | {title} </title>
       </Head>
       <main>
         <div className="container">
             <h2 className="categoryPageTitle">{title}</h2>
             <p className="categoryDescriptor">My {title} blogs from over the years...</p>
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
    const response = await axios.get("/categories?name=careers");
    const careerPosts = response.data[0].posts;
  
    return {
      props: {
        posts: careerPosts,
        title: "Careers"
      }
    }
}