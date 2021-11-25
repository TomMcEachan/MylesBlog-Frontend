import React, {useState, useEffect} from 'react'
import PostPreview from '../PostPreview/PostPreview';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';


export default function HomeLatestPosts({lifestylePosts, careerPosts, educationPosts}) {

    //Creates state for each query
    const [getCareerPosts, setCareerPosts] = useState([]);
    const [getEducationPosts, setEducationPosts] = useState([]);
    const [getLifestylePosts, setLifestylePosts] = useState([]);


    //Gets 4 career posts
    useEffect(() => {
       setCareerPosts(getCareerPosts.slice(0,2));
    }, [careerPosts]);

    //Gets 4 education posts
    useEffect(() => {
        setLifestylePosts(getLifestylePosts.slice(0,2));
     }, [lifestylePosts]);

    //Gets lifestyle posts
    useEffect(() => {
        setEducationPosts(getEducationPosts.slice(0,2));
    }, [educationPosts]);


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
                <Grid item xs={4}>
                    <Item>
                        <h3 className="categoryTitle">Career</h3>
                        <hr className="separator"/>
                        {renderPostPreviews(careerPosts)}
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>
                        <h3 className="categoryTitle">Education</h3>
                        <hr className="separator"/>
                        {renderPostPreviews(educationPosts)}
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>
                        <h3 className="categoryTitle">Lifestyle</h3>
                        <hr className="separator"/>
                        {renderPostPreviews(lifestylePosts)}
                    </Item>
                </Grid>
            </Grid>
       </div>
    )
}
