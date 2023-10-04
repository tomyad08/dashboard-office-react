import React from "react";
import { useNavigate } from "react-router-dom";
import { DataSideBar } from "../../DataDummy/DataSideBar";

const SideBar = () => {
  const navigate = useNavigate();
  const listmenu = DataSideBar;
  return (
    <div
      className="w-1/5 bg-green-800 h-screen"
      style={{ fontFamily: " 'Geologica', sans-serif" }}
    >
      <div className="flex justify-start px-2 py-1 bg-green-100 mx-2 rounded-b-xl mb-5">
        <img src="./assets/Login/harmony_energi.png" alt=" " className="w-20" />
        <div className="w-32 h-10 bg-green-900 my-2"></div>
      </div>
      {listmenu.map((value) => (
        <div
          className="mx-5 flex justify-start text-white hover:bg-green-100 rounded-lg hover:cursor-pointer hover:text-black p-2"
          onClick={() => navigate(value.routerLink)}
          key={value.id}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-question-circle"
            viewBox="0 0 16 16"
          >
            <path d={value.d1} />
            <path d={value.d2} />
          </svg>
          <h1 className="mx-2 text-sm">{value.name}</h1>
        </div>
      ))}
    </div>
  );
};
export default SideBar;
