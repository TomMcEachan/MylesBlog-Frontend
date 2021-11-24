import axios from 'axios';
import HomeHeader from '../components/HomeHeader/HomeHeader';
import HomeLatestPosts from '../components/HomeLatestPosts/HomeLatestPosts';

export default function Home({posts}) {
  return (
    <>
      <HomeHeader />
      <HomeLatestPosts data={posts}/>
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


