import { useGetPostQuery } from "../features/api/apislice";

function Post({ postId }) {
  const { data: post, isLoading, isError } = useGetPostQuery(postId);
  let content = null;
  if (isLoading) {
    content = <h1>Loading...</h1>;
  }

  if (!isLoading && isError) {
    content = <h1>somthing went wrong</h1>;
  }

  if (!isLoading && !isError) {
    if (post?.id) {
      content = <p className="text-lg">{post.title}</p>;
    } else {
      content = <p className="text-gray-500">No post found.</p>;
    }
  }

  return (
    <div className="p-10 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      {content ? (
        <div>{content}</div>
      ) : (
        <p className="text-gray-500">No content available</p>
      )}
    </div>
  );
}

export default Post;
