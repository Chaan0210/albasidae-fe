import React from "react";
import Header from "./components/Header";
import JobList from "./components/JobList";
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
        <Route path="/resume" element={<Resume />} />
        <Route path="/registresume" element={<RegistResume />} />
        <Route path="/registnotice" element={<RegistNotice />} />
        <Route path="/find-id" element={<FindID />} />
        <Route path="/find-password" element={<FindPassword />} />
        <Route path="/userinfochange" element={<UserInfoChange />} />
      </Routes>
    </div>
  );
}

export default App;
