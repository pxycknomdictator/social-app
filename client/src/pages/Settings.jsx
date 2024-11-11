import { useState } from "react";
import { Loader } from "../components/Loader";
import { useContextConsumer } from "../utils/contextConsumer.js";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { handleUpdateProfile } from "../utils/axios.js";

export const Settings = () => {
  const { formState, setFormState, info, handleToggleEye } =
    useContextConsumer();

  const initialState = {
    username: "",
    email: "",
    password: "",
    bio: "",
    image: null,
  };

  const [form, setForm] = useState(initialState);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setForm((prev) => ({ ...prev, image: file }));
    }
  };

  const handleChangeInputs = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("username", form.username);
      formData.append("email", form.email);
      formData.append("password", form.password);
      formData.append("bio", form.bio);
      if (form.image) {
        formData.append("image", form.image);
      }
      setFormState({ ...formState, loading: true });
      const response = await handleUpdateProfile("/user/update", formData);
      setFormState({ ...formState, loading: false });
      console.log(response);
    } catch (error) {
      setFormState({ ...formState, loading: false });
      console.log(error);
    }
  };

  return (
    <section className="w-full h-full grid place-items-center">
      <form
        onSubmit={handleSubmit}
        className="w-full lg:w-[90%] mx-auto space-y-7 sm:space-y-5 rounded-lg sm:border-[#27272a] sm:border-[1px] py-5 px-5 lg:py-6 lg:px-8"
      >
        <h1 className="font-medium text-[1.4rem] md:text-[1.5rem]">
          Edit Profile
        </h1>
        <div className="flex items-center justify-end">
          <label
            htmlFor="image"
            className="w-full text-center block lg:w-fit cursor-pointer px-4 py-2 border font-medium hover:bg-[white] hover:text-black border-[#27272a] rounded-md outline-none transition-all"
          >
            Change Photo
          </label>
          <input
            name="image"
            className="hidden"
            type="file"
            id="image"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
        <div className="grid grid-cols-1 gap-1.5">
          <label className="text-[.9rem]" htmlFor="username">
            Username
          </label>
          <input
            name="username"
            type="text"
            id="username"
            value={form.username}
            onChange={handleChangeInputs}
            className="w-full transition-all bg-transparent border-[#27272a] rounded-sm outline-none border focus:border-blue-500 py-2 pl-3 text-[.8rem] cs:text-[1.1rem]"
          />
        </div>
        <div className="grid grid-cols-1 gap-1.5">
          <label className="text-[.9rem]" htmlFor="email">
            Email
          </label>
          <input
            name="email"
            type="email"
            id="email"
            value={form.email}
            onChange={handleChangeInputs}
            className="w-full transition-all bg-transparent border-[#27272a] rounded-sm outline-none border focus:border-blue-500 py-2 pl-3 text-[.8rem] cs:text-[1.1rem]"
          />
        </div>
        <div className="grid grid-cols-1 gap-1.5">
          <label className="text-[.9rem]" htmlFor="password">
            Password
          </label>
          <div className="w-full transition-all border border-[#27272a] bg-transparent rounded-sm outline-none flex focus-within:border-blue-500">
            <input
              name="password"
              type={formState.showPassword ? "text" : "password"}
              id="password"
              value={form.password}
              onChange={handleChangeInputs}
              className="py-2 w-full text-[.8rem] cs:text-[.90rem] transition-all pl-3 border-none outline-none bg-transparent"
            />
            <span
              className="flex items-center justify-center px-3 cursor-pointer"
              onClick={handleToggleEye}
              aria-label={
                formState.showPassword ? "Hide password" : "Show password"
              }
            >
              {formState.showPassword ? (
                <FaRegEye className="text-[1.2rem]" />
              ) : (
                <FaRegEyeSlash className="text-[1.2rem]" />
              )}
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-1.5">
          <label className="text-[.9rem]" htmlFor="bio">
            Bio
          </label>
          <textarea
            name="bio"
            id="bio"
            value={form.bio}
            onChange={handleChangeInputs}
            rows={7}
            className="w-full transition-all bg-transparent outline-none border border-[#27272a] focus:border-blue-500 rounded-sm py-2 pl-3 text-[.8rem] cs:text-[1.1rem] resize-none"
          />
        </div>
        {!formState.loading ? (
          <button
            type="submit"
            disabled={formState.loading}
            className="w-full bg-white hover:bg-[#ffffffed] font-medium text-black rounded-sm text-center py-2 text-[.8rem] cs:text-[1rem]"
          >
            Save Changes
          </button>
        ) : (
          <div className="w-full hover:bg-white bg-[#ffffff] font-medium text-black rounded-sm text-center py-2.5 text-[.8rem] cs:text-[.90rem] flex items-center justify-center gap-3">
            <Loader />
          </div>
        )}
      </form>
    </section>
  );
};
