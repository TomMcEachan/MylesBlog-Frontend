import { alertTitleClasses, getDialogTitleUtilityClass } from '@mui/material';
import PostPreview from '../PostPreview/PostPreview.js';

export default function AllPostLists({posts, listTitle}) {

    function renderPostPreviews() {
        return posts.map((post) => {
            return <PostPreview post={post} key={post.id} />;
        });

    }

    return (
       <>
       <h2>{listTitle}</h2>
       {renderPostPreviews()}
       </>
    )
}