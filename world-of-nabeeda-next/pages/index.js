import axios from "axios";
import HomeHeader from "../components/HomeHeader";

export default function Home({posts}) {
  return (
    <>
      <HomeHeader />  
    </>
  )
}

export async function getStaticProps() {
  
  const postsRes = await axios.get("http://localhost:8005/posts");


  return {
    props: {
      posts: postsRes.data,
    }
  }
}