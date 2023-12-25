import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AuthProvider } from "./utils/auth";
import { useAuth } from "./utils/auth";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
import { Hero } from "./components/main_page/Hero";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";

function App() {

  return (
    <Router>
      <AuthProvider>
        <div className="bg-black bg-opacity-75 bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_large.jpg')] bg-blend-darken">
          <Navbar />
          {/* routes are here */}
          {/* <RouterProvider router={router}/> */}

          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />

            {/* {
              user ? (
                <Route path="/dashboard" element={<h1>Dashboard</h1>} />
              ) : (
                <Route path="/dashboard" element={<h1>Log in to view dashboard</h1>} />
              )
            } */}
          </Routes>


          {/* routes end here */}
          <div className="bg-gray-800 h-1" />
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
