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

  if (!isLoading && !isError && post?.id) {
    content = <h1>{post.body}</h1>;
  }
  return (
    <div className="p-10 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <h1>{content || "no content available"}</h1>
    </div>
  );
}

export default Post;
