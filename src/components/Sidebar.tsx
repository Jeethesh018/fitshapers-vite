import { useEffect, useState } from "react";
import {
  FiMenu,
  FiX,
  FiHome,
  FiImage,
  FiUsers,
  FiPhone,
} from "react-icons/fi";
import { FaRupeeSign, FaWhatsapp } from "react-icons/fa";
import logo from "../assets/logo.png";

const menuItems = [
  { name: "Home", icon: <FiHome />, id: "home" },
  { name: "Plans", icon: <FaRupeeSign />, id: "plans" },
  { name: "Inside View", icon: <FiImage />, id: "gallery" },
  { name: "Trainers", icon: <FiUsers />, id: "trainers" },
  { name: "Contact", icon: <FiPhone />, id: "contact" },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/80 text-white flex justify-between items-center px-4 py-3 fixed top-0 w-full z-30 border-b border-zinc-800/80">
        <button onClick={() => setIsOpen(true)} aria-label="Open menu">
          <FiMenu className="cursor-pointer" size={24} />
        </button>

        <a href="#home" className="flex items-center gap-2">
          <img src={logo} alt="FitShapers" className="w-9 h-9 object-contain" />
          <span className="font-semibold text-sm sm:text-base tracking-wide">FitShapers</span>
        </a>

        <a
          href="https://wa.me/918553036233?text=Hi, I want to join FitShapers The Fitness Club"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 rounded-full bg-orange-500/90 hover:bg-orange-500 px-3 py-1.5 text-xs font-semibold transition"
        >
          <FaWhatsapp size={12} /> Join
        </a>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/70 z-40"
          onClick={handleClose}
        />
      )}

      <div
        className={`
          fixed top-0 left-0 h-full w-72 bg-zinc-950 text-white z-50
          transform transition-transform duration-300 ease-out
          border-r border-zinc-800
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex justify-end p-4">
          <button onClick={handleClose} aria-label="Close menu">
            <FiX size={26} />
          </button>
        </div>

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
