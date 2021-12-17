import React from 'react'
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import PostPreview from '../PostPreview/PostPreview';

export default function HomeGrid({careerPosts}) {


    const career = careerPosts.slice(0, 1);
    
    //This function renders the PostPreview component with the data queries from the Strapi Database.
    function renderPreviews(type) {
        return type.map((post) => {
            return <PostPreview post={post} key={post.id} category={post.category} />;
        });
    }

    return (
            <div className="careerContainer">
                <h3 className="categoryTitle">Career</h3>
                <hr className="separator"/>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Item>
                            {renderPreviews(career)}
                        </Item>
                    </Grid>
                 </Grid>   
            </div>
    )
}
