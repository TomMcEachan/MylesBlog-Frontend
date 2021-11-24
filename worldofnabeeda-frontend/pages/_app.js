import NavBar from '../components/NavBar/NavBar';
import TopBar from '../components/TopBar/TopBar';
import axios from 'axios';
import '../styles/index.scss';



//Returns the App to the Browser
export default function MyApp({ Component, pageProps, posts }) {
  return (
  <div className="app">
    <TopBar posts={posts}/>
    <NavBar />
      <div className="container">
      <Component {...pageProps} />
      </div>
  </div>
  )
}



//Returns the posts from Strappi CMS
export async function getStaticProps() {

  const postsRes = await axios.get("http://localhost:8005/posts")
  return {
    props: {
      posts: postsRes.data
    }
  }

} 