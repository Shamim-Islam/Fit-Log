"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useFitLog } from "../../context/FitLogContext";

const Navbar = () => {
  const pathname = usePathname();

  const { todayPlan, savedWorkouts } = useFitLog();

  const planCount = todayPlan.length;
  const savedCount = savedWorkouts.length;

  const isWorkoutActive = pathname === "/" || pathname.startsWith("/workouts");

  const isPlanActive = pathname === "/my-plan";

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#090b0f]/95 backdrop-blur-md py-2">
      <div className="mx-auto flex h-18 container items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2.5">
          <Image
            src="/images/logo.png"
            alt="Fit log logo"
            width={25}
            height={20}
            className="transition-transform duration-200 group-hover:scale-105"
          ></Image>

          <div className="leading-none">
            <p className="font-oswald text-2xl font-black tracking-tight text-white">
              FIT<span className="text-[#ccff00]">LOG</span>
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
            className="flex items-center gap-2 px-3 py-1.5 text-[15px] tracking-wide hover:scale-105 hover:text-[#ccff00]"
          >
            <span>Plan</span>

            <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-[#ccff00] px-1.5 text-[14px] font-black text-[#090b0f] ">
              {planCount}
            </span>
          </Link>

          {/* Saved Badge */}
          <Link
            href="/my-plan"
            className="flex items-center gap-2 px-3 py-1.5 text-[15px] tracking-wide text-white transition-all hover:text-[#ccff00] hover:scale-105"
          >
            <span>Saved</span>

            <span className="flex h-7 min-w-7 items-center justify-center rounded-full bg-white/5 px-1.5 text-[14px] text-[#ccff00] font-bold">
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
