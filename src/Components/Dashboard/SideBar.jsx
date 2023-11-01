"use client";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataSideBar } from "../../DataDummy/DataSideBar";
import SelectSideBar from "../GeneralComponents/SelectSideBar";

const SideBar = () => {
  const navigate = useNavigate();
  const listmenu = DataSideBar;
  const [select, setSelect] = useState(listmenu);
  //() => navigate(value.routerLink)

  const handleSide = (id, routerLink) => {
    let Change = [];
    listmenu.map((value) => {
      if (value.id == id) {
        Change.push({
          id: id,
          name: value.name,
          d1: value.d1,
          d2: value.d2,
          routerLink: value.routerLink,
          status: true,
        });
      } else {
        Change.push({
          id: value.id,
          name: value.name,
          d1: value.d1,
          d2: value.d2,
          routerLink: value.routerLink,
          status: false,
        });
      }
    });

    setSelect(Change);
    navigate(routerLink);
  };

  return (
    <div
      className="w-1/5 bg-green-800 h-screen"
      style={{ fontFamily: " 'Geologica', sans-serif" }}
    >
      <div className="flex justify-start px-2 py-1 bg-green-100 mx-2 rounded-b-xl mb-5">
        <img src="./assets/Login/harmony_energi.png" alt=" " className="w-20" />
        <div className="w-32 h-10 bg-green-900 my-2"></div>
      </div>
      {select.map((value) => (
        <div
          onClick={() => handleSide(value.id, value.routerLink)}
          key={value.id}
        >
          <SelectSideBar input={value} />
        </div>
      ))}
    </div>
  );
};
export default SideBar;
