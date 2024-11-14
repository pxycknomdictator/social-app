import React from "react";

export const Post = ({ post }) => {
  return (
    <li>
      <div>
        <img src={post.postImage} alt={post.title} />
      </div>
      <div className="py-4 space-y-4">
        <h3 className="text-xl font-medium">{post.title}</h3>
        <article className="text-[.9rem]">
          {post.content.length > 80 ? `${post.content.slice(0, 80)}...` : null}
        </article>
      </div>
      <div className="text-right">
        <button className="hover:bg-[#ffffffec] bg-[#ffffff] py-1.5 px-5 font-semibold text-black inline-block rounded-sm w-full md:w-auto">
          view
        </button>
      </div>
    </li>
  );
};
