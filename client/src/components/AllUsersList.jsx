import { useLocation, useNavigate } from "react-router-dom";
import { handleGetSpecificUserInfo } from "../utils/axios.js";
import { useContextConsumer } from "../utils/contextConsumer.js";

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
  const { setInfo } = useContextConsumer();
  const navigate = useNavigate();

  const getId = async (id) => {
    const response = await handleGetSpecificUserInfo("/user", id);
    setInfo(response.data.data.userInfo);
    navigate(`/dashboard/${response.data.data.userInfo.username}`, {
      state: response.data,
    });
  };

  return (
    <li
      onClick={() => getId(user._id)}
      className="flex items-center px-4 py-1.5 rounded-md w-full justify-between mt-5 hover:bg-[#ffffff17] cursor-pointer"
    >
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
        view
      </span>
    </li>
  );
};
