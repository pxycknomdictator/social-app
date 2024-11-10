// import { useState } from "react";
// import { Loader } from "../components/Loader";
// import { handleMakeAPost } from "../utils/axios";
// import { useContextConsumer } from "../utils/contextConsumer.js";
// import { useForm } from "react-hook-form";

// export const CreatePostPage = () => {
//   const { formState, setFormState } = useContextConsumer();
//   const [image, setImage] = useState(null);
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const handleImageChange = (e) => {
//     setImage(e.target.files[0]);
//   };

//   const onSubmit = async (data) => {
//     try {
//       const formData = new FormData();
//       formData.append("title", data.title);
//       formData.append("description", data.description);
//       if (image) {
//         formData.append("image", image);
//       }
//       if (!image) {
//         setImage(9);
//         return;
//       }
//       setFormState((prev) => ({ ...prev, loading: true }));
//       const response = await handleMakeAPost("/create", formData);
//       setTimeout(() => {
//         setFormState((prev) => ({ ...prev, loading: false }));
//       }, 500);
//       console.log(response);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <section className="w-full h-full grid place-items-center">
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="w-full lg:w-[90%] mx-auto space-y-7 sm:space-y-5 rounded-lg sm:border-[#27272a] sm:border-[1px] py-5 px-5 lg:py-6 lg:px-8"
//       >
//         <h1 className="font-medium text-[1.2rem] md:text-[1.5rem]">
//           Create post
//         </h1>
//         <div className="grid grid-cols-1 gap-1.5">
//           <label className="text-[.9rem]" htmlFor="title">
//             Title
//           </label>
//           <input
//             {...register("title", {
//               required: "title is required",
//               minLength: {
//                 value: 3,
//                 message: "title must be at least 3 characters",
//               },
//             })}
//             className="w-full transition-all bg-transparent border-[#27272a] rounded-sm outline-none border focus:border-blue-500 py-2 pl-3 text-[.8rem] cs:text-[1.1rem]"
//             type="text"
//             id="title"
//           />
//           {errors.title && (
//             <span className="text-red-500 text-[.9rem] font-medium">
//               {errors.title.message}
//             </span>
//           )}
//         </div>
//         <div className="grid grid-cols-1 gap-1.5">
//           <label className="text-[.9rem]" htmlFor="description">
//             Description:
//           </label>
//           <textarea
//             {...register("description", {
//               required: "description is required",
//               minLength: {
//                 value: 20,
//                 message: "description must be at least 20 characters",
//               },
//               maxLength: {
//                 value: 300,
//                 message: "description no more contain 300 characters",
//               },
//             })}
//             className="w-full transition-all bg-transparent outline-none border border-[#27272a] focus:border-blue-500 rounded-sm py-2 pl-3 text-[.8rem] cs:text-[1.1rem] resize-none"
//             type="description"
//             id="description"
//             rows={10}
//           />
//           {errors.description && (
//             <span className="text-red-500 text-[.9rem] font-medium ">
//               {errors.description.message}
//             </span>
//           )}
//         </div>
//         <div className="grid gap-1">
//           <label
//             htmlFor="image"
//             className="w-full text-center block lg:w-fit cursor-pointer px-4 py-2 text-black bg-white hover:bg-[#ffffffed] rounded-sm outline-none"
//           >
//             Choose an image
//           </label>
//           <div>
//             <input
//               name="image"
//               className="hidden"
//               type="file"
//               id="image"
//               accept="image/*"
//               onChange={handleImageChange}
//             />
//             {image ? (
//               <span className="text-red-500 text-[.9rem] block font-medium">
//                 image is required
//               </span>
//             ) : null}
//           </div>
//         </div>
//         {!formState.loading ? (
//           <button
//             disabled={formState.loading}
//             type="submit"
//             className="w-full bg-white hover:bg-[#ffffffed] font-medium text-black rounded-sm text-center py-2 text-[.8rem] cs:text-[1rem]"
//           >
//             Create post
//           </button>
//         ) : (
//           <div className="w-full hover:bg-white bg-[#ffffff] font-medium text-black rounded-sm text-center py-2.5 text-[.8rem] cs:text-[.90rem] flex items-center justify-center gap-3">
//             <Loader />
//           </div>
//         )}
//       </form>
//     </section>
//   );
// };

import { useState } from "react";
import { Loader } from "../components/Loader";
import { handleMakeAPost } from "../utils/axios";
import { useContextConsumer } from "../utils/contextConsumer.js";
import { useForm } from "react-hook-form";

export const CreatePostPage = () => {
  const { formState, setFormState } = useContextConsumer();
  const [image, setImage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file || null);
  };

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);

      if (image) {
        formData.append("image", image);
      }
      setFormState((prev) => ({ ...prev, loading: true }));
      reset();
      const response = await handleMakeAPost("/create", formData);
      setTimeout(() => {
        setFormState((prev) => ({ ...prev, loading: false }));
      }, 500);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="w-full h-full grid place-items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full lg:w-[90%] mx-auto space-y-7 sm:space-y-5 rounded-lg sm:border-[#27272a] sm:border-[1px] py-5 px-5 lg:py-6 lg:px-8"
      >
        <h1 className="font-medium text-[1.2rem] md:text-[1.5rem]">
          Create post
        </h1>
        <div className="grid grid-cols-1 gap-1.5">
          <label className="text-[.9rem]" htmlFor="title">
            Title
          </label>
          <input
            {...register("title", {
              required: "title is required",
              minLength: {
                value: 3,
                message: "title must be at least 3 characters",
              },
            })}
            className="w-full transition-all bg-transparent border-[#27272a] rounded-sm outline-none border focus:border-blue-500 py-2 pl-3 text-[.8rem] cs:text-[1.1rem]"
            type="text"
            id="title"
          />
          {errors.title && (
            <span className="text-red-500 text-[.9rem] font-medium">
              {errors.title.message}
            </span>
          )}
        </div>
        <div className="grid grid-cols-1 gap-1.5">
          <label className="text-[.9rem]" htmlFor="description">
            Description:
          </label>
          <textarea
            {...register("description", {
              required: "description is required",
              minLength: {
                value: 20,
                message: "description must be at least 20 characters",
              },
              maxLength: {
                value: 300,
                message: "description no more contain 300 characters",
              },
            })}
            className="w-full transition-all bg-transparent outline-none border border-[#27272a] focus:border-blue-500 rounded-sm py-2 pl-3 text-[.8rem] cs:text-[1.1rem] resize-none"
            type="description"
            id="description"
            rows={10}
          />
          {errors.description && (
            <span className="text-red-500 text-[.9rem] font-medium ">
              {errors.description.message}
            </span>
          )}
        </div>
        <div className="flex items-center justify-end">
          <label
            htmlFor="image"
            className="w-full text-center block lg:w-fit cursor-pointer px-4 py-2 border font-medium hover:bg-[white] hover:text-black border-[#27272a] rounded-md outline-none transition-all"
          >
            Choose an image
          </label>
          <div>
            <input
              name="image"
              className="hidden"
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
        </div>
        {!formState.loading ? (
          <button
            disabled={formState.loading}
            type="submit"
            className="w-full bg-white hover:bg-[#ffffffed] font-medium text-black rounded-sm text-center py-2 text-[.8rem] cs:text-[1rem]"
          >
            Create post
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
