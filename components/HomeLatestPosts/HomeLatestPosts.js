import React from 'react'
import PostPreview from '../PostPreview/PostPreview';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';


export default function HomeLatestPosts({allPosts, featuredPosts}) {

    const all = allPosts.slice(0, 1);
    const featured = featuredPosts.slice(0, 1);

    //This function renders the PostPreview component with the data queries from the Strapi Database.
    function renderPostPreviews(type) {
        return type.map((post) => {
            return <PostPreview post={post} key={post.id} category={post.category} />;
        });
    }


    //This a Grid Container with two columns on articles
    return (
        <>
            <div className="desktopContainer">
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <Item>
                                <h3 className="categoryTitle">Featured</h3>
                                <hr className="separator"/>
                                {renderPostPreviews(featured)}
                            </Item>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <Item>
                                <h3 className="categoryTitle">Latest</h3>
                                <hr className="separator"/>
                                {renderPostPreviews(all)}
                            </Item>
                        </Grid>
                    </Grid>
            </div>
       </>
    )
}
