import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function NavBar({ setLoginComponentVisible, scrollToSection }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"; // 🚫 disable scroll
    } else {
      document.body.style.overflow = "auto"; // ✅ re-enable scroll
    }

    // Cleanup if the component unmounts
    return () => (document.body.style.overflow = "auto");
  }, [menuOpen]);

  const handleClickHome = () => {
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      scrollToSection("home");
    }
  };

  return (
    <>
      <div className="h-20 py-4 px-4 md:px-12 lg:px-20 w-full flex justify-between fixed top-0 bg-black/20 backdrop-blur-xl z-50 border-b border-emerald-400/20">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/5 via-transparent to-emerald-400/5 opacity-50 z-0"></div>

        <div className="flex md:gap-7 lg:gap-15 items-center relative z-10">
          <div className="flex gap-2 md:gap-4 items-center">
            <img src="/_logo.png" alt="logo" className="w-12 h-12" />
            <div>
              <h1 className="font-black text-2xl md:text-3xl text-emerald-400 hover:text-emerald-200 hover:scale-105 transition-all duration-300 cursor-pointer hover:drop-shadow-[0_0_15px_rgba(74,222,128,0.5)]">
                Gravekeep
              </h1>
              <p className="text-white/70 font-light text-xs">
                Garden of Memories
              </p>
            </div>
          </div>
        </div>

        <div className="md:flex md:gap-7 lg:gap-14 hidden">
          {/* LINKS with hover effects */}
          <div className="ml-8 flex items-center">
            <ul className="flex items-center h-fit gap-8">
              <button
                onClick={handleClickHome}
                className="relative group cursor-pointer"
              >
                <li className="relative group">
                  <span className="text-white/90 hover:text-emerald-400 transition-all duration-300 cursor-pointer font-semibold tracking-wide text-sm uppercase">
                    Home
                  </span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all duration-300"></div>
                </li>
              </button>
              <li
                onClick={() => scrollToSection("search")}
                className="relative group"
              >
                <span className="text-white/90 hover:text-emerald-400 transition-all duration-300 cursor-pointer font-semibold tracking-wide text-sm uppercase">
                  Search
                </span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all duration-300"></div>
              </li>
              <li
                onClick={() => scrollToSection("purpose")}
                className="relative group"
              >
                <span className="text-white/90 hover:text-emerald-400 transition-all duration-300 cursor-pointer font-semibold tracking-wide text-sm uppercase">
                  Purpose
                </span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all duration-300"></div>
              </li>
              <li
                onClick={() => scrollToSection("about")}
                className="relative group"
              >
                <span className="text-white/90 hover:text-emerald-400 transition-all duration-300 cursor-pointer font-semibold tracking-wide text-sm uppercase">
                  About
                </span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all duration-300"></div>
              </li>
            </ul>
          </div>

          {/* LOGIN BUTTON with enhanced effects */}
          <button
            onClick={() => setLoginComponentVisible(true)}
            className="relative cursor-pointer bg-gradient-to-r from-emerald-500 to-emerald-600 px-7 py-2 rounded-xl text-white font-semibold tracking-wide hover:shadow-2xl shadow-lg hover:shadow-green-400/40 transition-all duration-400 hover:from-green-600 hover:to-green-700 hover:scale-105 group overflow-hidden z-10"
          >
            {/* Button shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            Admin Login
          </button>
        </div>

        {!menuOpen && (
          <button
            className="py-2 md:hidden text-white hover:text-emerald-400 transition-colors z-1000"
            onClick={() => setMenuOpen(true)}
          >
            <GiHamburgerMenu className="text-3xl" />
          </button>
        )}
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 backdrop-blur-2xl h-full top-0 z-1000 md:hidden transition-all duration-500 ease-in-out ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible delay-300"
        }`}
      >
        {/* Background Overlay */}
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity duration-500 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMenuOpen(false)}
        />

        {/* Menu Panel with Width Animation */}
        <div
          className={`absolute top-0 right-0 h-full bg-gradient-to-b from-emerald-900 to-black/60 border-l border-emerald-400/20 transform transition-all duration-500 ease-in-out ${
            menuOpen ? "w-80" : "w-0"
          } overflow-hidden`}
        >
          <div
            className={`flex flex-col h-full transition-all duration-300 ${
              menuOpen ? "opacity-100 delay-200" : "opacity-0"
            }`}
          >
            <div className="w-full pr-4 pt-3 flex items-end justify-end">
              <button
                onClick={() => setMenuOpen(false)}
                className="text-white md:hidden text-4xl p-2 hover:text-emerald-400 transition-colors z-1100"
              >
                ✕
              </button>
            </div>
            {/* Menu Items */}
            <div className="flex-1 flex flex-col justify-start  items-center gap-2 px-6">
              <Link to={"/"} className="w-full ">
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    handleClickHome();
                  }}
                  className=" text-white text-xl font-semibold hover:text-emerald-400 transition-all duration-300 py-4 px-6 rounded-xl hover:bg-emerald-400/10 border border-transparent hover:border-emerald-400/30 transform hover:scale-105 group"
                >
                  <span className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full group-hover:scale-125 transition-transform"></div>
                    Home
                  </span>
                </button>
              </Link>

              <Link to={"/memorial/search"} className="w-full">
                <button
                  onClick={() => setMenuOpen(false)}
                  className=" text-white text-xl font-semibold hover:text-emerald-400 transition-all duration-300 py-4 px-6 rounded-xl hover:bg-emerald-400/10 border border-transparent hover:border-emerald-400/30 transform hover:scale-105 group"
                >
                  <span className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full group-hover:scale-125 transition-transform"></div>
                    Search
                  </span>
                </button>
              </Link>

              <Link to={"/purpose/gravekeep"} className="w-full ">
                <button
                  onClick={() => {
                    setMenuOpen(false);
                  }}
                  className=" text-white text-xl font-semibold hover:text-emerald-400 transition-all duration-300 py-4 px-6 rounded-xl hover:bg-emerald-400/10 border border-transparent hover:border-emerald-400/30 transform hover:scale-105 group"
                >
                  <span className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full group-hover:scale-125 transition-transform"></div>
                    Purpose
                  </span>
                </button>
              </Link>

              <button
                onClick={() => {
                  scrollToSection("about");
                  setMenuOpen(false);
                }}
                className="w-full text-white text-xl font-semibold hover:text-emerald-400 transition-all duration-300 py-4 px-6 rounded-xl hover:bg-emerald-400/10 border border-transparent hover:border-emerald-400/30 transform hover:scale-105 group"
              >
                <span className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full group-hover:scale-125 transition-transform"></div>
                  About
                </span>
              </button>

              {/* Mobile Login Button */}
              <div className="mt-8 w-full px-6">
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    setLoginComponentVisible(true);
                  }}
                  className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 px-8 py-4 rounded-xl text-white font-semibold text-lg hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-400/30 group overflow-hidden relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  <span className="relative z-10">Admin Login</span>
                </button>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-emerald-400/20 bg-black/40">
              <p className="text-center text-white/50 text-sm">
                Garden of Memories Memorial Park
              </p>
              <p className="text-center text-white/30 text-xs mt-2">
                Taguig City
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
