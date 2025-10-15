import { useEffect } from "react";
import NotFound from "../error/NotFound";

export default function Search() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div>
      <NotFound />
    </div>
  );
}
