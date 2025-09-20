import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop({ behavior = "auto" }) {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // jika ada hash (anchor), coba scroll ke elemen terkait
    if (hash) {
      const id = decodeURIComponent(hash.replace("#", ""));
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior });
        return;
      }
    }

    // default: scroll ke paling atas
    window.scrollTo({ top: 0, left: 0, behavior });
  }, [pathname, hash, behavior]);

  return null;
}
