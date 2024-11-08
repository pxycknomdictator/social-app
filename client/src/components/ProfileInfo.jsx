import React from "react";
import avatar from "/user.jpg";

export const ProfileInfo = () => {
  return (
    <section className="w-full px-10 md:px-0 md:w-[60%] mx-auto mt-10 md:mt-4 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
      <div className="rounded-full flex items-center size-[140px] md:size-[260px]">
        <img src={avatar} alt="logo" className="w-full rounded-full" />
      </div>
      <div>
        <div className="top">
          <p className="text-2xl mb-4 text-center md:text-left md:text-[1.5rem]">
            Noman
          </p>
          <div className="grid grid-cols-2 gap-2">
            <button className="bg-[#ffffff24] hover:bg-[#ffffff15] px-5 py-1.5 rounded font-medium">
              Edit Profile
            </button>
            <button className="bg-red-500 hover:bg-red-600 px-5 py-1.5 rounded font-medium">
              Delete account!
            </button>
          </div>
        </div>
        <div className="middle grid grid-cols-3 place-items-center md:flex md:items-center gap-10 mt-6">
          <div className="flex items-center gap-2">
            <span className="font-medium">69</span>
            posts
          </div>
          <div className="flex items-center gap-2">
            <span className="font-medium">69</span>
            followers
          </div>
          <div className="flex items-center gap-2">
            <span className="font-medium">69</span>
            following
          </div>
        </div>
        <div className="bottom mt-5 space-y-1">
          <span className="font-medium">Noman</span>
          <article>
            Full-Stack Developer 🧰 | ReactJS ⚛️, Tailwind CSS, Redux Toolkit |
            Node.js & Express.js | MongoDB & Docker 🐋 | Linux User 🐧
          </article>
        </div>
      </div>
    </section>
  );
};
