import React from "react";
import Header from "./components/Header";
import JobList from "./components/Mainpage/JobList";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Login from "./pages/auth/Login";
import SignUpSelection from "./pages/auth/SignUpSelection";
import PersonalSignUp from "./pages/auth/PersonalSignUp";
import CompanySignUp from "./pages/auth/CompanySignUp";
import Job from "./pages/Job";
import Resume from "./pages/Resume";
import RegistNotice from "./pages/RegistNotice";
import RegistResume from "./pages/RegistResume";
import FindID from "./pages/auth/FindID";
import FindPassword from "./pages/auth/FindPassword";
import UserInfoChange from "./pages/UserInfoChange";
import JobDetail from "./pages/JobDetail";
import EditJob from "./pages/EditJob";
import PersonalProfile from "./pages/PersonalProfile";
import CompanyProfile from "./pages/CompanyProfile";
import ResumeDetail from "./pages/ResumeDetail";
import EditResume from "./pages/EditResume";
import JobMap from "./pages/JobMap";

function App() {
  const location = useLocation();
  const showHeader = location.pathname === "/";
  return (
    <div className="App">
      {showHeader && <Header />}
      <Routes>
        <Route path="/" element={<JobList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUpSelection />} />
        <Route path="/signup/personal" element={<PersonalSignUp />} />
        <Route path="/signup/company" element={<CompanySignUp />} />
        <Route path="/job" element={<Job />} />
        <Route path="/job/:id" element={<JobDetail />} />
        <Route path="/editjob/:id" element={<EditJob />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/resume/:id" element={<ResumeDetail />} />
        <Route path="/editresume/:id" element={<EditResume />} />
        <Route path="/registresume" element={<RegistResume />} />
        <Route path="/registnotice" element={<RegistNotice />} />
        <Route path="/find-id" element={<FindID />} />
        <Route path="/find-password" element={<FindPassword />} />
        <Route path="/userinfochange" element={<UserInfoChange />} />
        <Route path="/profile/personal" element={<PersonalProfile />} />
        <Route path="/profile/company" element={<CompanyProfile />} />
        <Route path="/jobmap" element={<JobMap />} />
      </Routes>
    </div>
  );
}

export default App;
