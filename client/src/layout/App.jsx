import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import { Prompt } from "../components/Prompt";
import { DeletePrompt } from "../components/DeletePrompt";
import { useContextConsumer } from "../utils/contextConsumer";

export const App = () => {
  const { popups, handleLogoutUser, setPopups, handleDeleteUserAccount } =
    useContextConsumer();
  return (
    <>
      <main className="flex">
        <aside className="custom_border w-[90px] px-4 md:w-[280px] min-h-screen py-8 sm:px-2">
          <Sidebar />
        </aside>
        <section className="overflow-y-auto max-h-screen w-full">
          {popups.logout && (
            <Prompt
              text="Are you sure you want to log out?"
              message="You will need to log in again to access your account."
              option="logout"
              action={() => {
                setPopups((prev) => ({ ...prev, logout: true }));
                handleLogoutUser();
              }}
            />
          )}
          {popups.delete && (
            <DeletePrompt
              text="Are you sure you want to delete your account?"
              message="Think again bro. This action is permanent and cannot be undone. Once you delete your account, your photos, Posts, comments, and followers will be permanently removed."
              option="Delete"
              action={() => {
                setPopups((prev) => ({ ...prev, delete: true }));
                handleDeleteUserAccount();
              }}
            />
          )}
          <Outlet />
        </section>
      </main>
    </>
  );
};
