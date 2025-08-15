import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelope,
  FaSun,
  FaMoon,
} from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const navItems = [
  { path: "/", icon: <FaHome />, label: "Home" },
  { path: "/about", icon: <FaUser />, label: "About" },
  { path: "/projects", icon: <FaFolderOpen />, label: "Projects" },
  { path: "/contact", icon: <FaEnvelope />, label: "Contact" },
];

export default function Sidebar() {
  const { isDark, setIsDark } = useTheme();
  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <div className="fixed top-1/2 right-4 -translate-y-1/2 z-50 flex flex-col gap-4 items-center">
      {navItems.map(({ path, icon, label }) => (
        <NavLink
          key={label}
          to={path}
          title={label}
          className={({ isActive }) =>
            `w-12 h-12 rounded-full flex items-center justify-center text-white text-xl transition-colors duration-300 ${
              isActive ? "bg-white-600" : "bg-gray-800 hover:bg-gray-700"
            }`
          }
        >
          {icon}
        </NavLink>
      ))}
      <button
        onClick={toggleTheme}
        className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl bg-gray-800 hover:bg-gray-700 transition"
        title="Toggle Theme"
      >
        {isDark ? <FaSun /> : <FaMoon />}
      </button>
    </div>
  );
}
