import "./App.css";
import Hero from "./components/Homepage/Hero";
import { Route, Routes, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
function App() {
  // Conditional Rendering logic
  const location = useLocation();
  const isLandingPage = location.pathname === "/";
  
  return (
    <>
      <div className="sm:-8 relative flex min-h-screen flex-row bg-gray-900">
        {!isLandingPage && (
          <div className="relative mr-10 hidden sm:flex">
            <div><Sidebar/></div>
          </div>
        )}
        
        <div className="mx-auto  flex-1 max-sm:w-full sm:pr-5">
          {!isLandingPage && (<div>Navbar</div>)}

          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/home" element={<div>Home</div>} />
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
