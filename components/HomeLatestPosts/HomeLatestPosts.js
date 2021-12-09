import React, {useState, useEffect} from 'react'
import PostPreview from '../PostPreview/PostPreview';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';


export default function HomeLatestPosts({allPosts, featuredPosts}) {

    //Creates state each query
    const [getAllPosts, setAllPosts] = useState([]);
    const [getFeaturedPosts, setFeaturedPosts] = useState([]);


    //Sets all posts and gets 4
    useEffect(() => {
       setAllPosts(getAllPosts.slice(0,5));
    }, [allPosts, getAllPosts]);


    //Sets featured posts and gets 4
    useEffect(() => {
        setFeaturedPosts(getFeaturedPosts.slice(0,5));
    }, [featuredPosts, getFeaturedPosts]);


    //This function renders the PostPreview component with the data queries from the Strapi Database.
    function renderPostPreviews(type) {
        return type.map((post) => {
            return <PostPreview post={post} key={post.id} category={post.category} />;
        });
    }


    //This a Grid Container with two columns on articles
    return (
       <div>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Item>
                        <h3 className="categoryTitle">Featured</h3>
                        <hr className="separator"/>
                        {renderPostPreviews(featuredPosts)}
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>
                        <h3 className="categoryTitle">All</h3>
                        <hr className="separator"/>
                        {renderPostPreviews(allPosts)}
                    </Item>
                </Grid>
            </Grid>
       </div>
    )
}
