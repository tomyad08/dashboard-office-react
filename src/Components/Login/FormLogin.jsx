import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const FormLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div
      className="flex justify-center items-center h-screen p-10 bg-white"
      style={{ fontFamily: " 'Geologica', sans-serif" }}
    >
      <div className="h-96 ">
        <div className="flex justify-between">
          <div>
            <h1 className="text-3xl font-semibold mt-2">Login</h1>
            <p
              className="text-sm"
              style={{ fontFamily: " 'Geologica', sans-serif" }}
            >
              Please input correctly.
            </p>
          </div>
          <img
            src="./assets/Login/harmony_energi.png"
            alt=""
            className="w-20"
          />
        </div>
        <div>
          <p className="border-b-2 border-blue-400 mb-10 mt-2"></p>
        </div>
        <label htmlFor="username" className="text-sm">
          Username:
        </label>
        <br />
        <input
          id="username"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 w-80 bg-green-200 rounded-lg my-2 focus:outline-none"
        />{" "}
        <br />
        <label htmlFor="password" className="text-sm">
          Password:
        </label>{" "}
        <br />
        <input
          id="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 w-80 bg-green-200 rounded-lg my-2 focus:outline-none "
        />{" "}
        <br />
        <Link to="/home">
          <button className="p-2 w-80 text-center bg-green-800 text-white mt-5 rounded-lg hover:bg-green-500 hover:text-black hover:font-semibold">
            Login
          </button>
        </Link>
        <p className="text-sm mt-4">
          Any help?{" "}
          <span className="font-semibold cursor-pointer">click me.</span>
        </p>
      </div>
    </div>
  );
};
export default FormLogin;
