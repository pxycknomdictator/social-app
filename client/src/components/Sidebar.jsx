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
        <span className="hidden sm:text-2xl md:text-3xl sm:block">
          Fake Media
        </span>
        <span className="sm:hidden text-xl font-medium">FM</span>
      </h1>
      <ul className="text-[1.1rem] mt-7 space-y-2 font-normal transition-all">
        <li className="sidebar-links">
          <FaHome className="text-2xl sm:text-[1.3rem] hover:scale-110" />
          <span className="hidden sm:block">Home</span>
        </li>
        <li className="sidebar-links">
          <MdAddToPhotos className="text-2xl sm:text-[1.3rem] hover:scale-110" />
          <span className="hidden sm:block">Create Post</span>
        </li>
        <li className="sidebar-links">
          <FaEye className="text-2xl sm:text-[1.3rem] hover:scale-110" />
          <span className="hidden sm:block">Posts</span>
        </li>
        <li className="sidebar-links">
          <FaUser className="text-2xl sm:text-[1.3rem] hover:scale-110" />
          <span className="hidden sm:block">Profile</span>
        </li>
        <li className="sidebar-links">
          <FaUserFriends
            size={"22px"}
            className="text-2xl sm:text-[1.3rem] hover:scale-110"
          />
          <span className="hidden sm:block">Friends</span>
        </li>
      </ul>
      <div className="absolute bottom-0 w-full">
        <li className="sidebar-links">
          <IoSettingsSharp className="text-2xl sm:text-[1.3rem] hover:scale-110" />
          <span className="hidden sm:block">Settings</span>
        </li>
      </div>
    </div>
  );
};
