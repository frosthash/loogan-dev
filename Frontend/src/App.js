import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import { useState, useEffect } from "react";
import Login from "./authentication/Login";
import Signup from "./authentication/Signup";
import { UserAuthContextProvider } from "./contexts/UserAuthContext";
import { auth } from "./config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import Account from "./components/Account";
import Institution from "./components/Institution";
import Grades from "./components/Grades";
import Calendar from "./components/Calendar";
import Inbox from "./components/Inbox";
import Courses from "./components/Courses";
import Collaborate from "./components/Collaborate";
import History from "./components/History";
import Help from "./components/Help";
import "antd/dist/antd.css";
import ProtectedRoute from "./authentication/ProtectedRoute";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [timeActive, setTimeActive] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, []);

  return (
    <UserAuthContextProvider value={{ currentUser, timeActive, setTimeActive }}>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/account" element={<Account />} />
        <Route path="/grades" element={<Grades />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/collaborate" element={<Collaborate />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/history" element={<History />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/institution" element={<Institution />} />
        <Route path="/help" element={<Help />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </UserAuthContextProvider>
  );
}

export default App;
