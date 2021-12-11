import axios from 'axios';
import AllPostLists from '../components/AllPostsList/AllPostLists';


export default function Travel ({posts, title}) {

    return (
        <>
            <AllPostLists posts={posts} listTitle={title}/>
        </>
    )
}

export async function getStaticProps() {
    const response = await axios.get("/categories?name=causes");
    const causesPosts = response.data[0].posts;
  
    return {
      props: {
        posts: causesPosts,
        title: "Causes"
      }
    }
}