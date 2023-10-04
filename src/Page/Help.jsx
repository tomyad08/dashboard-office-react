import React from "react";
import SideBar from "../Components/Dashboard/SideBar";
import Help from "../Components/Dashboard/Help";

const HelpPage = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="w-full mx-2 h-screen overflow-y-scroll">
        <Help />
      </div>
    </div>
  );
};
export default HelpPage;
