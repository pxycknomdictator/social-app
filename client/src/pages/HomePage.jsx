import { useEffect, useState } from "react";
import { RandomPost } from "../components/RandomPost.jsx";
import { handleGetAllApplicationPosts } from "../utils/axios.js";

export const HomePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await handleGetAllApplicationPosts("/posts");
      setPosts(response.data.data);
    })();
  }, []);
  return (
    <main className="flex">
      <section
        className="w-full relative lg:w-[70%] flex items-center justify-center min-h-screen"
        id="allPosts"
      >
        <ul id="postList" className="w-full lg:w-[70%] mt-6 space-y-6 mx-auto">
          {posts.length > 0 ? (
            posts?.map((post) => <RandomPost key={post._id} post={post} />)
          ) : (
            <h1 className="text-center text-2xl top-6 translate-x-1/2 absolute">
              No posts are available!
            </h1>
          )}
        </ul>
      </section>
      <section className="w-[30%] hidden lg:block" id="suggestions">
        suggestions
      </section>
    </main>
  );
};
