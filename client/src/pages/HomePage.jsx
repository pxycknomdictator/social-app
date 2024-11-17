import { useEffect } from "react";
import { RandomPost } from "../components/RandomPost.jsx";
import { handleGetAllApplicationPosts } from "../utils/axios.js";
import { ProfilePic } from "../components/ProfilePic.jsx";
import { useContextConsumer } from "../utils/contextConsumer.js";
import { Suggestions } from "../components/Suggestions.jsx";
import { Link } from "react-router-dom";

export const HomePage = () => {
  const { info, posts, setPosts } = useContextConsumer();

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
      <section className="w-[30%] hidden px-10 lg:block" id="suggestions">
        <ProfilePic info={info} />
        <ul className="mt-11">
          <div className="flex items-center justify-between">
            <span>Suggested for you</span>
            <Link to="/dashboard/explore/people" className="text-gray-400">
              see all
            </Link>
          </div>
          {posts.users?.slice(0, 4).map((user) => (
            <Suggestions key={user._id} user={user} />
          ))}
        </ul>
      </section>
    </main>
  );
};
