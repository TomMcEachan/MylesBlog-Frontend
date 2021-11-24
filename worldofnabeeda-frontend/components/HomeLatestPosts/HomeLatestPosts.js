import React, {useState, useEffect} from 'react'
import PostPreview from '../PostPreview/PostPreview';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';

export default function HomeLatestPosts({posts}) {

    const [posts, setLatestPosts] = useState([]);

    useEffect(() => {
       setLatestPosts(posts.slice(0,5));
    }, [posts]);

    function renderPostPreviews() {
        return latestPosts.map((post) => {
            return <PostPreview post={post} key={post.id} category={post.category} />;
        });
    }

    return (
       <div>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Item>
                        <h3 className="categoryTitle">Featured</h3>
                        <hr className="separator"/>
                        {renderPostPreviews()}
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>
                        <h3 className="categoryTitle">Reflections</h3>
                        <hr className="separator"/>
                        {renderPostPreviews()}
                    </Item>
                </Grid>
            </Grid>
       </div>
    )
}
