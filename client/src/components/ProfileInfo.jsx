import { Link } from "react-router-dom";
import { Post } from "./Post.jsx";
import { useContextConsumer } from "../utils/contextConsumer.js";

export const ProfileInfo = () => {
  const { info, setPopups } = useContextConsumer();

  if (!Object.keys(info).length > 0) {
    return <h1>Failed</h1>;
  }

  const ALL_POSTS = info.posts.map((post) => (
    <Post key={post._id} post={post} />
  ));

  return (
    <>
      <section className="w-full px-10 md:px-0 md:w-[87%] mx-auto mt-10 flex flex-col gdm:flex-row items-center justify-between gap-10 md:mt-10 lg:flex-row lg:gap-16 lg:w-[85%]">
        <div className="rounded-full flex items-center justify-center w-[140px] h-[140px] md:w-[230px] md:h-[230px]">
          <img
            src={info.profileImage}
            alt="Profile Picture"
            className="w-full h-full lg:max-h-[75%] rounded-full object-cover xl:max-h-[84%]"
          />
        </div>
        <div className="w-[90%]">
          <div className="md:flex md:items-center md:justify-between">
            <p className="text-2xl mb-4 text-center md:text-left md:mb-0 md:mr-4 md:text-[1.4rem]">
              {info.username}
            </p>
            <div className="grid text-[.9rem] cs:grid-cols-2 md:flex md:items-center gap-2">
              <Link
                to="/dashboard/edit"
                className="bg-[#ffffff24] hover:bg-[#ffffff15] px-5 py-1.5 rounded font-medium text-center"
              >
                Edit Profile
              </Link>
              <button
                onClick={() => setPopups((prev) => ({ ...prev, logout: true }))}
                className="bg-red-500 hover:bg-red-600 px-5 py-1.5 rounded font-medium"
              >
                Logout
              </button>
            </div>
          </div>
          <div className="text-[.9rem] md:text-[1rem] grid grid-cols-3 place-items-center md:flex md:items-center gap-10 mt-6">
            <div className="flex items-center gap-2">
              <span className="font-medium">Posts</span>
              {info.posts.length}
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium">followers</span>
              {info.followers.length}
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium">following</span>
              {info.following.length}
            </div>
          </div>
          <div className="bottom mt-6 space-y-3">
            <span className="font-medium">bio</span>
            <article className="text-[.8rem] md:text-[.89rem]">
              {info.bio}
            </article>
          </div>
        </div>
      </section>
      <ul className="w-full mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto lg:w-[90%] place-items-center gap-11 ">
        {ALL_POSTS}
      </ul>
    </>
  );
};
