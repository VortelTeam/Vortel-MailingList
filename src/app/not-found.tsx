"use client";

import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100 text-centers px-4">
      <h1 className="text-brand-brown xs:text-6xl font-bold font-otomanopee text-6xl mb-4 text-center">
        404 - Page Not Found
      </h1>
      <p className="mb-6 text-brand-brown">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <button
        onClick={() => router.push("/")}
        className="text-black w-full xs:w-auto px-4 py-3 bg-button-bg border-2 border-black rounded-md hover:cursor-pointer hover:bg-highlight ease-in-out duration-200"
      >
        Go Back to Home
      </button>
    </div>
  );
}
