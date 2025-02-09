"use client";

import React, { useState, useEffect } from "react";
import {
  FaRegEye,
  FaRegFilePowerpoint,
  FaRegTrashAlt,
  FaFilePowerpoint,
} from "react-icons/fa";
import { FaFileCirclePlus } from "react-icons/fa6";

interface DashboardViewProps {
  triggerPopup: boolean;
  setTriggerPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function DashboardView({
  triggerPopup,
  setTriggerPopup,
}: DashboardViewProps) {
  const [isPopupVisible, setPopupVisible] = useState(false);

  useEffect(() => {
    if (triggerPopup) {
      setPopupVisible(true);
      setTriggerPopup(false);
    }
  }, [triggerPopup, setTriggerPopup]);

  return (
    <div className="relative">
      <div className="w-[1350px] h-[850px] pt-8 pr-4 pb-8 bg-white rounded-lg border text-black border-black flex flex-col justify-start align-middle">
        <div className="pl-8 text-2xl">
          Dashboard | <span className="text-brand-brown">Vortel Inc.</span>
        </div>
        <div className="pl-8 mt-4 text-xl">Manage Your Work Force</div>
        <div className="pl-4 mt-2 flex flex-col gap-2">
          <div className="flex justify-between pl-4 pr-4 text-gray-500">
            <div className="w-1/5">Employee(s)</div>
            <div className="w-1/5">Title</div>
            <div className="w-1/5">Department</div>
            <div className="w-1/5">Status</div>
            <div className="w-1/5 text-end">Actions</div>
          </div>
          <div className="flex justify-between bg-select pl-4 pr-4 py-2 items-center">
            <div className="w-1/5">Samuel L. Ement</div>
            <div className="w-1/5">Software Engineer Intern</div>
            <div className="w-1/5">IT Department</div>
            <div className="w-1/5 flex align-middle items-center gap-2">
              <FaRegFilePowerpoint className="text-alert-red" />
              Error, please recheck y...
            </div>
            <div className="w-1/5 flex justify-end items-center gap-4">
              <div
                onClick={() => setPopupVisible(true)}
                className="flex items-center gap-2 hover:cursor-pointer"
              >
                <FaRegEye className="text-black" />
                View
              </div>
              <div className="flex items-center gap-2 hover:cursor-pointer">
                <FaRegTrashAlt className="text-alert-red" />
                Delete
              </div>
            </div>
          </div>
          <div className="flex justify-between hover:bg-[#F8EFEC] pl-4 pr-4 py-2 items-center">
            <div className="w-1/5">Lurch Schpellchek</div>
            <div className="w-1/5">IT Technician I</div>
            <div className="w-1/5">IT Department</div>
            <div className="w-1/5 flex align-middle items-center gap-2">
              <FaRegFilePowerpoint className="text-black" />
              Document(s) cleared
            </div>
            <div className="w-1/5 flex justify-end items-center gap-4">
              <div className="flex items-center gap-2 hover:cursor-pointer">
                <FaRegEye className="text-black" />
                View
              </div>
              <div className="flex items-center gap-2 hover:cursor-pointer">
                <FaRegTrashAlt className="text-alert-red" />
                Delete
              </div>
            </div>
          </div>
          <div className="flex justify-between hover:bg-[#F8EFEC] pl-4 pr-4 py-2 items-center">
            <div className="w-1/5">Gordon Norman</div>
            <div className="w-1/5">Welding Supervisor</div>
            <div className="w-1/5">Operations Department</div>
            <div className="w-1/5 flex align-middle items-center gap-2">
              <FaFilePowerpoint className="text-black" />
              Document(s) pending...
            </div>
            <div className="w-1/5 flex justify-end items-center gap-4">
              <div className="flex items-center gap-2 hover:cursor-pointer">
                <FaRegEye className="text-black" />
                View
              </div>
              <div className="flex items-center gap-2 hover:cursor-pointer">
                <FaRegTrashAlt className="text-alert-red" />
                Delete
              </div>
            </div>
          </div>
          <div className="flex justify-between hover:bg-[#F8EFEC] pl-4 pr-4 py-2 items-center">
            <div className="w-1/5">Hermann P. Schnitzel</div>
            <div className="w-1/5">Project Manager</div>
            <div className="w-1/5">Project Department</div>
            <div className="w-1/5 flex align-middle items-center gap-2">
              <FaRegFilePowerpoint className="text-alert-red" />
              Error, please recheck y...
            </div>
            <div className="w-1/5 flex justify-end items-center gap-4">
              <div className="flex items-center gap-2 hover:cursor-pointer">
                <FaRegEye className="text-black" />
                View
              </div>
              <div className="flex items-center gap-2 hover:cursor-pointer">
                <FaRegTrashAlt className="text-alert-red" />
                Delete
              </div>
            </div>
          </div>
          <div className="flex justify-between hover:bg-[#F8EFEC] pl-4 pr-4 py-2 items-center">
            <div className="w-1/5">Ursula Gurnmeister</div>
            <div className="w-1/5">Marketing Coordinator</div>
            <div className="w-1/5">Sales Department</div>
            <div className="w-1/5 flex align-middle items-center gap-2">
              <FaFilePowerpoint className="text-black" />
              Document(s) pending...
            </div>
            <div className="w-1/5 flex justify-end items-center gap-4">
              <div className="flex items-center gap-2 hover:cursor-pointer">
                <FaRegEye className="text-black" />
                View
              </div>
              <div className="flex items-center gap-2 hover:cursor-pointer">
                <FaRegTrashAlt className="text-alert-red" />
                Delete
              </div>
            </div>
          </div>
          <div className="flex justify-between hover:bg-[#F8EFEC] pl-4 pr-4 py-2 items-center">
            <div className="w-1/5">Eleanor Fant</div>
            <div className="w-1/5">Sales Representative</div>
            <div className="w-1/5">Sales Department</div>
            <div className="w-1/5 flex align-middle items-center gap-2">
              <FaFileCirclePlus className="text-black" />
              Please add your docu...
            </div>
            <div className="w-1/5 flex justify-end items-center gap-4">
              <div className="flex items-center gap-2 hover:cursor-pointer">
                <FaRegEye className="text-black" />
                View
              </div>
              <div className="flex items-center gap-2 hover:cursor-pointer">
                <FaRegTrashAlt className="text-alert-red" />
                Delete
              </div>
            </div>
          </div>
          <div className="flex justify-between hover:bg-[#F8EFEC] pl-4 pr-4 py-2 items-center">
            <div className="w-1/5">Lance Bogrol</div>
            <div className="w-1/5">Product Designer</div>
            <div className="w-1/5">R&D Department</div>
            <div className="w-1/5 flex align-middle items-center gap-2">
              <FaRegFilePowerpoint className="text-black" />
              Document(s) cleared
            </div>
            <div className="w-1/5 flex justify-end items-center gap-4">
              <div className="flex items-center gap-2 hover:cursor-pointer">
                <FaRegEye className="text-black" />
                View
              </div>
              <div className="flex items-center gap-2 hover:cursor-pointer">
                <FaRegTrashAlt className="text-alert-red" />
                Delete
              </div>
            </div>
          </div>
        </div>
      </div>
      {isPopupVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white border border-black p-6 rounded-lg shadow-lg w-[400px] text-center">
            <h2 className="text-xl font-bold mb-4 text-alert-red">
              Warning: Samuel L. Ement License
            </h2>
            <p className="mb-4 text-black">
              The License Uploaded Is Near Expiry:{" "}
              <span className="text-alert-red font-bold">2025/05/17.</span>
            </p>
            <p className="mb-4 text-black font-semibold">
              Please Take Action Accordingly.
            </p>
            <button
              className="w-full px-4 py-3 bg-button-bg border-2 border-black rounded-md hover:cursor-pointer hover:bg-highlight ease-in-out duration-200 text-black"
              onClick={() => setPopupVisible(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
