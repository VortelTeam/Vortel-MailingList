import { useEffect, useState } from "react";

const WelcomePage = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`absolute inset-0 flex items-center justify-center bg-[#f1f1f1] z-50 transition-opacity duration-500 ${
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
