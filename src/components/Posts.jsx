// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchPosts } from "../features/posts/postsSlice";

import { useEffect, useState } from "react";
import { useGetPostsQuery } from "../features/api/apislice";
import Post from "./Post";

export default function Posts() {
  const [request, setRequest] = useState(false);
  const {
    data: posts,
    isLoading,
    isError,
    error,
    refetch,
  } = useGetPostsQuery(undefined, {
    refetchOnMountOrArgChange: 5,
    skip: request,
    pollingInterval: 3000,
  });

  const [currentPostID, setPostID] = useState(false);
  let content;

  if (isLoading) {
    content = <h1>Loading posts...</h1>;
  }
  if (!isLoading && isError) {
    content = <h1 className="text-red-500">There was an error: {error}</h1>;
  }

  if (!isLoading && !isError) {
    if (posts.length > 0) {
      content = (
        <ul>
          {posts.map((post) => (
            <li
              style={{
                listStyleType: "square",
              }}
              key={post.id}
            >
              <a href="#" onClick={() => setPostID(post.id)}>
                {post.title}
              </a>
            </li>
          ))}
        </ul>
      );
    } else {
      content = <h1>No posts found!</h1>;
    }
  }

  return (
    <div className="p-10 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      {content}
      <div className=" max-auto mt-10 space-y-5">
        {currentPostID && <Post postId={currentPostID} />}
        <button onClick={refetch}>Force refetch</button>
      </div>
    </div>
  );
}
