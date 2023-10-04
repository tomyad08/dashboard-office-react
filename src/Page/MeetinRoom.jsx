import React from "react";
import SideBar from "../Components/Dashboard/SideBar";
import FormMeetingRoomReservation from "../Components/Dashboard/FormMeeting";

const MeetingRoomReservation = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="w-full h-screen overflow-y-scroll">
        <FormMeetingRoomReservation />
      </div>
    </div>
  );
};
export default MeetingRoomReservation;
