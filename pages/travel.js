import axios from 'axios';
import AllPostLists from '../components/AllPostsList/AllPostLists';


export default function Travel ({posts}) {

    return (
        <>
            <AllPostLists posts={posts}/>
        </>
    )
}

export async function getStaticProps() {
    const response = await axios.get("/categories?name=travel");
    const travelPosts = response.data[0].posts;
    console.log(travelContent);
    return {
      props: {
        posts: travelPosts
      }
    }
}