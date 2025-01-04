"use client";

import { useState } from "react";
// Importing the Components
import WelcomePage from "@/components/WelcomePage/WelcomePage";
import Topbar from "@/components/Topbar/Topbar";
import InteractiveMap from "@/components/InteractiveMap/InteractiveMap";

export default function Home() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  return (
    <main className="h-screen overflow-hidden relative">
      <WelcomePage />
      <div className="py-8">
        <div className="flex-col">
          <Topbar />
          <div
            className={`flex flex-col w-screen text-black font-poppins px-8 transition-all duration-300 h-screen ${
              isGalleryOpen ? "items-start" : "items-center"
            } justify-center items-center sm:justify-start sm:items-start sm:h-auto`}
          >
            <div
              className={`text-3xl mt-5 w-full ${
                isGalleryOpen ? "text-start xl:w-1/2" : "text-center"
              }`}
            >
              Powering the Future of Workforce Management
            </div>
            <div
              className={`text-xl flex mt-2 transition-all duration-300 ${
                isGalleryOpen
                  ? "justify-start text-start"
                  : "w-full justify-center text-center"
              }`}
            >
              Combining speed, precision, and innovation to help you hire, pay,{" "}
              <br className="hidden md:inline" />
              and manage talent effortlessly—anywhere in the world.
            </div>
            <div
              className={`w-fit flex flex-col items-center mt-16 ${
                isGalleryOpen ? "mx-0 items-start" : "mx-auto"
              }`}
            >
              <div className="flex text-left py-2 w-full">
                Join our exclusive mailing list
              </div>
              <form
                action="https://public.herotofu.com/v1/8b326ca0-ca65-11ef-9788-bfcf6eb47463"
                method="post"
                acceptCharset="UTF-8"
              >
                <div className="flex flex-col items-center align-middle gap-4 w-full xs:flex-row">
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Enter your email"
                    className="w-72 px-4 py-3 bg-transparent border-2 border-black rounded-md text-left"
                  />
                  <button
                  type="submit"
                    className="w-full xs:w-auto px-4 py-3 bg-button-bg border-2 border-black rounded-md hover:cursor-pointer hover:bg-highlight ease-in-out duration-200"
                  >
                    Get Started
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="hidden sm:flex sm:w-screen sm:mt-12">
          <InteractiveMap
            onGalleryOpen={() => setIsGalleryOpen(true)}
            onGalleryClose={() => setIsGalleryOpen(false)}
          />
        </div>
      </div>
    </main>
  );
}
