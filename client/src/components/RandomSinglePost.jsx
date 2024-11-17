import { useState } from "react";
import { useLocation } from "react-router-dom";
import { handleAddCommentInDB } from "../utils/axios.js";
import { Comments } from "./Comments";
import { useContextConsumer } from "../utils/contextConsumer.js";

export const RandomSinglePost = () => {
  const globalState = useLocation();
  const { info } = useContextConsumer();
  const { post } = globalState.state;
  const [comment, setComment] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (comment.trim() === "") return null;
    setComment("");
    try {
      await handleAddCommentInDB("/posts/comment", {
        comment,
        _id: post._id,
        author: info._id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="w-full md:w-[90%] mx-auto flex items-center justify-center pb-5">
      <section className="w-[90%] md:w-[70%] lg:w-[60%] mt-5">
        <div className="w-full flex items-center justify-center">
          <img
            className="w-[70%] rounded-lg"
            src={post.postImage}
            alt={post.title}
          />
        </div>
        <div className="py-4 mt-4 space-y-4">
          <h2 className="sm:text-xl font-medium">{post.title}</h2>
          <article className="text-[.75rem] sm:text-[.9rem]">
            {post.content}
          </article>
        </div>
        <span className="inline-block text-right w-full mb-3">
          Comments {post.comments.length}
        </span>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row space-y-5 md:space-y-0 mb-4"
        >
          <input
            autoComplete="off"
            onChange={(event) => setComment(event.target.value)}
            value={comment}
            className="w-full transition-all py-2 bg-transparent outline-none border border-[#27272a] focus:border-blue-500 rounded-sm pl-3 text-[.8rem] cs:text-[.90rem]"
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
        {post.comments?.map((comment) => (
          <Comments key={comment._id} comment={comment} />
        ))}
      </section>
    </main>
  );
};
