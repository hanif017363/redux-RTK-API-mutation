import { useState } from "react";
import Posts from "./components/Posts";
import Post from "./components/Post";

export default function App() {
  const [showPost, setShowPost] = useState(true);

  return (
    <div className="w-screen h-full min-h-screen p-10 bg-gray-100 text-slate-700">
      <h1>RTK Querry</h1>

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
      </div>
    </div>
  );
}
