import axios from 'axios';
import PagePreviewTravel from '../components/PagePreview/Travel/PagePreviewTravel';
import Head from 'next/head';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';

export default function Travel ({posts, title}) {

  function renderPreviews(data){
    return data.map((post) => {
        <PagePreviewTravel posts={post} key={post.id}/>
      })
  }

    return (
        <>
         <Head>
            <title>World of Nabeeda | Travel </title>
          </Head>
          <main>
            <div className="container">
                <h2 className="categoryPageTitle">{title}</h2>
                <p className="categoryDescriptor">My {title} blogs from over the years...</p>
                <hr className="separator"/>
                <Grid container spacing={4}>
                  <Grid item xs={4}>
                    <Item>
                     {renderPreviews(posts)}
                    </Item>
                  </Grid>               
                </Grid>
                
            </div>
          </main>
        </>
    )
}

export async function getStaticProps() {
    const response = await axios.get("/categories?name=travel");
    const travelPosts = response.data[0].posts;
  
    return {
      props: {
        posts: travelPosts,
        title: "Travel"
      }
    }
}