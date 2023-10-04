import React from "react";
import SideBar from "../Components/Dashboard/SideBar";
import FormDriverReservation from "../Components/Dashboard/FormDriverReservation";

const DriverReservation = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="w-full h-screen overflow-y-scroll">
        <FormDriverReservation />
      </div>
    </div>
  );
};
export default DriverReservation;
