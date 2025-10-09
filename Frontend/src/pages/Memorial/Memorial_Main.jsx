/* import { useState } from "react";
import Footer from "../../components/Footer";
import NavBar from "../../components/Navigation/Navbar";
import Memorial from "./Memorial";
import Login from "../../components/Login";

export default function MemorialMain() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div>
      <NavBar setLoginComponentVisible={setIsVisible} />
      <div className="">
        <Memorial />
      </div>
      {isVisible && <Login setIsVisible={setIsVisible} isVisible={isVisible} />}
      <Footer />
    </div>
  );
}
 */
