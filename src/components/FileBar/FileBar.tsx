"use client";

import React, { useState } from "react";
import { useDrag } from "react-dnd";
import Papa from "papaparse";
import { FaFileInvoice } from "react-icons/fa";

export default function FileBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [csvData, setCsvData] = useState<string[][]>([]);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "FILE",
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const fetchCSV = async () => {
    try {
      const response = await fetch("/data/VortelDemoEmployeeSheet.csv");
      const text = await response.text();
      const result = Papa.parse(text, { skipEmptyLines: true });
      setCsvData(result.data as string[][]);
      setIsOpen(true);
    } catch (error) {
      console.error("Error fetching CSV file:", error);
    }
  };

  return (
    <div className="w-full h-16 py-6 bg-upload-bg flex items-center p-2 border border-t-black border-b-black">
      <div
        ref={drag}
        className={`cursor-grab p-2 rounded-md bg-white shadow-md ${
          isDragging ? "opacity-50" : "opacity-100"
        }`}
        onDoubleClick={fetchCSV}
        title="DemoData.csv"
      >
        <FaFileInvoice className="text-xl text-black" />
      </div>

      <div className="text-black text-base ml-4">
        &larr; Double click to view the Data from CSV file, and then drag and
        drop in the Upload space see Vortel work.
      </div>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white border p-5 rounded-md m-auto overflow-auto text-black">
            <h2 className="text-lg font-bold mb-2">CSV Data</h2>
            <table className="w-full border-collapse border border-black">
              <tbody>
                {csvData.map((row, i) => (
                  <tr key={i} className="border-b">
                    {row.map((cell, j) => (
                      <td key={j} className="border px-2 py-1">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              className="w-full mt-4 py-2 bg-button-bg border-2 border-black rounded-md hover:cursor-pointer hover:bg-highlight ease-in-out duration-200"
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
