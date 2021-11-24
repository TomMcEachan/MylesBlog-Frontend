import React, {useState, useEffect} from 'react'
import PostPreviewFeatured from '../PostPreviewFeatured/PostPreviewFeatured.js';

export default function AllPostLists({posts}) {

    function renderPostPreviews() {
        return posts.map((post) => {
            return <PostPreviewFeatured post={post} key={post.id} />;
        });

    }

    return (
       <>
       <h2>All Posts</h2>
       {renderPostPreviews()}
       </>
    )
}