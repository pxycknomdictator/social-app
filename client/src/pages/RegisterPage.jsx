import React from "react";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

export const RegisterPage = () => {
  return (
    <section className="w-screen h-screen grid place-items-center">
      <form className="w-full sm:w-[60%] lg:w-1/2 xl:w-[35%] space-y-7 sm:space-y-5 rounded-lg  sm:border-[#27272a] sm:border-[1px] py-6 px-8">
        <h1 className="font-medium text-[1.2rem] md:text-[1.5rem]">
          Create an account
        </h1>
        <div className="grid grid-cols-1 gap-1.5">
          <label className="text-[.9rem]" htmlFor="username">
            username:
          </label>
          <input
            className="w-full transition-all bg-transparent border-[#27272a] rounded-sm outline-none border focus:border-blue-500 py-2 pl-3 text-[.8rem] cs:text-[.90rem]"
            type="text"
            name="username"
            id="username"
          />
          {false && <span className="text-red-500">username is required</span>}
        </div>
        <div className="grid grid-cols-1 gap-1.5">
          <label className="text-[.9rem]" htmlFor="email">
            email:
          </label>
          <input
            className="w-full transition-all bg-transparent outline-none border border-[#27272a] focus:border-blue-500 rounded-sm py-2 pl-3 text-[.8rem] cs:text-[.90rem]"
            type="email"
            name="email"
            id="email"
          />
          {false && <span className="text-red-500">email is required</span>}
        </div>
        <div className="grid grid-cols-1 gap-1.5">
          <label className="text-[.9rem]" htmlFor="password">
            password:
          </label>
          <div className="w-full transition-all border border-[#27272a] bg-transparent rounded-sm outline-none flex focus-within:border-blue-500">
            <input
              className="py-2 w-full text-[.8rem] cs:text-[.90rem] transition-all pl-3 border-none outline-none bg-transparent"
              type="password"
              name="password"
              id="password"
            />
            <span className="flex items-center justify-center px-3">
              <FaRegEye className="cursor-pointer" />
            </span>
          </div>

          {false && <span className="text-red-500">password is required</span>}
        </div>
        <button className="w-full hover:bg-white bg-[#ffffffe4] font-medium text-black rounded-sm text-center py-2 text-[.8rem] cs:text-[.90rem]">
          Create account
        </button>
        <span className="block text-center text-[.8rem] cs:text-[.90rem]">
          Already have an account?
          <Link to="/" className="ml-1 text-blue-500 font-medium">
            login
          </Link>
        </span>
      </form>
    </section>
  );
};
