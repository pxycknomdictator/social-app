import { useLocation } from "react-router-dom";

export const AllUsersList = () => {
  const { users } = useLocation().state;

  return (
    <section className="min-h-screen pt-14">
      <ul className="w-full md:w-[80%] lg:w-[70%] xl:w-1/2 mx-auto px-10 md:px-0">
        <h2 className="font-medium text-xl">Suggested</h2>
        {users && users?.map((user) => <UserList key={user._id} user={user} />)}
      </ul>
    </section>
  );
};

const UserList = ({ user }) => {
  return (
    <li className="flex items-center w-full justify-between mt-5">
      <div className="flex items-center gap-4">
        <div className="w-[30px] h-[30px] rounded-full overflow-hidden flex items-center justify-center">
          <img
            src={user.profileImage}
            className="object-cover w-full h-full"
            alt="Profile"
          />
        </div>
        <div className="grid -space-y-1">
          <span className="text-[.90rem]">{user.username}</span>
          <span className="text-[.90rem]">suggested for you</span>
        </div>
      </div>
      <span className="text-[.90rem] bg-blue-500 text-white px-5 py-1 rounded-[5px] font-medium cursor-pointer">
        Follow
      </span>
    </li>
  );
};
