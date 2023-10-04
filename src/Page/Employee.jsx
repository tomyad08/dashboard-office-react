import Employee from "../Components/Dashboard/Employee";
import NavBar from "../Components/Dashboard/NavBar";

const EmployeePage = () => {
  return (
    <div>
      <NavBar />
      <div className="px-5">
        <Employee />
      </div>
    </div>
  );
};
export default EmployeePage;
