import Priority from "../Components/Dashboard/Priority";
import SideBar from "../Components/Dashboard/SideBar";
import Progress from "../Components/GeneralComponents/Progress";

const ProjectProgress = () => {
  return (
    <div className="flex h-screen">
      <SideBar />
      <div className="w-full h-screen overflow-y-scroll">
        <Priority />
        <Progress />
      </div>
    </div>
  );
};
export default ProjectProgress;
