"use client";
import { useState } from "react";

const Tabel = ({ input }) => {
  const [status, setStatus] = useState("");

  const header = [
    {
      id: 1,
      name: "Task",
    },
    {
      id: 2,
      name: "Priority",
    },
    {
      id: 3,
      name: "Status",
    },
    {
      id: 4,
      name: "Download file",
    },
    {
      id: 5,
      name: "Submit file",
    },
    {
      id: 6,
      name: "Notes",
    },
  ];

  const Data = [];
  input.map((value) => {
    if (value.status == "Done") {
      const setdata = {
        id: value.id,
        task: value.task,
        priority: value.priority,
        status: value.status,
        style:
          "px-5 py-1 bg-slate-200 rounded-lg text-white ms-10 me-5 cursor-no-drop",
      };
      Data.push(setdata);
    } else {
      const setdata = {
        id: value.id,
        task: value.task,
        priority: value.priority,
        status: value.status,
        style:
          "px-5 py-1 bg-blue-700 rounded-lg text-white ms-10 me-5 cursor-pointer",
      };
      Data.push(setdata);
    }
  });

  const styleOpt = "bg-white px-10 py-3 text-center";
  return (
    <div className=" mt-5 drop-shadow-xl">
      <div className="flex justify-between">
        <div className="w-3/4">
          <h1 className="text-2xl font-semibold">Task Table </h1>
          <p className="text-sm text-justify">
            This task table offers a convenient interface with download and
            submit options, streamlining assignment management for users.
          </p>
        </div>
        <div className="px-5 bg-white py-1 border border-2 border-slate-500 rounded-md my-4">
          <select
            className="px-2 bg-white focus:outline-none text-green-800 font-semibold"
            onChange={(e) => setStatus(e.target.value)}
          >
            <option className={styleOpt} value="">
              Status
            </option>
            <option className={styleOpt} value="Done">
              Done
            </option>
            <option className={styleOpt} value="Pending">
              Pending
            </option>
            <option className={styleOpt} value="Reject">
              Reject
            </option>
          </select>
        </div>
      </div>
      <div className="flex justify-around rounded-t-xl bg-green-600 mt-5">
        {header.map((value) => (
          <div
            className=" py-2 text-white font-semibold px-5 rounded-xl"
            key={value.id}
          >
            <h1>{value.name}</h1>
          </div>
        ))}
      </div>
      <div className="rounded-b-xl p-2 mb-5 bg-white">
        <div>
          {Data.filter((value) => {
            if (status === "") {
              return value;
            } else if (
              value.status.toLowerCase().includes(status.toLowerCase())
            ) {
              return value;
            }
          }).map((value) => (
            <div
              className="flex justify-around border-b-2 border-slate-300 p-2 text-sm hover:bg-green-100"
              key={value.id}
            >
              <div className="w-40 ">{value.task}</div>
              <div className="w-40">{value.priority}</div>
              <div className="w-40">{value.status}</div>
              <div className="w-40">
                <button className="px-5 py-1 bg-green-600 rounded-lg text-white">
                  Download
                </button>
              </div>
              <div className="w-40">
                <div className={value.style}>Submit</div>
              </div>
              <div className="w-40">{value.notes}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Tabel;
