import axios from 'axios';
import AllPostLists from '../components/AllPostsList/AllPostLists';


export default function Travel ({posts}) {

    return (
        <>
            <AllPostLists posts={posts} listTitle={title}/>
        </>
    )
}

export async function getStaticProps() {
    const response = await axios.get("/categories?name=lifestyle");
    const lifestylePosts = response.data[0].posts;
    
    return {
      props: {
        posts: lifestylePosts,
        title: "Lifestyle"
      }
    }
}