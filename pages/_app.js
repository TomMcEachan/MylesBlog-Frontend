import NavBar from '../components/NavBar/NavBar';
import TopBar from '../components/TopBar/TopBar';
import axios from 'axios';
import '../styles/index.scss';


axios.defaults.baseURL= "https://worldofnabeeda-strapi.herokuapp.com";

//Returns the App to the Browser
export default function MyApp({ Component, pageProps, featuredPosts}) {
  return (
  <div className="app">
    <TopBar featured={featuredPosts} />
    <NavBar />
      <div className="container">
      <Component {...pageProps}/>
      </div>
  </div>
  )
}


//Gets all of the data from the Strapi CMS using API Endpoints and Axios
export async function getStaticProps() {

  //This queries the CMS for all the posts that have been marked as 'featured' in the CMS
  const featuredPostRes = await axios.get("/posts?featured=true")


  //Returns data from api as a prop to be use in component
  return {
    props: {
      featuredPosts: featuredPostRes.data,
    }
  }
} 