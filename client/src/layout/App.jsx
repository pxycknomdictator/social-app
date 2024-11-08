import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";

export const App = () => {
  return (
    <>
      <main className="flex">
        <aside className="custom_border w-[90px] px-4 md:w-[280px] min-h-screen py-8 sm:px-2">
          <Sidebar />
        </aside>
        <section className="w-full min-h-screen">
          <Outlet />
        </section>
      </main>
    </>
  );
};
