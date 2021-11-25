import axios from 'axios';
import HomeHeader from '../components/HomeHeader/HomeHeader';
import HomeLatestPosts from '../components/HomeLatestPosts/HomeLatestPosts';
import HomeCategoryPosts from '../components/HomeCategoryPosts/HomeCategoryPosts';

export default function Home({allPosts, featuredPosts, lifestylePosts, careerPosts, educationPosts}) {
  return (
    <>
      <HomeHeader />
      <HomeLatestPosts allPosts={allPosts} featuredPosts={featuredPosts}/>
      <HomeCategoryPosts lifestylePosts={lifestylePosts} careerPosts={careerPosts} educationPosts={educationPosts} />
    </>
  )
}


//Gets all of the data from the Strapi CMS using API Endpoints and Axios
export async function getStaticProps() {

  const allPostsRes = await axios.get("https://worldofnabeeda-strapi.herokuapp.com/posts")
  const featuredPostRes = await axios.get("https://worldofnabeeda-strapi.herokuapp.com/posts?featured=true")
  const lifestylePostsRes = await axios.get("https://worldofnabeeda-strapi.herokuapp.com/posts")
  const careerPostsRes = await axios.get("https://worldofnabeeda-strapi.herokuapp.com/posts")
  const educationPostsRes = await axios.get("https://worldofnabeeda-strapi.herokuapp.com/posts")

  //Returns data from api as a prop to be use in component
  return {
    props: {
      allPosts: allPostsRes.data,
      featuredPosts: featuredPostRes.data,
      lifestylePosts: lifestylePostsRes.data,
      careerPosts: careerPostsRes.data,
      educationPosts: educationPostsRes.data
    }
  }
} 


