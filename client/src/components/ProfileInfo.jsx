import { Link } from "react-router-dom";
import { useContextConsumer } from "../utils/contextConsumer.js";

export const ProfileInfo = () => {
  const { handleLogoutUser, info } = useContextConsumer();

  if (!Object.keys(info).length > 0) {
    return <h1>Failed</h1>;
  }

  return (
    <section className="w-full px-10 md:px-0 md:w-[80%] mx-auto mt-10 flex flex-col gdm:flex-row items-center justify-between gap-10 md:mt-10 lg:flex-row lg:gap-16 lg:w-[80%]">
      <div className="rounded-full flex items-center size-[140px] md:size-[230px]">
        <img
          src={info.profileImage}
          alt="logo"
          className="w-full rounded-full"
        />
      </div>
      <div className="w-[90%]">
        <div className="md:flex md:items-center md:justify-between">
          <p className="text-2xl mb-4 text-center md:text-left md:mb-0 md:mr-4 md:text-[1.4rem]">
            {info.username}
          </p>
          <div className="grid cs:grid-cols-2 md:text-[1rem] md:flex md:items-center gap-2">
            <Link
              to="/dashboard/edit"
              className="bg-[#ffffff24] hover:bg-[#ffffff15] px-5 py-1.5 rounded font-medium"
            >
              Edit Profile
            </Link>
            <button
              onClick={handleLogoutUser}
              className="bg-red-500 hover:bg-red-600 px-5 py-1.5 rounded font-medium"
            >
              Logout
            </button>
          </div>
        </div>
        <div className="middle grid grid-cols-3 place-items-center md:flex md:items-center gap-10 mt-6">
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
          <article className="text-[.9rem] md:text-[1rem]">{info.bio}</article>
        </div>
      </div>
    </section>
  );
};
