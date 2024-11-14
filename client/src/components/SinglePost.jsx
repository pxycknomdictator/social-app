import { useState } from "react";
import { handleAddCommentInDB } from "../utils/axios.js";
import { Comments } from "./Comments";
import { useLocation } from "react-router-dom";

export const SinglePost = () => {
  const globalState = useLocation();
  const { state } = globalState;
  const [comment, setComment] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (comment.trim() === "") return null;
    setComment("");
    try {
      await handleAddCommentInDB("/posts/comment", {
        comment,
        _id: state.post._id,
        author: state.post.author,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="w-[80%] mx-auto flex items-center justify-center pb-5">
      <section className="w-[500px] mt-8">
        <div className="w-full flex items-center justify-start">
          <img src={state.post.postImage} alt={state.post.title} />
        </div>
        <div className="py-4 mt-4 space-y-4">
          <h2 className="sm:text-xl font-medium">{state.post.title}</h2>
          <article className="text-[.75rem] sm:text-[.9rem]">
            {state.post.content}
          </article>
        </div>
        <span className="inline-block text-right w-full mb-3">
          Comments {state.post.comments.length}
        </span>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row space-y-5"
        >
          <input
            onChange={(event) => setComment(event.target.value)}
            value={comment}
            className="w-full transition-all bg-transparent outline-none border border-[#27272a] focus:border-blue-500 rounded-sm py-2 pl-3 text-[.8rem] cs:text-[.90rem]"
            type="text"
            name="comment"
            id="comment"
          />
          <button
            type="submit"
            className="bg-white hover:bg-[#ffffffed] font-medium text-black rounded-sm text-center px-3 py-2 text-[.8rem] cs:text-[.90rem] w-full md:w-auto"
          >
            Submit
          </button>
        </form>
        {state.post.comments?.map((comment) => (
          <Comments key={comment._id} comment={comment} />
        ))}
      </section>
    </main>
  );
};
