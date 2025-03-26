import { useEffect, useState } from "react";
import { useEditPostMutation } from "../features/api/apislice";

function EditPost({ post }) {
  console.log(post);

  const [editPost, { data, isError, isLoading, isSuccess }] =
    useEditPostMutation();
  const [title, setTitle] = useState(post?.title);
  const [text, setText] = useState(post?.body);

  useEffect(() => {
    setTitle(post?.title);
    setText(post?.body);
  }, [post?.body, post?.title]);

  const handleEdit = (e) => {
    e.preventDefault();
    editPost({
      userId: post.userId,
      id: post.id,
      data,
    });
  };

  return (
    <div>
      <form onSubmit={handleEdit}>
        <input
          type="text"
          placeholder="Enter post title"
          className="my-5 text-center"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Enter post content"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <button
          type="submit"
          disabled={isLoading}
          className={
            isLoading ? "bg-blue-400 text-white" : "bg-green-600 text-white"
          }
        >
          Submit
        </button>
      </form>
      {isSuccess && (
        <p className="text-green-600">Post updated successfully!</p>
      )}
      {isError && <p className="text-red-600">There was an error</p>}
    </div>
  );
}

export default EditPost;
