import { useEffect, useState } from "react";
import { RandomPost } from "../components/RandomPost.jsx";
import { handleGetAllApplicationPosts } from "../utils/axios.js";
import { ProfilePic } from "../components/ProfilePic.jsx";
import { useContextConsumer } from "../utils/contextConsumer.js";
import { Suggestions } from "../components/Suggestions.jsx";

export const HomePage = () => {
  const [posts, setPosts] = useState({
    post: [],
    users: [],
  });

  const { info } = useContextConsumer();

  useEffect(() => {
    (async () => {
      const response = await handleGetAllApplicationPosts("/posts");
      setPosts((pre) => ({
        ...pre,
        post: response.data.data.posts,
        users: response.data.data.allUsers,
      }));
    })();
  }, []);

  return (
    <main className="flex">
      <section
        className="w-full relative lg:w-[70%] flex items-center justify-center min-h-screen"
        id="allPosts"
      >
        <ul id="postList" className="w-full lg:w-[70%] mt-6 space-y-6 mx-auto">
          {posts.post.length > 0 ? (
            posts.post?.map((post) => <RandomPost key={post._id} post={post} />)
          ) : (
            <h1 className="text-center text-2xl top-6 translate-x-1/2 absolute">
              No posts are available!
            </h1>
          )}
        </ul>
      </section>
      <section className="w-[30%] hidden px-8 lg:block" id="suggestions">
        <ProfilePic info={info} />
        <ul className="mt-36">
          <span>Suggestions</span>
          {posts.users?.map((user) => (
            <Suggestions key={user._id} user={user} />
          ))}
        </ul>
      </section>
    </main>
  );
};
