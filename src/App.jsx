import { useState } from "react";
import Posts from "./components/Posts";
import { useAddPostMutation } from "./features/api/apislice";
import EditPost from "./components/EditPost";

export default function App() {
  const [addPost, { data: post, isLoading, isError, isSuccess }] =
    useAddPostMutation();
  console.log(post);

  const [showPost, setShowPost] = useState(true);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addPost({
      userId: Date.now() + "",
      title,
      body: text,
    });
    setText("");
    setTitle("");
  };
  return (
    <div className="w-screen h-full min-h-screen p-10 bg-gray-100 text-slate-700">
      <p>RTK Querry</p>
      <EditPost post={post} />

      <div className="m-6">
        <button
          className="bg-blue-600 text-center  text-white px-1 py-2"
          onClick={() => setShowPost((prevState) => !prevState)}
        >
          {showPost ? "Hide" : "Show"} posts
        </button>
      </div>

      <div className="max-w-md max-auto mt-10 space-y-5">
        {showPost && <Posts />}
        <form
          action="
        "
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="enter post title"
            className="my-5 text-center"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Enter post content"
            name=""
            id=""
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
          <p className="text-green-600">post added {post?.title}</p>
        )}
        {isError && <h1 className="text-red-600">there was error</h1>}
      </div>
    </div>
  );
}
