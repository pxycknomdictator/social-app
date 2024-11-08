import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { Loader } from "../components/Loader";
import { handleRegisterUser } from "../utils/axios";

export const RegisterPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const res = await handleRegisterUser("/register", data);
      if (!res.success) {
        return alert("Failed to registered user");
      }
      setTimeout(() => {
        setLoading(false);
        return navigate("/");
      }, 500);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="w-screen h-screen grid place-items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full sm:w-[60%] lg:w-1/2 xl:w-[35%] space-y-7 sm:space-y-5 rounded-lg sm:border-[#27272a] sm:border-[1px] py-6 px-8"
      >
        <h1 className="font-medium text-[1.2rem] md:text-[1.5rem]">
          Create an account
        </h1>
        <div className="grid grid-cols-1 gap-1.5">
          <label className="text-[.9rem]" htmlFor="username">
            Username:
          </label>
          <input
            {...register("username", {
              required: "Username is required",
              minLength: {
                value: 3,
                message: "username must be at least 3 characters",
              },
            })}
            className="w-full transition-all bg-transparent border-[#27272a] rounded-sm outline-none border focus:border-blue-500 py-2 pl-3 text-[.8rem] cs:text-[.90rem]"
            type="text"
            id="username"
          />
          {errors.username && (
            <span className="text-red-500 text-xs font-medium">
              {errors.username.message}
            </span>
          )}
        </div>
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
        {!loading ? (
          <button
            disabled={loading}
            type="submit"
            className="w-full bg-white hover:bg-[#ffffffed] font-medium text-black rounded-sm text-center py-2 text-[.8rem] cs:text-[.90rem]"
          >
            Create account
          </button>
        ) : (
          <div className="w-full hover:bg-white bg-[#ffffff] font-medium text-black rounded-sm text-center py-2.5 text-[.8rem] cs:text-[.90rem] flex items-center justify-center gap-3">
            <Loader />
          </div>
        )}
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
