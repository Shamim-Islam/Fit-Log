"use client";

import Link from "next/link";
import { Dumbbell } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Banner from "./Banner";

const Navbar = ({ planCount = 0, savedCount = 0 }) => {
  const pathname = usePathname();

  const isWorkoutActive = pathname === "/";
  const isPlanActive = pathname === "/my-plan";

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#090b0f]/95 backdrop-blur-md py-2">
      <div className="mx-auto flex h-18 container items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2.5">
          <Image
            src="/images/logo.png"
            alt="Fit log logo"
            width={35}
            height={30}
            className="transition-transform duration-200 group-hover:scale-105"
          ></Image>

          <div className="leading-none">
            <p className="text-lg font-black tracking-tight text-white">
              FIT<span className="text-[#ccff00]">LOG</span>
            </p>

            <p className="mt-1 text-[8px] font-bold tracking-[0.25em] text-zinc-500">
              TRAIN • LOG • GROW
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-3 md:flex">
          <Link
            href="/"
            className={`rounded-full px-5 py-2 text-sm font-semibold tracking-wide transition-all ${
              isWorkoutActive
                ? "text-[#ccff00] bg-[#273101]"
                : "text-zinc-400 hover:bg-white/5 hover:text-white"
            }`}
          >
            Workout
          </Link>

          <Link
            href="/my-plan"
            className={`rounded-full px-5 py-2 text-sm font-semibold tracking-wide transition-all ${
              isPlanActive
                ? "bg-[#273101] text-[#ccff00]"
                : "text-zinc-400 hover:bg-white/5 hover:text-white"
            }`}
          >
            My Plan
          </Link>
        </nav>

        {/* Right Side Badges */}
        <div className="flex items-center gap-1 md:gap-2">
          {/* Plan Badge */}
          <Link
            href="/my-plan"
            className="flex items-center gap-2 px-3 py-1.5 text-[16px] tracking-wide hover:scale-105 hover:text-[#ccff00]"
          >
            <span>Plan</span>

            <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-[#ccff00] px-1.5 text-[15px] font-black text-[#090b0f] ">
              {planCount}
            </span>
          </Link>

          {/* Saved Badge */}
          <Link
            href="/my-plan"
            className="flex items-center gap-2 px-3 py-1.5 text-[16px] tracking-wide text-white transition-all hover:text-[#ccff00] hover:scale-105"
          >
            <span>Saved</span>

            <span className="flex h-7 min-w-7 items-center justify-center rounded-full bg-white/5 px-1.5 text-[15px] text-[#ccff00] font-bold">
              {savedCount}
            </span>
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="border-t border-white/5 px-4 py-2 md:hidden">
        <nav className="mx-auto flex max-w-7xl items-center gap-2">
          <Link
            href="/"
            className={`flex-1 rounded-lg py-2 text-center text-xs font-bold uppercase tracking-wide ${
              isWorkoutActive ? "bg-[#ccff00] text-[#090b0f]" : "text-zinc-400"
            }`}
          >
            Workout
          </Link>

          <Link
            href="/my-plan"
            className={`flex-1 rounded-lg py-2 text-center text-xs font-bold uppercase tracking-wide ${
              isPlanActive ? "bg-[#ccff00] text-[#090b0f]" : "text-zinc-400"
            }`}
          >
            My Plan
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
