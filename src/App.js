import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./Page/Login";
import Home from "./Page/Home";
import ProjectProgress from "./Page/ProjectProgress";
import HSECard from "./Page/HSECard";
import DriverReservation from "./Page/DriverReservation";
import MeetingRoomReservation from "./Page/MeetinRoom";
import Announcement from "./Page/Announcement";
import ProjectAdministration from "./Page/ProjectAdministration";
import ProjectOperation from "./Page/ProjectOperation";
import FinanceAccounting from "./Page/FinanceAccounting";
import MarketingCommercial from "./Page/MarketingCommercial";
import BusinessDevelopment from "./Page/BusinessDevelopment";
import BusinessTransformation from "./Page/BusinessTransformation";
import HumanResource from "./Page/HumanResource";
import EmployeePage from "./Page/Employee";
import HelpPage from "./Page/Help";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/employee" element={<EmployeePage />} />
          <Route path="/project-progress" element={<ProjectProgress />} />
          <Route path="/hse-card" element={<HSECard />} />
          <Route path="/driver-reservation" element={<DriverReservation />} />
          <Route
            path="/meeting-room-reservation"
            element={<MeetingRoomReservation />}
          />
          <Route path="/announcement" element={<Announcement />} />
          <Route
            path="/project-administration"
            element={<ProjectAdministration />}
          />
          <Route path="/project-operation" element={<ProjectOperation />} />
          <Route path="/finance-accounting" element={<FinanceAccounting />} />
          <Route
            path="/marketing-commercial"
            element={<MarketingCommercial />}
          />
          <Route
            path="/business-development"
            element={<BusinessDevelopment />}
          />
          <Route
            path="/business-transformation"
            element={<BusinessTransformation />}
          />
          <Route path="/human-resource" element={<HumanResource />} />
          <Route path="/help" element={<HelpPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
