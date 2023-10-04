import React from "react";
import { Link } from "react-router-dom";
import { DataDepartment } from "../../DataDummy/DataDepartment";
const Department = () => {
  const Department = DataDepartment;
  return (
    <div className="flex justify-around">
      {Department.map((value) => (
        <Link to={value.linkRouter} key={value.id}>
          <div className="p-2 mx-1 mt-3 rounded-lg drop-shadow-xl bg-white">
            <h1 className="text-2xl text-center font-bold text-green-800">
              {value.logo}
            </h1>
            <p className="text-sm text-center">{value.name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};
export default Department;
