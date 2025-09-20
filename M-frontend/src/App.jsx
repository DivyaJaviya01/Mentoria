
import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./views/Home";
import About from "./views/About";
import SignIn from "./views/SignIn";
import Dashboard from "./views/Dashboard";
import Terms from "./views/Terms";
import Privacy from "./views/Privacy";

function AppContent() {
  const location = useLocation();
  const hideFooterRoutes = ['/signin', '/terms', '/privacy'];
  const shouldShowFooter = !hideFooterRoutes.includes(location.pathname);

  return (
    <>
      {/* Navbar at the top */}
      <Navbar />

      {/* Main Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>

      {/* Footer at the bottom - conditionally rendered */}
      {shouldShowFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;

