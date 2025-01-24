"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { GalleryImage } from "@/types/gallery";
import Image from "next/image";

interface GalleryProps {
  images: GalleryImage[];
  isOpen: boolean;
  onClose: () => void;
  location: string;
}

export default function Gallery({
  images,
  isOpen,
  onClose,
  location,
}: GalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!isOpen) return null;

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="fixed right-0 top-0 h-screen w-[600px] bg-white shadow-xl transition-all duration-500 ease-in-out transform">
      <div className="relative h-full flex flex-col">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-semibold text-black">{location}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close gallery"
          >
            <X className="w-6 h-6 text-black" />
          </button>
        </div>

        <div className="flex-1 relative">
          <div className="absolute inset-0 m-8">
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].caption}
              className="w-full object-cover"
              width={600}
              height={400}
            />
          </div>
        </div>

        <button
          onClick={handlePrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors text-black"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors text-black"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="absolute bottom-8 left-8 right-8">
          <div className="bg-white p-4 shadow-lg rounded-lg">
            <p className="text-lg text-center text-black">
              {images[currentIndex].caption}
            </p>
          </div>
        </div>

        <div className="absolute top-20 right-8 bg-white px-3 py-1 rounded-full shadow-lg text-black">
          <span className="text-sm">
            {currentIndex + 1} / {images.length}
          </span>
        </div>
      </div>
    </div>
  );
}
