import CategoryPreview from '../CategoryPreview/CategoryPreview';

export default function AllPostLists({posts, listTitle}) {

    function renderCategoryPreviews() {
        return posts.map((post) => {
            return <CategoryPreview post={post} key={post.id} />;
        });

    }

    return (
       <>
       <h2>{listTitle}</h2>
       {renderCategoryPreviews()}
       </>
    )
}