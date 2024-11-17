export const ProfilePic = ({ info }) => {
  return (
    <main className="text-xl mt-5 flex items-center justify-end">
      <div className="w-[50px] h-[50px] rounded-full overflow-hidden flex items-center justify-center">
        <img
          src={info.profileImage}
          className="object-cover w-full h-full"
          alt="Profile"
        />
      </div>
    </main>
  );
};
