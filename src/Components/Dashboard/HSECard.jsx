import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { DataEmployee } from "../../DataDummy/DataEmployee";
import { DataTime } from "../../DataDummy/Time";
import { CategoriesHSE } from "../../DataDummy/DataCategoriesHSE";
import { Link, useNavigate } from "react-router-dom";

const FormHSECard = () => {
  const navigate = useNavigate();
  const [Name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState("");
  const [category, setCategory] = useState("");
  const [condition, setCondition] = useState(false);

  const data = DataEmployee;
  const Time = DataTime;
  const categories = CategoriesHSE;
  const Department = [];
  const dummy = [];
  data.filter((value) => {
    if (!dummy.includes(value.department)) {
      dummy.push(value.department);
      Department.push({ department: value.department });
    }
  });

  const style =
    "p-4 border-b-1 w-full bg-white drop-shadow-xl rounded-lg my-2 focus:outline-none";

  const handleSubmit = () => {
    setCondition(true);
    setTimeout(() => {
      navigate("/home");
    }, 3000);
  };

  return (
    <div className="py-5" style={{ fontFamily: " 'Geologica', sans-serif" }}>
      <div className="flex justify-center">
        {condition && (
          <h1 className="text-center bg-green-200 p-1 fixed rounded-lg z-10 px-10 drop-shadow-xl">
            Data has recorded, thank you.
          </h1>
        )}
      </div>
      <div className="flex justify-center">
        <div className="w-2/4">
          <h1 className="text-2xl mt-5 font-bold border-b-2 border-green-800 w-50">
            HSE Card
          </h1>
          <p className="text-sm mb-5">Please input correctly. </p>
          <label className="text-sm">Department</label> <br />
          <select
            onChange={(e) => setDepartment(e.target.value)}
            className={style}
          >
            <option value=""></option>
            {Department.map((value) => (
              <option value={value.department}>{value.department}</option>
            ))}
          </select>
          <br />
          <label className="text-sm">Name</label> <br />
          <select onChange={(e) => setName(e.target.value)} className={style}>
            <option value=""></option>
            {data
              .filter((value) => {
                if (department == "") {
                  return value;
                } else if (department.includes(value.department)) {
                  return value;
                }
              })
              .map((value) => (
                <option value={value.name} key={value.id}>
                  {value.name}
                </option>
              ))}
          </select>{" "}
          <br />
          <br />
          <div>
            <label className="text-sm">Date</label> <br />
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className={`text-center ${style}`}
            />
          </div>
          <br />
          <div className="flex justify-between">
            <div>
              <label className="text-sm">Time</label> <br />
              <select
                className={style}
                onChange={(e) => setStartTime(e.target.value)}
              >
                {Time.map((value) => (
                  <option value={value.time} key={value.id}>
                    {value.time}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-sm">Category</label> <br />
              <select
                className={style}
                onChange={(e) => setCategory(e.target.value)}
              >
                {categories.map((value) => (
                  <option key={value.id} value={value.name}>
                    {value.name}
                  </option>
                ))}
              </select>
            </div>
          </div>{" "}
          <br />
          <label className="text-sm">Detail Situation</label> <br />
          <input
            placeholder="Give us detail your appointment"
            className={style}
          />
          <br />
          <div className="flex justify-end mt-5">
            <Link to="/home">
              {" "}
              <button className="px-5 py-2 bg-blue-700 rounded-lg mx-5 text-white font-semibold">
                Back
              </button>
            </Link>
            <button
              className="px-5 py-2 bg-green-800 rounded-lg text-white font-semibold"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormHSECard;
