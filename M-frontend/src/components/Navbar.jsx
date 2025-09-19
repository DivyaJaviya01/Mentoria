import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  HomeIcon,
  ChartBarIcon,
  FireIcon,
  ClipboardDocumentIcon,
  MapIcon,
  BuildingLibraryIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  ChatBubbleLeftRightIcon,
  CpuChipIcon,
  QuestionMarkCircleIcon,
  ArrowRightOnRectangleIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const handleToggle = (menu) => (e) => {
    e.stopPropagation();
    toggleMenu(menu);
  };

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-gray-900/70 backdrop-blur-xl border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-16 flex items-center justify-between text-white">
          <div className="flex items-center space-x-2">
            <MapIcon className="h-7 w-7 text-blue-400" />
            <h1 className="text-lg sm:text-xl font-semibold tracking-tight">Mentoria</h1>
          </div>

          <div className="hidden md:flex items-center space-x-8 relative">
            {/* Home: label navigates, arrow toggles dropdown */}
            <div className="relative flex items-center">
              <Link to="/" className="group flex items-center space-x-1 text-gray-200 hover:text-white transition-colors">
                <HomeIcon className="h-5 w-5" />
                <span className="text-sm font-medium">Home</span>
              </Link>
              <button
                onClick={handleToggle("home")}
                aria-expanded={openMenu === "home"}
                aria-controls="menu-home"
                className="ml-1 p-1 rounded hover:bg-white/10 transition-colors"
              >
                <ChevronDownIcon
                  className={`h-4 w-4 transition-transform duration-200 ${
                    openMenu === "home" ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              {openMenu === "home" && (
                <div id="menu-home" className="absolute top-10 left-1/2 -translate-x-1/2 w-56 bg-gray-900/80 backdrop-blur-xl border border-white/10 shadow-2xl rounded-xl overflow-hidden ring-1 ring-white/10">
                  <div className="py-2">
                    <Link to="/dashboard" className="flex items-center px-4 py-2 text-gray-200 hover:bg-white/5">
                      <ChartBarIcon className="h-5 w-5 mr-3 text-sky-400" />
                      <span className="text-sm">Dashboard</span>
                    </Link>
                    <Link to="/trending" className="flex items-center px-4 py-2 text-gray-200 hover:bg-white/5">
                      <FireIcon className="h-5 w-5 mr-3 text-rose-400" />
                      <span className="text-sm">Trending</span>
                    </Link>
                    <Link to="/form" className="flex items-center px-4 py-2 text-gray-200 hover:bg-white/5">
                      <ClipboardDocumentIcon className="h-5 w-5 mr-3 text-amber-400" />
                      <span className="text-sm">Form</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Roadmap: only arrow toggles */}
            <div className="relative flex items-center">
              <div className="group flex items-center space-x-1 text-gray-200">
                <MapIcon className="h-5 w-5" />
                <span className="text-sm font-medium">Roadmap</span>
              </div>
              <button
                onClick={handleToggle("roadmap")}
                aria-expanded={openMenu === "roadmap"}
                aria-controls="menu-roadmap"
                className={`ml-1 p-1 rounded hover:bg-white/10 transition-colors`}
              >
                <ChevronDownIcon
                  className={`h-4 w-4 transition-transform duration-200 ${
                    openMenu === "roadmap" ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              {openMenu === "roadmap" && (
                <div id="menu-roadmap" className="absolute top-10 left-1/2 -translate-x-1/2 w-64 bg-gray-900/80 backdrop-blur-xl border border-white/10 shadow-2xl rounded-xl overflow-hidden ring-1 ring-white/10">
                  <div className="py-2">
                    <Link to="/colleges" className="flex items-center px-4 py-2 text-gray-200 hover:bg-white/5">
                      <BuildingLibraryIcon className="h-5 w-5 mr-3 text-blue-400" />
                      <span className="text-sm">Colleges</span>
                    </Link>
                    <Link to="/scholarship" className="flex items-center px-4 py-2 text-gray-200 hover:bg-white/5">
                      <AcademicCapIcon className="h-5 w-5 mr-3 text-emerald-400" />
                      <span className="text-sm">Scholarship</span>
                    </Link>
                    <Link to="/career-support" className="flex items-center px-4 py-2 text-gray-200 hover:bg-white/5">
                      <BriefcaseIcon className="h-5 w-5 mr-3 text-violet-400" />
                      <span className="text-sm">Career Path Support</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Talk with AI: only arrow toggles */}
            <div className="relative flex items-center">
              <div className="group flex items-center space-x-1 text-gray-200">
                <ChatBubbleLeftRightIcon className="h-5 w-5" />
                <span className="text-sm font-medium">Talk with AI</span>
              </div>
              <button
                onClick={handleToggle("ai")}
                aria-expanded={openMenu === "ai"}
                aria-controls="menu-ai"
                className="ml-1 p-1 rounded hover:bg-white/10 transition-colors"
              >
                <ChevronDownIcon
                  className={`h-4 w-4 transition-transform duration-200 ${
                    openMenu === "ai" ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              {openMenu === "ai" && (
                <div id="menu-ai" className="absolute top-10 left-1/2 -translate-x-1/2 w-64 bg-gray-900/80 backdrop-blur-xl border border-white/10 shadow-2xl rounded-xl overflow-hidden ring-1 ring-white/10">
                  <div className="py-2">
                    <Link to="/ai-assistance" className="flex items-center px-4 py-2 text-gray-200 hover:bg-white/5">
                      <CpuChipIcon className="h-5 w-5 mr-3 text-pink-400" />
                      <span className="text-sm">AI Assistance</span>
                    </Link>
                    <Link to="/live-chat" className="flex items-center px-4 py-2 text-gray-200 hover:bg-white/5">
                      <ChatBubbleLeftRightIcon className="h-5 w-5 mr-3 text-amber-400" />
                      <span className="text-sm">Live Chat</span>
                    </Link>
                    <Link to="/faq" className="flex items-center px-4 py-2 text-gray-200 hover:bg-white/5">
                      <QuestionMarkCircleIcon className="h-5 w-5 mr-3 text-cyan-400" />
                      <span className="text-sm">FAQ</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center">
            <Link
              to="/signin"
              className="inline-flex items-center space-x-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 active:scale-[0.98] px-4 py-2 rounded-lg shadow-md shadow-blue-900/30 transition-all"
            >
              <ArrowRightOnRectangleIcon className="h-5 w-5" />
              <span>Sign In</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
