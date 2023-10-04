import PriorityFunction from "../GeneralComponents/PriorityFunction";

const Priority = () => {
  const inputData1 = {
    done: 60,
    pending: 20,
    reject: 20,
    name: "Priority 1",
  };
  const inputData2 = {
    done: 70,
    pending: 20,
    reject: 10,
    name: "Priority 2",
  };
  const inputData3 = {
    done: 20,
    pending: 70,
    reject: 10,
    name: "Priority 3",
  };

  const colour = [
    {
      id: 1,
      name: "Done",
      style: "#16A34A",
    },
    {
      id: 2,
      name: "Pending",
      style: "#3245F7",
    },
    {
      id: 3,
      name: "Reject",
      style: "#E6223B",
    },
  ];

  return (
    <div
      className="bg-white rounded-lg"
      style={{ fontFamily: " 'Geologica', sans-serif" }}
    >
      <h1 className="text-center text-3xl font-bold mb-3 pt-5">
        Bangkalan Exploration 2023
      </h1>
      <p className="mx-5 text-justify text-sm pb-5">
        The division of three priorities helps in organizing tasks based on
        their importance and urgency, facilitating effective time management.
      </p>

      <div className="flex justify-around">
        <PriorityFunction input={inputData1} />
        <PriorityFunction input={inputData2} />
        <PriorityFunction input={inputData3} />
      </div>
      <div className="flex justify-center">
        {colour.map((value) => (
          <div
            className="w-20 py-1 mx-2 border rounded-lg "
            style={{ backgroundColor: `${value.style}` }}
            key={value.id}
          >
            <h1 className="text-center text-sm text-white">{value.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Priority;
