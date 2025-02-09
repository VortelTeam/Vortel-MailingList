"use client";

import React, { useState } from "react";
import {
  FaRegFilePdf,
  FaRegTrashAlt,
  FaRegFileImage,
  FaRegFileExcel,
} from "react-icons/fa";
import { FaBackwardStep, FaForwardStep } from "react-icons/fa6";
import { IoCloudUploadOutline } from "react-icons/io5";

export default function ManageWorkforce({
  setShowDashboardView,
  setTriggerPopup,
}: {
  setShowDashboardView: (value: boolean) => void;
  setTriggerPopup: (value: boolean) => void;
}) {
  const [parseContinue, setParseContinue] = useState(false);

  const parseAndContinue = () => {
    setParseContinue(true);
  };

  return (
    <div className="w-[1350px] pt-4 pr-4 pb-4 bg-white rounded-lg border border-black flex justify-between align-middle">
      <div className="flex-1 pr-8">
        <div className="pl-4">
          <div className="text-2xl text-black">Adding Employee Documents</div>
          <div className="text-sm text-gray-500">
            Keep track of all the documents relating to each employee
          </div>
        </div>
        <div className="text-black mt-20 gap-2 flex flex-col pl-2">
          <div className="flex justify-between text-gray-500">
            <div className="w-1/2 pl-2">Employee(s)</div>
            <div className="w-1/2">Title</div>
          </div>
          <div className="flex justify-between bg-select py-2">
            <div className="w-1/2 pl-2">Samuel L. Ement</div>
            <div className="w-1/2">Software Engineer Intern</div>
          </div>
          <div className="flex justify-between">
            <div className="w-1/2 pl-2">Lurch Schpellchek</div>
            <div className="w-1/2">IT Technician I</div>
          </div>
          <div className="flex justify-between">
            <div className="w-1/2 pl-2">Gordon Norman</div>
            <div className="w-1/2">Welding Supervisor</div>
          </div>
          <div className="flex justify-between">
            <div className="w-1/2 pl-2">Hermann P. Schnitzel</div>
            <div className="w-1/2">Project Manager</div>
          </div>
          <div className="flex justify-between">
            <div className="w-1/2 pl-2">Ursula Gurnmeister</div>
            <div className="w-1/2">Marketing Coordinator</div>
          </div>
          <div className="flex justify-between">
            <div className="w-1/2 pl-2">Eleanor Fant</div>
            <div className="w-1/2">Sales Representative</div>
          </div>
          <div className="flex justify-between">
            <div className="w-1/2 pl-2">Lance Bogrol</div>
            <div className="w-1/2">Product Designer</div>
          </div>
        </div>
      </div>
      <div className="w-[770px] h-full bg-[#F1F1F1] rounded-lg border border-black text-black p-4">
        {!parseContinue ? (
          <>
            <div className="flex border-b border-black pb-2 gap-4 text-lg">
              <div className="cursor-pointer">
                Upload all the necessary files here
              </div>
              <div
                className="cursor-pointer text-gray-500 hover:text-black"
                onClick={() => setParseContinue(true)}
              >
                Output | Form
              </div>
            </div>
            <div className="pt-2">
              <div className="text-lg">ID Verification</div>
              <div className="flex w-full mt-2">
                <div className="w-2/3 opacity-50 pointer-events-none bg-upload-bg flex flex-col justify-center items-center border-dashed border-2 border-brand-border rounded-lg gap-2 p-6">
                  <IoCloudUploadOutline className="h-16 w-16 text-brand-brown font-light" />
                  <div className="text-black font-bold mt-4 text-center">
                    Drag and drop files or{" "}
                    <span className="text-brand-brown font-bold underline text-base">
                      Browse
                    </span>
                  </div>
                  <div className="text-gray-500 font-light text-xs text-center">
                    Supported formats: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word,
                    PPT
                  </div>
                </div>
                <div className="ml-2 w-1/3 flex flex-col gap-2">
                  <div className="text-gray-500 font-bold text-sm">
                    Upload 2 Files
                  </div>
                  <div className="bg-white border border-brand-border rounded-md p-2 flex justify-between">
                    <div className="text-sm">Passport.pdf</div>
                    <div className="flex justify-between items-center">
                      <FaRegTrashAlt className="text-alert-red text-sm cursor-pointer hover:text-red-900 transition-all ease-in-out" />
                    </div>
                  </div>
                  <div className="bg-white border border-brand-border rounded-md p-2 flex justify-between">
                    <div className="text-sm">LicenseImage.jpeg</div>
                    <div className="flex justify-between items-center">
                      <FaRegTrashAlt className="text-alert-red text-sm cursor-pointer hover:text-red-900 transition-all ease-in-out" />
                    </div>
                  </div>
                  <div className="text-gray-500 font-bold text-sm">
                    Max upload Limit Reached
                  </div>
                </div>
              </div>
              <div className="flex w-full mt-4 flex-col">
                <div className="text-lg">Employment Status</div>
                <div className="flex justify-between align-middle items-center mt-2">
                  <div className="text-base">CanadianCitizenship.pdf</div>
                  <div>
                    <FaRegTrashAlt className="text-alert-red text-base cursor-pointer hover:text-red-900 transition-all ease-in-out" />
                  </div>
                </div>
              </div>
              <div className="flex w-full mt-4 flex-col">
                <div className="text-lg">Employment Offer Letter</div>
                <div className="flex justify-between align-middle items-center mt-2">
                  <div className="text-base">Vortel_Offer_Letter2024.pdf</div>
                  <div>
                    <FaRegTrashAlt className="text-alert-red text-base cursor-pointer hover:text-red-900 transition-all ease-in-out" />
                  </div>
                </div>
              </div>
              <div className="text-lg mt-4">Additional Document(s)</div>
              <div className="flex w-full mt-2">
                <div className="w-2/3 pointer-events-none bg-upload-bg flex flex-col justify-center items-center border-dashed border-2 border-brand-border rounded-lg gap-2 p-6">
                  <IoCloudUploadOutline className="h-16 w-16 text-brand-brown font-light" />
                  <div className="text-black font-bold mt-4 text-center">
                    Drag and drop files or{" "}
                    <span className="text-brand-brown font-bold underline text-base">
                      Browse
                    </span>
                  </div>
                  <div className="text-gray-500 font-light text-xs text-center">
                    Supported formats: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word,
                    PPT
                  </div>
                </div>
                <div className="ml-2 w-1/3 flex flex-col gap-2">
                  <div className="text-gray-500 font-bold text-sm">
                    Upload Up To 5 Files
                  </div>
                  <div className="bg-white border border-brand-border rounded-md p-2 flex justify-between">
                    <div className="text-sm">VortelOnboardingFile.pdf</div>
                    <div className="flex justify-between items-center">
                      <FaRegTrashAlt className="text-alert-red text-sm cursor-pointer hover:text-red-900 transition-all ease-in-out" />
                    </div>
                  </div>
                  <div className="bg-white border border-brand-border rounded-md p-2 flex justify-between">
                    <div className="text-sm">TaxReturn_2025.pdf</div>
                    <div className="flex justify-between items-center">
                      <FaRegTrashAlt className="text-alert-red text-sm cursor-pointer hover:text-red-900 transition-all ease-in-out" />
                    </div>
                  </div>
                  <div className="bg-white border border-brand-border rounded-md p-2 flex justify-between">
                    <div className="text-sm">Timesheet_Record.csv</div>
                    <div className="flex justify-between items-center">
                      <FaRegTrashAlt className="text-alert-red text-sm cursor-pointer hover:text-red-900 transition-all ease-in-out" />
                    </div>
                  </div>
                  <div className="bg-white border border-brand-border rounded-md p-2 flex justify-between">
                    <div className="text-sm">Medical_Record.pdf</div>
                    <div className="flex justify-between items-center">
                      <FaRegTrashAlt className="text-alert-red text-sm cursor-pointer hover:text-red-900 transition-all ease-in-out" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between align-middle items-center mt-4">
                <div className="text-base text-gray-500">
                  Samuel's documents can 100% complete the form
                </div>
                <div
                  onClick={parseAndContinue}
                  className="flex px-4 py-2 align-middle items-center bg-button-bg border-2 border-black rounded-lg hover:cursor-pointer hover:bg-highlight ease-in-out duration-200"
                >
                  Parse and Continue
                  <FaForwardStep className="text-lg" />
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex border-b border-black pb-2 gap-4 text-lg">
              <div
                className="cursor-pointer text-gray-500 hover:text-black"
                onClick={() => setParseContinue(false)}
              >
                Upload all the necessary files here
              </div>
              <div className="text-black cursor-pointer">Output | Form</div>
            </div>
            <div className="pt-2">
              <div className="text-lg">General Information</div>
              <div className="flex w-full mt-2 justify-between">
                <div>
                  <div className="text-base">First Name</div>
                  <div className="mt-1 text-base py-2 px-2 w-36 border text-start border-black rounded-lg">
                    Samuel
                  </div>
                </div>
                <div>
                  <div className="text-base">Middle Initial</div>
                  <div className="mt-1 text-base py-2 px-2 w-full border text-start border-black rounded-lg">
                    L
                  </div>
                </div>
                <div>
                  <div className="text-base">Last Name</div>
                  <div className="mt-1 text-base py-2 px-2 w-36 border text-start  border-black rounded-lg">
                    Ement
                  </div>
                </div>
                <div>
                  <div className="text-base">Email Address</div>
                  <div className="mt-1 text-base py-2 px-2 w-60 border text-start border-black rounded-lg">
                    samuelem@gmail.com
                  </div>
                </div>
              </div>
              <div className="flex w-full mt-2 justify-between">
                <div>
                  <div className="text-base">Phone Number</div>
                  <div className="flex gap-3">
                    <div className="mt-1 text-base py-2 px-4 w-fit border text-start border-black rounded-lg">
                      1
                    </div>
                    <div className="mt-1 text-base py-2 px-4 w-fit border text-start border-black rounded-lg">
                      905-712-7718
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-base">Street Address</div>
                  <div className="mt-1 text-base py-2 px-2 w-48 border text-start border-black rounded-lg">
                    2234 Hugin Street
                  </div>
                </div>
                <div>
                  <div className="text-base">City</div>
                  <div className="mt-1 text-base py-2 px-2 w-36 border text-start  border-black rounded-lg">
                    Hamilton
                  </div>
                </div>
                <div>
                  <div className="text-base">Postal Code</div>
                  <div className="mt-1 text-base py-2 px-2 w-32 border text-start border-black rounded-lg">
                    L8K 1A3
                  </div>
                </div>
              </div>
              <div className="text-lg mt-4">Specific Information</div>
              <div className="flex w-full mt-2 justify-between">
                <div>
                  <div className="text-base">Social Insurance Number</div>
                  <div className="mt-1 text-base py-2 px-2 w-full border text-start border-black rounded-lg">
                    968-555-123
                  </div>
                </div>
                <div>
                  <div className="text-base">Vaccine: 1st Dose</div>
                  <div className="mt-1 text-base py-2 px-2 w-full border text-start border-black rounded-lg">
                    2021/05/12
                  </div>
                </div>
                <div>
                  <div className="text-base">Vaccine: 2nd Dose</div>
                  <div className="mt-1 text-base py-2 px-2 w-36 border text-start  border-black rounded-lg">
                    2021/10/09
                  </div>
                </div>
                <div>
                  <div className="text-base">Employment Type</div>
                  <div className="mt-1 text-base py-2 px-2 w-54 border text-start border-black rounded-lg">
                    Permanent
                  </div>
                </div>
              </div>
              <div className="mt-2">
                Identity Verification |{" "}
                <span className="text-sm text-gray-500">
                  Please Upload 2 Government issued ID’s (Drivers License,
                  Passport...)
                </span>
              </div>
              <div className="flex justify-between align-middle items-center mt-2 gap-4">
                <div className="w-1/2 flex gap-2 justify-start align-middle items-center border border-black px-2 py-2 rounded-lg">
                  <span>
                    <FaRegFilePdf className="text-gray-500" />
                  </span>
                  <span>Passport.pdf</span>
                  <span className="ml-auto text-gray-500">1/2</span>
                </div>
                <div className="w-1/2 flex gap-2 justify-start align-middle items-center border border-black px-2 py-2 rounded-lg">
                  <span>
                    <FaRegFileImage className="text-gray-500" />
                  </span>
                  <span>License.jpeg</span>
                  <span className="ml-auto text-gray-500">2/2</span>
                </div>
              </div>
              <div className="mt-2">
                Employment Status |{" "}
                <span className="text-sm text-gray-500">
                  Please upload a document that shows your Employment Status
                </span>
              </div>
              <div className="flex mt-2">
                <div className="w-full flex gap-2 justify-start align-middle items-center border border-black px-2 py-2 rounded-lg">
                  <span>
                    <FaRegFilePdf className="text-gray-500" />
                  </span>
                  <span>CanadianCitizenship.pdf</span>
                  <span className="ml-auto text-gray-500">1/1</span>
                </div>
              </div>
              <div className="mt-2">Employment Offer Letter</div>
              <div className="flex mt-2">
                <div className="w-full flex gap-2 justify-start align-middle items-center border border-black px-2 py-2 rounded-lg">
                  <span>
                    <FaRegFilePdf className="text-gray-500" />
                  </span>
                  <span>Vortel_Offer_Letter2024.pdf</span>
                  <span className="ml-auto text-gray-500">1/1</span>
                </div>
              </div>
              <div className="mt-2">Additional Document(s)</div>
              <div className="flex flex-col justify-between mt-2 gap-4">
                <div className="flex w-full gap-4 justify-between align-middle items-center">
                  <div className="w-1/2 flex gap-2 justify-start align-middle items-center border border-black px-2 py-2 rounded-lg">
                    <span>
                      <FaRegFilePdf className="text-gray-500" />
                    </span>
                    <span>VortelOnboardingFile.pdf</span>
                    <span className="ml-auto text-gray-500">1/4</span>
                  </div>
                  <div className="w-1/2 flex gap-2 justify-start align-middle items-center border border-black px-2 py-2 rounded-lg">
                    <span>
                      <FaRegFilePdf className="text-gray-500" />
                    </span>
                    <span>TaxReturn_2025.pdf</span>
                    <span className="ml-auto text-gray-500">2/4</span>
                  </div>
                </div>
                <div className="flex w-full gap-4 justify-between align-middle items-center">
                  <div className="w-1/2 flex gap-2 justify-start align-middle items-center border border-black px-2 py-2 rounded-lg">
                    <span>
                      <FaRegFileExcel className="text-gray-500" />
                    </span>
                    <span>Timesheet_Record.csv</span>

                    <span className="ml-auto text-gray-500">3/4</span>
                  </div>
                  <div className="w-1/2 flex gap-2 justify-start align-middle items-center border border-black px-2 py-2 rounded-lg">
                    <span>
                      <FaRegFilePdf className="text-gray-500" />
                    </span>
                    <span>Medical_Record.pdf</span>
                    <span className="ml-auto text-gray-500">4/4</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between align-middle items-center mt-4">
                <div
                  onClick={() => setParseContinue(false)}
                  className="flex px-4 py-2 align-middle items-center bg-button-bg border-2 border-black rounded-lg hover:cursor-pointer hover:bg-highlight ease-in-out duration-200"
                >
                  <FaBackwardStep className="text-lg" />
                  Back to Upload
                </div>
                <div
                  onClick={() => {
                    setShowDashboardView(true);
                    setTimeout(() => {
                      setTriggerPopup(true);
                    }, 1000);
                  }}
                  className="flex px-4 py-2 align-middle items-center bg-button-bg border-2 border-black rounded-lg hover:cursor-pointer hover:bg-highlight ease-in-out duration-200"
                >
                  Finish and Continue
                  <FaForwardStep className="text-lg" />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
