import React, {useState, useEffect} from 'react'
import PostPreview from '../PostPreview/PostPreview';

export default function AllPostLists({posts}) {

    function renderPostPreviews() {
        return posts.map((post) => {
            return <PostPreview post={post} key={post.id} />;
        });

    }

    return (
       <>
       <h2>All Posts</h2>
       {renderPostPreviews()}
       </>
    )
}