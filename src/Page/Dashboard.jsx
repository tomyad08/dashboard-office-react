import SideBar from "../Components/Dashboard/SideBar"

const Dashboard = () => {
    return(
        <div className="flex">
      <SideBar />
      <div className="w-full mx-2 h-screen overflow-y-scroll">
        <Announce />
      </div>
    </div>
    )
}
export default Dashboard