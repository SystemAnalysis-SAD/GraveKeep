import { useEffect, useState } from "react";
import NavBar from "../../components/Navigation/Navbar";
import Home from "./Home";
import Login from "../../components/Login";
import Footer from "../../components/Footer";

export default function HomeMain() {
  useEffect(() => {
    document.title = "Gravekeep";
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="h-screen w-full">
      <NavBar
        setLoginComponentVisible={setIsVisible}
        scrollToSection={scrollToSection}
      />
      <Home />
      {isVisible && <Login setIsVisible={setIsVisible} isVisible={isVisible} />}
      <Footer />
    </div>
  );
}
