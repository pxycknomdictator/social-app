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
        className="w-full lg:w-[70%] flex items-center justify-center min-h-screen"
        id="allPosts"
      >
        <ul id="postList" className="w-full lg:w-[70%] mt-6 space-y-3 mx-auto">
          {posts?.map((post) => (
            <RandomPost key={post._id} post={post} />
          ))}
        </ul>
      </section>
      <section className="w-[30%] hidden lg:block" id="suggestions">
        suggestions
      </section>
    </main>
  );
};
