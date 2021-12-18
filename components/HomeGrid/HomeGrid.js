import React from 'react'
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import CategoryPreview from '../CategoryPreview/CategoryPreview';

export default function HomeGrid({careerPosts}) {


    const posts = careerPosts.slice(0, 6);
    
    //This function renders the PostPreview component with the data queries from the Strapi Database.
    function renderPreviews(type) {
        return type.map((post) => {
            return <CategoryPreview data={post} key={post.id} />;
        });
    }

    return (
            <div className="careerContainer">
                <h3 className="categoryTitle">Career</h3>
                <hr className="separator"/>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Item>
                            {renderPreviews(posts)}
                        </Item>
                    </Grid>
                 </Grid>   
            </div>
    )
}
