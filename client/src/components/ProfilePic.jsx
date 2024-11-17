export const ProfilePic = ({ info }) => {
  return (
    <main className="text-xl mt-5 flex items-center">
      <section className="flex items-center gap-3">
        <div className="w-[50px] h-[50px] rounded-full overflow-hidden flex items-center justify-center">
          <img
            src={info.profileImage}
            className="object-cover w-full h-full"
            alt="Profile"
          />
        </div>
        <div className="grid -space-y-2.5">
          <span className="text-[1rem]">{info.username}</span>
          <span className="text-[.9rem]">user account</span>
        </div>
      </section>
    </main>
  );
};
