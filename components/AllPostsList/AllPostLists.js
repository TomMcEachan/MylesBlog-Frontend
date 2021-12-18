import PagePreview from '../PagePreview/PagePreview';

export default function AllPostLists({posts, listTitle}) {

    function renderCategoryPreviews() {
        return posts.map((post) => {
            return <PagePreview post={post} key={post.id} />;
        });

    }

    return (
       <>
       <h2>{listTitle}</h2>
       {renderCategoryPreviews()}
       </>
    )
}