"use client";

import React from "react";
// Importing the Components
import WelcomePage from "@/components/WelcomePage/WelcomePage";
import Topbar from "@/components/Topbar/Topbar";
import InteractiveMap from "@/components/InteractiveMap/InteractiveMap";
import FileUpload from "@/components/FileUpload/FileUpload";
import FileBar from "@/components/FileBar/FileBar";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function Home() {
  return (
    <main className="h-screen overflow-x-hidden relative">
      <WelcomePage />
      <div className="pt-8">
        <div className="flex-col">
          <Topbar />
          <div className="flex flex-col w-screen h-dvh text-black font-poppins px-10 transition-all duration-300 justify-center items-center text-center align-middle sm:justify-start sm:items-center sm:h-auto">
            <div className="text-3xl w-full text-center sm:mt-12">
              Simplify Compliance, Empower Your Workforce
            </div>
            <div className="text-xl flex mt-2 transition-all duration-300 w-full justify-center text-center max-w-3xl">
              Combining automation, accuracy, and innovation to help you manage
              compliance and empower your workforce—effortlessly.
            </div>
            <div className="w-fit flex flex-col items-center mt-16 mx-auto">
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
        <div className="hidden sm:flex sm:w-screen sm:mt-4">
          <InteractiveMap />
        </div>
        <div className="h-dvh flex flex-col justify-around items-center m-auto w-screen ">
          <DndProvider backend={HTML5Backend}>
            <FileBar />
          <FileUpload />
          </DndProvider>
        </div>
      </div>
    </main>
  );
}
