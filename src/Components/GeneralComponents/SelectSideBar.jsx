const SelectSideBar = ({ input }) => {
  const Data = input;

  return (
    <div
      className={`mx-5 flex justify-start ${
        Data.status ? "bg-green-300 text-xl text-black" : "text-white "
      }hover:bg-green-100 rounded-lg hover:cursor-pointer hover:text-black p-2`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        className="bi bi-question-circle"
        viewBox="0 0 16 16"
      >
        <path d={Data.d1} />
        <path d={Data.d2} />
      </svg>
      <h1 className="mx-2 text-sm">{Data.name}</h1>
    </div>
  );
};
export default SelectSideBar;
