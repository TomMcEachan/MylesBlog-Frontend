import axios from 'axios';
import HomeHeader from '../components/HomeHeader/HomeHeader';
import HomeLatestPosts from '../components/HomeLatestPosts/HomeLatestPosts';

export default function Home({allPosts, featuredPosts}) {
  return (
    <>
      <HomeHeader />
      <HomeLatestPosts allPosts={allPosts} featuredPosts={featuredPosts}/>
    </>
  )
}


export async function getStaticProps() {

  const allPostsRes = await axios.get("http://localhost:8005/posts")
  const featuredPostRes = await axios.get("http://localhost:8005/posts?featured=true")

  return {
    props: {
      allPosts: allPostsRes.data,
      featuredPosts: featuredPostRes.data
    }
  }
} 


