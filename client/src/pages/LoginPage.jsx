import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className="w-screen h-screen grid place-items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full sm:w-[60%] lg:w-1/2 xl:w-[35%] space-y-7 sm:space-y-5 rounded-lg  sm:border-[#27272a] sm:border-[1px] py-6 px-8"
      >
        <h1 className="font-medium text-[1.2rem] md:text-[1.5rem]">
          Login an account
        </h1>
        <div className="grid grid-cols-1 gap-1.5">
          <label className="text-[.9rem]" htmlFor="email">
            Email:
          </label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email format",
              },
            })}
            className="w-full transition-all bg-transparent outline-none border border-[#27272a] focus:border-blue-500 rounded-sm py-2 pl-3 text-[.8rem] cs:text-[.90rem]"
            type="email"
            id="email"
          />
          {errors.email && (
            <span className="text-red-500 text-xs font-medium ">
              {errors.email.message}
            </span>
          )}
        </div>
        <div className="grid grid-cols-1 gap-1.5">
          <label className="text-[.9rem]" htmlFor="password">
            Password:
          </label>
          <div className="w-full transition-all border border-[#27272a] bg-transparent rounded-sm outline-none flex focus-within:border-blue-500">
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className="py-2 w-full text-[.8rem] cs:text-[.90rem] transition-all pl-3 border-none outline-none bg-transparent"
              type={showPassword ? "text" : "password"}
              id="password"
            />
            <span
              className="flex items-center justify-center px-3 cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? (
                <FaRegEye className="text-[1.2rem]" />
              ) : (
                <FaRegEyeSlash className="text-[1.2rem]" />
              )}
            </span>
          </div>
          {errors.password && (
            <span className="text-red-500 text-xs font-medium ">
              {errors.password.message}
            </span>
          )}
        </div>
        <button className="w-full hover:bg-white bg-[#ffffffe4] font-medium text-black rounded-sm text-center py-2 text-[.8rem] cs:text-[.90rem]">
          Login account
        </button>
        <span className="block text-center text-[.8rem] cs:text-[.90rem]">
          Don't have an account?
          <Link to="/register" className="ml-1 text-blue-500 font-medium">
            register
          </Link>
        </span>
      </form>
    </section>
  );
};
