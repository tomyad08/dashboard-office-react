import NavBar from "../Components/Dashboard/NavBar";
import Tabel from "../Components/GeneralComponents/TabelTask";
import { DataTabelDepartement } from "../DataDummy/DataTabelDepartement";

const HumanResource = () => {
  const Data = DataTabelDepartement;
  return (
    <div>
      <NavBar />
      <div className="px-5">
        <Tabel input={Data} />
      </div>
    </div>
  );
};
export default HumanResource;
