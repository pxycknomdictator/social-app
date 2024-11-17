export const Suggestions = ({ user }) => {
  return (
    <li className="text-xl mt-5 flex items-center justify-end">
      <section className="flex items-center w-full justify-between">
        <div className="flex items-center gap-4">
          <div className="w-[30px] h-[30px] rounded-full overflow-hidden flex items-center justify-center">
            <img
              src={user.profileImage}
              className="object-cover w-full h-full"
              alt="Profile"
            />
          </div>
          <div className="grid -space-y-2">
            <span className="text-[.90rem]">{user.username}</span>
            <span className="text-[.7rem]">Suggested for you</span>
          </div>
        </div>
        <span className="text-[.90rem] text-blue-500 font-medium cursor-pointer">
          Follow
        </span>
      </section>
    </li>
  );
};
