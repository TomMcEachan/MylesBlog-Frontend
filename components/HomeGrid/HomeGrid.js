import React from 'react'
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import CategoryPreviewHero from '../CategoryPreview/CategoryPreviewHero';
import CategoryPreviewGrid from '../CategoryPreview/CategoryPreviewGrid';

export default function HomeGrid({lifestylePosts}) {

    var info = lifestylePosts.flat();
    const heroPost = lifestylePosts.slice(0);
    const additionalPosts =lifestylePosts.slice(0)

    //This function renders the HeroPost component for the category with the data queries from the Strapi Database.
    function renderPreviews(type) {
        return type.map((post) => {
            return <CategoryPreviewHero data={post} key={post.id} />;
        });
    }

    //This function renders 4 posts from this category with the data queried from the Strapi Database
    function renderSmallPreviews(type){
        return type.map((post) => {
            return <CategoryPreviewGrid data={post} key={post.id} />
        });
    }

    return (
            <div className="careerContainer">
                <h3 className="categoryTitle">Lifestyle</h3>
                <hr className="separator"/>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Item>
                            {renderPreviews(heroPost)}
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Item>
                            {renderSmallPreviews(additionalPosts)}  
                        </Item>
                    </Grid>
                 </Grid>   
            </div>
    )
}
