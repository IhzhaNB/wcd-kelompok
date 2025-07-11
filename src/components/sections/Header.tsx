"use client";

import { useEffect, useRef, useState } from "react";
import Nav from "../layouts/Nav";

const Header = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY.current || currentScrollY < 105) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full transition-transform duration-500 sticky top-0 left-0 z-50 ${
        isVisible ? "translate-y-0 " : "-translate-y-full"
      }`}
    >
      <header className="bg-accent py-2 sticky top-0">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            {/* Nav desktop */}
            <Nav />

            {/* NavMobile */}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
