import React from "react";
import avatar from "/user.jpg";

export const ProfileInfo = () => {
  return (
    <section className="w-full px-10 md:px-0 md:w-[80%] mx-auto mt-10 flex flex-col gdm:flex-row items-center justify-between gap-10 md:mt-10 lg:flex-row lg:gap-16 lg:w-[80%]">
      <div className="rounded-full flex items-center size-[140px] md:size-[230px]">
        <img src={avatar} alt="logo" className="w-full rounded-full" />
      </div>
      <div>
        <div className="md:flex md:items-center md:justify-between">
          <p className="text-2xl mb-4 text-center md:text-left md:mb-0 md:mr-4 md:text-[1.4rem]">
            Noman
          </p>
          <div className="grid cs:grid-cols-2 md:text-[1rem] md:flex md:items-center gap-2">
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
        <div className="bottom mt-6 space-y-3">
          <span className="font-medium">Noman</span>
          <article className="text-[.9rem] md:text-[1rem]">
            Full-Stack Developer 🧰 | ReactJS ⚛️, Tailwind CSS, Redux Toolkit |
            Node.js & Express.js | MongoDB & Docker 🐋 | Linux User 🐧
          </article>
        </div>
      </div>
    </section>
  );
};
