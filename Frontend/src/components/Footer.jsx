import { FaPhone, FaEnvelope, FaMapMarkedAlt, FaLeaf } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  const handleScrollHome = (e) => {
    e.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="py-12 px-4 bg-black border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/_logo.png" alt="logo" className="w-12 h-12" />
              <span className="text-xl font-bold text-white">GraveKeep</span>
            </div>
            <p className="text-gray-400 text-sm">
              A compassionate memorial search system for Garden of Memories
              Memorial Park, Taguig City.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li onClick={handleScrollHome} className="cursor-pointer">
                <a className="hover:text-emerald-400 transition-colors">Home</a>
              </li>
              <li>
                <Link
                  to={"/memorial/search"}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Search
                </Link>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Memorial Park</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Garden of Memories
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Visiting Hours
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Park Guidelines
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Services
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <FaMapMarkedAlt className="text-emerald-500" />
                <span>Garden of Memories, Taguig City</span>
              </li>
              <li className="flex items-center gap-2">
                <FaPhone className="text-emerald-500" />
                <span>+63 XXX XXX XXXX</span>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-emerald-500" />
                <span>info@gravekeep.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} GraveKeep. All rights reserved.
            Garden of Memories Memorial Park, Taguig City.
          </p>
        </div>
      </div>
    </div>
  );
}
