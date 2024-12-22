"use client";

import { useEffect, useState } from "react";
import InteractiveMap from "@/components/InteractiveMap/InteractiveMap";
import Image from "next/image";
import SvgMap from "../../public/map.svg";

export default function Home() {
  return (
    <main className="h-screen overflow-x-hidden">
      <div className="py-8">
        <h1 className="text-4xl font-bold text-[#8B4513]">SHIFTED</h1>
        <div className="mt-16 text-center text-black">
          <h2 className="text-5xl font-bold">Shift the way you work.</h2>
          <p className="mt-6 text-xl">
            Revolutionizing how businesses connect with top-tier gig talent.
            <br />
            Sign up now to stay in the loop as we redefine the future of work.
          </p>

          <div className="mt-8">
            <p className="mb-2 text-sm">Join our exclusive mailing list</p>
            <div className="flex justify-center gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-72 rounded-lg border border-input bg-background px-4 py-2"
              />
              <div>Get Started</div>
            </div>
          </div>
        </div>
        <div className="w-screen mt-12">
          <InteractiveMap />
        </div>
      </div>
    </main>
  );
}
