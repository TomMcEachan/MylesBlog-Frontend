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
    const postsRes = await axios.get("/posts?filters[")
    return {
      props: {
        posts: postsRes.data
      }
    }
}