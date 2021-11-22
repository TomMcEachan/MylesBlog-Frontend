import axios from "axios";

export default function Home({posts}) {
  return (
    <>
       <h1>{posts[0].title}</h1>
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