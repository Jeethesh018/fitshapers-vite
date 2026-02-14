import { useState } from "react";
import {
  FiMenu,
  FiX,
  FiHome,
  FiImage,
  FiUsers,
  FiPhone,
} from "react-icons/fi";
import { FaRupeeSign } from "react-icons/fa";
import logo from "../assets/logo.png";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", icon: <FiHome />, id: "home" },
    { name: "Plans", icon: <FaRupeeSign />, id: "plans" },
    { name: "Gallery", icon: <FiImage />, id: "gallery" },
    { name: "Trainers", icon: <FiUsers />, id: "trainers" },
    { name: "Contact", icon: <FiPhone />, id: "contact" },
  ];

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-black text-white flex justify-between items-center px-4 py-3 fixed top-0 w-full z-30">
        <button onClick={() => setIsOpen(true)}>
          <FiMenu size={26} />
        </button>

        <img
  src={logo}
  alt="FitShapers"
  className="w-10 h-10 object-contain"
/>

      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={handleClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-full w-64 bg-black text-white z-50
          transform transition-transform duration-300 ease-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Close button */}
        <div className="flex justify-end p-4">
          <button onClick={handleClose}>
            <FiX size={26} />
          </button>
        </div>

        {/* Logo */}
        {/* Logo */}
        <div className="px-6 py-6 border-b border-zinc-800 flex flex-col items-center">
          <img
            src={logo}
            alt="FitShapers Logo"
            className="w-20 h-20 object-contain"
          />

          <h1 className="text-lg font-bold text-orange-500 mt-2 text-center">
            FitShapers
          </h1>

          <p className="text-xs text-zinc-400 text-center">The Fitness Club</p>
        </div>

        {/* Menu */}
        <nav className="mt-4">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={`#${item.id}`}
              onClick={handleClose}
              className="
                flex items-center gap-4 px-6 py-4
                hover:bg-orange-500 hover:text-black
                transition-all duration-200
              "
            >
              <span className="text-xl">{item.icon}</span>
              <span className="text-lg">{item.name}</span>
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
