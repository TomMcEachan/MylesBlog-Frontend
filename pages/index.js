import axios from 'axios';
import HomeHeader from '../components/HomeHeader/HomeHeader';
import HomeLatestPosts from '../components/HomeLatestPosts/HomeLatestPosts';
import HomeGrid from '../components/HomeGrid/HomeGrid';


//This is what is displayed 
export default function Home({allPosts, featuredPosts, lifestylePosts}) {

  return (
    <>
      <HomeHeader featuredPosts={featuredPosts}/>
      <div className="container">
        <HomeLatestPosts allPosts={allPosts} featuredPosts={featuredPosts}/>
        <HomeGrid lifestylePosts={lifestylePosts}/>
     </div>
    </>
  )
}


//Gets all of the data from the Strapi CMS using API Endpoints and Axios
export async function getStaticProps() {

  //This queries the CMS for all the posts in the blog database
  const allPostsRes = await axios.get("/posts")

  //This queries the CMS for all the posts that have been marked as 'featured' in the CMS
  const featuredPostRes = await axios.get("/posts?featured=true")

  //This queries the CMS for all the posts that fall under the 'travel' category 
  const lifestylePostRes = await axios.get("/categories?name=lifestyle");
  
  
  //Returns data from api as a prop to be use in component
  return {
    props: {
      allPosts: allPostsRes.data,
      featuredPosts: featuredPostRes.data,
      lifestylePosts: lifestylePostRes.data
    }
  }
} 




