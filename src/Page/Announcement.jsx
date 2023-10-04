import React from "react";
import SideBar from "../Components/Dashboard/SideBar";
import Announce from "../Components/Dashboard/Announcement";

const Announcement = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="w-full mx-2 h-screen overflow-y-scroll">
        <Announce />
      </div>
    </div>
  );
};
export default Announcement;
