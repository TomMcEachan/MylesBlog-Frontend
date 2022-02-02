import axios from 'axios';

import Head from 'next/head';

export default function Travel ({posts, title}) {

    return (
        <>
         <Head>
            <title>World of Nabeeda | Travel </title>
          </Head>
          <main>
            <div className="container">
                
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