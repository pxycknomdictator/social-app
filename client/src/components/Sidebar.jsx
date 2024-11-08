import React from "react";
import { FaHome } from "react-icons/fa";
import { MdAddToPhotos } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";

export const Sidebar = () => {
  return (
    <div className="h-full relative">
      <h1 className="pl-3 cursor-pointer">
        <span className="hidden font-medium md:block md:text-2xl">
          Fake Media
        </span>
        <span className="md:hidden text-xl sm:text-[1.4rem] font-medium">
          FM
        </span>
      </h1>
      <ul className="mt-7 space-y-2 font-normal transition-all sm:text-[.9rem]">
        <li className="sidebar-links">
          <FaHome className="text-2xl sm:text-[1.3rem] hover:scale-110" />
          <span className="hidden md:block">Home</span>
        </li>
        <li className="sidebar-links">
          <MdAddToPhotos className="text-2xl sm:text-[1.3rem] hover:scale-110" />
          <span className="hidden md:block">Create Post</span>
        </li>
        <li className="sidebar-links">
          <FaEye className="text-2xl sm:text-[1.3rem] hover:scale-110" />
          <span className="hidden md:block">Posts</span>
        </li>
        <li className="sidebar-links flex">
          <FaUser className="text-2xl sm:text-[1.3rem] hover:scale-110" />
          <span className="hidden md:block">Profile</span>
        </li>
        <li className="sidebar-links">
          <FaUserFriends
            size={"22px"}
            className="text-2xl sm:text-[1.3rem] hover:scale-110"
          />
          <span className="hidden md:block">Friends</span>
        </li>
      </ul>
      <div className="absolute bottom-0 w-full">
        <li className="sidebar-links">
          <IoSettingsSharp className="text-2xl sm:text-[1.3rem] hover:scale-110" />
          <span className="hidden md:block">Settings</span>
        </li>
      </div>
    </div>
  );
};
