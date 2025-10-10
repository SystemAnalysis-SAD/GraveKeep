import { Outlet } from "react-router-dom";
import NavBar from "../components/Navigation/Navbar";
import Footer from "../components/Footer";
import Login from "../components/Login";
import { useState } from "react";

export default function MainLayout() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <NavBar
        setLoginComponentVisible={setIsVisible}
        scrollToSection={scrollToSection}
      />
      <main>
        {isVisible && (
          <Login setIsVisible={setIsVisible} isVisible={isVisible} />
        )}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
