// pages/Purpose/PurposeMain.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PurposeSection1 from "./components/PurposeSection1";
import PurposeSection2 from "./components/PurposeSection2";
import PurposeSection3 from "./components/PurposeSection3";

export default function PurposeMain() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    // Handle hash navigation (if someone visits /purpose#section2)
    if (location.hash) {
      const id = location.hash.replace("#", "/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  return (
    <div className="snap-y snap-mandatory">
      <PurposeSection1 />
      <PurposeSection2 />
      <PurposeSection3 />
    </div>
  );
}
