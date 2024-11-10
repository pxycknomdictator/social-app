import React, { useEffect, useState } from "react";
import { handleGetUserInformationFromDb } from "../utils/axios.js";
import { useContextConsumer } from "../utils/contextConsumer.js";
import avatar from "/user.jpg";

export const ProfileInfo = () => {
  const { handleLogoutUser } = useContextConsumer();
  const [info, setInfo] = useState({});

  useEffect(() => {
    (async () => {
      const response = await handleGetUserInformationFromDb("/user");
      setInfo(response);
    })();
  }, []);

  if (info && info.status !== 200) {
    return <h1 className="text-black">Can't Get you data from server</h1>;
  }

  const { allPosts, userInfo } = info.data.data;

  return (
    <section className="w-full px-10 md:px-0 md:w-[80%] mx-auto mt-10 flex flex-col gdm:flex-row items-center justify-between gap-10 md:mt-10 lg:flex-row lg:gap-16 lg:w-[80%]">
      <div className="rounded-full flex items-center size-[140px] md:size-[230px]">
        <img src={avatar} alt="logo" className="w-full rounded-full" />
      </div>
      <div className="w-[90%]">
        <div className="md:flex md:items-center md:justify-between">
          <p className="text-2xl mb-4 text-center md:text-left md:mb-0 md:mr-4 md:text-[1.4rem]">
            {userInfo.username}
          </p>
          <div className="grid cs:grid-cols-2 md:text-[1rem] md:flex md:items-center gap-2">
            <button className="bg-[#ffffff24] hover:bg-[#ffffff15] px-5 py-1.5 rounded font-medium">
              Edit Profile
            </button>
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
            <span className="font-medium">{allPosts.length}</span>
            posts
          </div>
          <div className="flex items-center gap-2">
            <span className="font-medium">{userInfo.followers.length}</span>
            followers
          </div>
          <div className="flex items-center gap-2">
            <span className="font-medium">{userInfo.following.length}</span>
            following
          </div>
        </div>
        <div className="bottom mt-6 space-y-3">
          <span className="font-medium">{userInfo.username.toLowerCase()}</span>
          <article className="text-[.9rem] md:text-[1rem]">
            {userInfo.bio}
          </article>
        </div>
      </div>
    </section>
  );
};
