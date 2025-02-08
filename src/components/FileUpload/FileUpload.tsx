"use client";

import { useDrop } from "react-dnd";
import { IoCloudUploadOutline } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
import { useState } from "react";

export default function FileUpload({
  setShowManageWorkforce,
}: {
  setShowManageWorkforce: (value: boolean) => void;
}) {
  const [uploadingFiles, setUploadingFiles] = useState<
    { name: string; progress: number }[]
  >([]);
  const [uploadedFiles, setUploadedFiles] = useState<
    { name: string; progress: number }[]
  >([]);
  const [isDropDisabled, setIsDropDisabled] = useState(false);

  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: "FILE",
      drop: () => {
        if (isDropDisabled) return;

        const newFile = { name: "DemoData.csv", progress: 0 };
        setUploadingFiles((prev) => [...prev, newFile]);
        setIsDropDisabled(true);

        simulateUpload(newFile);
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
      }),
    }),
    [isDropDisabled]
  );

  const simulateUpload = (file: { name: string; progress: number }) => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadingFiles((prev) =>
        prev.map((f) => (f.name === file.name ? { ...f, progress } : f))
      );

      if (progress >= 100) {
        clearInterval(interval);
        moveFileToUploaded(file);
      }
    }, 300);
  };

  const moveFileToUploaded = (file: { name: string; progress: number }) => {
    setUploadingFiles((prev) => prev.filter((f) => f.name !== file.name));
    setUploadedFiles((prev) => [...prev, file]);
  };

  const removeFile = (fileName: string) => {
    setUploadingFiles((prev) => prev.filter((file) => file.name !== fileName));
    setUploadedFiles((prev) => prev.filter((file) => file.name !== fileName));

    if (uploadingFiles.length + uploadedFiles.length === 1) {
      setIsDropDisabled(false);
    }
  };

  return (
    <div className="w-full max-w-[540px] mx-auto h-[658px] bg-white border border-black rounded-lg p-8 flex flex-col gap-6">
      <div className="w-full text-center text-black font-bold text-lg">
        Upload
      </div>

      <div
        ref={(element) => {
          if (!isDropDisabled && element) {
            drop(element);
          }
        }}
        className={`bg-upload-bg flex flex-col justify-center items-center h-[467px] border-dashed border-2 border-brand-border rounded-lg gap-2 p-6 ${
          isOver ? "bg-gray-100" : ""
        } ${
          isDropDisabled ? "opacity-50 pointer-events-none max-h-[202px]" : ""
        }`}
      >
        <IoCloudUploadOutline className="h-16 w-16 text-brand-brown font-light" />
        <div className="text-black font-bold mt-4">
          Drag and drop files or{" "}
          <span className="text-brand-brown font-bold underline text-base">
            Browse
          </span>
        </div>
        <div className="text-gray-500 font-light text-xs text-center">
          Supported formats: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word, PPT
        </div>
      </div>

      {uploadingFiles.length > 0 && (
        <div className="mt-4">
          <div className="flex justify-between items-center px-4">
            <div className="text-gray-500 font-bold">Uploading</div>
            <div className="text-gray-500 font-bold">
              ({uploadingFiles.length})
            </div>
          </div>
          {uploadingFiles.map((file) => (
            <div
              key={file.name}
              className="flex justify-between items-center mt-2 px-4"
            >
              <span className="text-black font-semibold">{file.name}</span>
              <FaTrash
                className="text-red-600 cursor-pointer"
                onClick={() => removeFile(file.name)}
              />
            </div>
          ))}

          {uploadingFiles.map((file) => (
            <div
              key={file.name}
              className="w-full bg-gray-200 h-2 rounded-full mt-2"
            >
              <div
                className="bg-brand-border h-2 rounded-full transition-all"
                style={{ width: `${file.progress}%` }}
              ></div>
            </div>
          ))}
        </div>
      )}

      {uploadedFiles.length > 0 && (
        <div className="mt-4">
          <div className="flex justify-between items-center px-4">
            <div className="text-gray-500 font-bold">Uploaded</div>
            <div className="text-gray-500 font-bold">
              ({uploadedFiles.length})
            </div>
          </div>
          {uploadedFiles.map((file) => (
            <div
              key={file.name}
              className="flex justify-between items-center mt-2 px-4"
            >
              <span className="text-black font-semibold">{file.name}</span>
              <FaTrash
                className="text-red-600 cursor-pointer"
                onClick={() => removeFile(file.name)}
              />
            </div>
          ))}
        </div>
      )}

      <button
        disabled={uploadedFiles.length === 0}
        onClick={() => setShowManageWorkforce(true)}
        className={`text-black font-bold text-center w-full px-4 py-3 mt-auto rounded-md transition-all duration-200 ${
          uploadedFiles.length > 0
            ? "bg-button-bg hover:bg-highlight cursor-pointer"
            : "bg-gray-300 cursor-not-allowed"
        }`}
      >
        Upload Files
      </button>
    </div>
  );
}
