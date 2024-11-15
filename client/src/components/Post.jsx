import { NavLink } from "react-router-dom";

export const Post = ({ post }) => {
  return (
    <li className="w-[80%] mx-auto">
      <div className="flex items-center justify-center lg:justify-start mb-3">
        <img
          className="object-cover w-full aspect-square rounded-lg"
          src={post.postImage}
          alt={post.title}
        />
      </div>
      <div className="py-4 space-y-4 flex-1">
        <h3 className="text-xl font-medium">{post.title}</h3>
        {/* <article className="text-[.9rem]">
          {post.content.length > 80
            ? `${post.content.slice(0, 80)}...`
            : post.content}
        </article> */}
        <div className="text-center lg:text-right py-2">
          <NavLink
            to={`/dashboard/posts/${post._id}`}
            state={{ post, comments: post.comments }}
            className="w-full hover:bg-[#ffffffec] bg-[#ffffff] py-1.5 px-5 font-semibold text-black inline-block text-center rounded-sm"
          >
            View
          </NavLink>
        </div>
      </div>
    </li>
  );
};
