import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";

export const App = () => {
  return (
    <>
      <main className="flex">
        <aside className="custom_border w-[90px] px-4 sm:w-[200px] md:w-[250px] min-h-screen py-8 sm:px-5">
          <Sidebar />
        </aside>
        <section>
          <Header />
          <Outlet />
        </section>
      </main>
    </>
  );
};
