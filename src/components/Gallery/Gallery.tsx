"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { GalleryImage } from "@/types";

interface GalleryProps {
  images: GalleryImage[];
  onClose: () => void;
}

export function Gallery({ images, onClose }: GalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="fixed right-0 top-0 h-full w-[600px] bg-background shadow-lg transition-transform duration-500 ease-in-out">
      <div onClick={onClose} className="absolute right-4 top-4">
        <X className="h-6 w-6" />
      </div>
      <div className="relative h-full">
        <div className="relative h-[80%] w-full">
          <img
            src={images[currentIndex].url}
            alt={images[currentIndex].caption}
            className="h-full w-full object-cover"
          />
          <div className="absolute bottom-4 left-0 right-0 text-center text-white">
            <p className="text-lg font-medium">
              {images[currentIndex].caption}
            </p>
          </div>
        </div>
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-4">
          <div onClick={previousImage} className="rounded-full">
            <ChevronLeft className="h-4 w-4" />
          </div>
          <div onClick={nextImage} className="rounded-full">
            <ChevronRight className="h-4 w-4" />
          </div>
        </div>
      </div>
    </div>
  );
}
