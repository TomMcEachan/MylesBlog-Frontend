import axios from 'axios';
import AllPostLists from '../components/AllPostsList/AllPostLists';
import Head from 'next/head';

export default function Travel ({posts, title}) {

    return (
        <>
            <Head>
              <title>World of Nabeeda | Careers</title>
            </Head>
            <AllPostLists posts={posts} listTitle={title}/>
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