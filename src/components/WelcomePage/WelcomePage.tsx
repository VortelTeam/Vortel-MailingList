import { useEffect, useState } from "react";

const WelcomePage = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Apply styles to hide scrollbar and disable scrolling
    document.documentElement.style.overflow = "hidden"; // Hides scrollbar on entire document
    document.body.style.overflow = "hidden";
    document.body.style.height = "100vh"; // Prevents scrolling due to body height

    const timer = setTimeout(() => {
      setIsVisible(false);
      // Restore scrolling after welcome page disappears
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
      document.body.style.height = "auto";
    }, 1200);

    return () => {
      clearTimeout(timer);
      // Ensure scrolling is restored when unmounted
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
      document.body.style.height = "auto";
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-[#f1f1f1] z-50 transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="text-brand-brown xs:text-9xl font-bold font-otomanopee text-6xl">
        Vortel
      </div>
    </div>
  );
};

export default WelcomePage;
