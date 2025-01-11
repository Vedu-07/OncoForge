import "./App.css";
import Hero from "./components/Homepage/Hero";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Onboarding, Profile } from "./pages";
import { useStateContext } from "./context";
import { useEffect } from "react";
import MedicalRecords from "./pages/records/index"
import SingleRecordDetails from "./pages/records/single-record-page";
import ScreeningSchedule from "./pages/ScreeningSchedules";
import ComingSoon from "./pages/ComingSoon";

function App() {
  // Conditional Rendering logic
  const location = useLocation();
  const isLandingPage = location.pathname === "/";
  const { user, authenticated, ready, login, currentUser } = useStateContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (ready && !authenticated) {
      login(); 
    } else if (user && !currentUser) {
      navigate("/onboarding");
    }
  }, [ready, authenticated, user, currentUser, login, navigate]);
  
  return (
    <>
      <div className="sm:-8 relative flex min-h-screen flex-row bg-gray-900">
        {!isLandingPage && (
          <div className="relative mr-10 hidden sm:flex">
            <div><Sidebar/></div>
          </div>
        )}
        
        <div className="mx-auto  flex-1 max-sm:w-full sm:pr-5">
          {!isLandingPage && (<div><Navbar/> </div>)}

          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/home" element={<Home/>} />
            <Route path="/onboarding" element={<Onboarding />}/>
            <Route path="/profile" element={<Profile />} />
            <Route path="/medical-records" element={<MedicalRecords />}/>
            <Route path="/medical-records/:id" element={<SingleRecordDetails />}/>
            <Route path="/screening-schedules" element={<ScreeningSchedule />} />
            <Route path="/comingsoon" element={<ComingSoon/>} />
            {/* <Route path="/profile" element={<Profile />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/medical-records" element={<MedicalRecords />} />
            <Route path="/medical-records/:id" element={<SingleRecordDetails />}/>
            <Route path="/screening-schedules" element={<ScreeningSchedule />} /> */}
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
