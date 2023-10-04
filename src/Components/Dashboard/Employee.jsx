import { useState } from "react";
import { DataEmployee } from "../../DataDummy/DataEmployee";
import { DataHeaderEmployee } from "../../DataDummy/DataHeaderEmployee";

const Employee = () => {
  const Data = DataEmployee;
  const header = DataHeaderEmployee;
  const [name, setName] = useState("");

  const style =
    "p-2 border-b-1 w-50 bg-white drop-shadow-xl rounded-lg my-2 focus:outline-none";
  return (
    <div className=" mt-5 drop-shadow-xl">
      <div className="flex justify-between">
        <div className="w-3/4 mt-5">
          <h1 className="text-3xl font-semibold">Employee Data Table </h1>
        </div>
        <div>
          <label className="text-sm">Search Name</label> <br />
          <input className={style} onChange={(e) => setName(e.target.value)} />
        </div>
      </div>
      <div className="w-screen overflow-x-scroll">
        <div className="flex justify-around rounded-t-xl bg-green-600 mt-5">
          {header.map((value) => (
            <div
              className="text-white font-semibold w-40 rounded-xl text-center text-sm"
              key={value.id}
            >
              <h1>{value.name}</h1>
            </div>
          ))}
        </div>
        <div className="rounded-b-xl p-2 mb-5 bg-white">
          <div>
            {Data.filter((value) => {
              if (name === "") {
                return value;
              } else if (
                value.name.toLowerCase().includes(name.toLowerCase())
              ) {
                return value;
              }
            }).map((value) => (
              <div
                className="flex justify-around border-b-2 border-slate-300 p-2 text-sm hover:bg-green-100"
                key={value.id}
              >
                <div className="w-20 ">{value.id}</div>
                <img src={value.image} alt="" className="w-32 h-15" />
                <div className="w-40 text-center mx-2">{value.name}</div>
                <div className="w-40">{value.department}</div>
                <div className="w-40">{value.employee_number}</div>
                <div className="w-40 me-4">{value.nik}</div>
                <div className="w-40">{value.born}</div>
                <div className="w-40">{value.address}</div>
                <div className="w-40">{value.domisili}</div>
                <div className="w-40">{value.education}</div>
                <div className="w-50 ">{value.npwp}</div>
                <div className="w-40 text-center">{value.salary}</div>
                <div className="w-40 text-center">{value.attendance}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Employee;
