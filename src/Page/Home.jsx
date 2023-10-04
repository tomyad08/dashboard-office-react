import React from "react";
import SideBar from "../Components/Dashboard/SideBar";
import NavBar from "../Components/Dashboard/NavBar";
import Department from "../Components/Dashboard/Department";
import Tabel from "../Components/Dashboard/Tabel";
import Chat from "../Components/Dashboard/chat";

const Home = () => {
  return (
    <div className="flex h-screen overflow-y-hidden">
      <SideBar />
      <div className="w-full m-2">
        <NavBar />
        <Department />
        <Tabel />
        <Chat />
      </div>
    </div>
  );
};
export default Home;
