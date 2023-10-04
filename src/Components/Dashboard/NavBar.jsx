import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [condition, setCondition] = useState(true);
  const [detail, setDetail] = useState(false);
  return (
    <div>
      <div
        className="flex justify-end bg-white px-5 py-2 rounded-xl drop-shadow-xl"
        style={{ fontFamily: " 'Geologica', sans-serif" }}
      >
        <div className="flex justify-end">
          <div>
            <p className="font-semibold text-lg text-end">Hi, Abdullah.</p>
            <p className="text-sm">
              Don't forget to drink a cup coffee before you start to work.
            </p>
            <p className="text-sm font-semibold text-end">
              Best regard, Jhon Nee.
            </p>
          </div>
          <img
            src="./assets/Dashboard/Timothy.jpg"
            alt=" "
            width={70}
            height={30}
            className="border rounded-full mx-5 cursor-pointer"
            onClick={() => setDetail(!detail)}
          />
        </div>
      </div>
      {detail && (
        <div className="fixed w-60 rounded-lg z-10 bg-slate-200 px-5 py-2 right-10 top-10">
          <div
            className="flex justify-end cursor-pointer"
            onClick={() => setDetail(!detail)}
          >
            <h1 className="font-semibold">x</h1>
          </div>
          <Link to="/home">
            <h1 className="font-semibold cursor-pointer">Home</h1>
          </Link>
          <h1 className="font-semibold cursor-pointer">Edit</h1>
          <Link to="/">
            <h1 className="font-semibold mb-5 cursor-pointer">Log Out</h1>
          </Link>
          <div className="flex justify-center mt-10">
            {condition ? (
              <button
                className="px-2 py-1 font-semibold bg-blue-800 text-white rounded-lg border border-2 border-white drop-shadow-xl"
                onClick={() => setCondition(!condition)}
              >
                Start to Work
              </button>
            ) : (
              <button
                className="px-2 py-1 font-semibold bg-red-600 text-white rounded-lg border border-2 border-white drop-shadow-xl"
                onClick={() => setCondition(!condition)}
              >
                I Have Done Work
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
export default NavBar;
