import React from "react";
import SideBar from "../Components/Dashboard/SideBar";
import FormDriverReservation from "../Components/Dashboard/FormDriverReservation";
import FormHSECard from "../Components/Dashboard/HSECard";

const HSECard = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="w-full h-screen overflow-y-scroll">
        <FormHSECard />
      </div>
    </div>
  );
};
export default HSECard;
