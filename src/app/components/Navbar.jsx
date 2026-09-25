"use client";

import Link from "next/link";
import { Dumbbell } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = ({ planCount = 0, savedCount = 0 }) => {
  const pathname = usePathname();

  const isWorkoutActive = pathname === "/";
  const isPlanActive = pathname === "/my-plan";

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#090b0f]/95 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#ccff00] text-[#090b0f] transition-transform duration-200 group-hover:scale-105">
            <Dumbbell size={20} strokeWidth={2.8} />
          </div>

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
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-2 md:flex">
          <Link
            href="/"
            className={`rounded-full px-5 py-2 text-sm font-bold uppercase tracking-wide transition-all ${
              isWorkoutActive
                ? "bg-[#ccff00] text-[#090b0f]"
                : "text-zinc-400 hover:bg-white/5 hover:text-white"
            }`}
          >
            Workout
          </Link>

          <Link
            href="/my-plan"
            className={`rounded-full px-5 py-2 text-sm font-bold uppercase tracking-wide transition-all ${
              isPlanActive
                ? "bg-[#ccff00] text-[#090b0f]"
                : "text-zinc-400 hover:bg-white/5 hover:text-white"
            }`}
          >
            My Plan
          </Link>
        </nav>

        {/* Right Side Badges */}
        <div className="flex items-center gap-2">
          {/* Plan Badge */}
          <Link
            href="/my-plan"
            className="flex items-center gap-2 rounded-full bg-[#ccff00] px-3 py-1.5 text-xs font-black uppercase tracking-wide text-[#090b0f] transition-transform hover:scale-105"
          >
            <span>Plan</span>

            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#090b0f] px-1.5 text-[10px] text-[#ccff00]">
              {planCount}
            </span>
          </Link>

          {/* Saved Badge */}
          <Link
            href="/my-plan"
            className="flex items-center gap-2 rounded-full border border-[#ccff00]/60 px-3 py-1.5 text-xs font-black uppercase tracking-wide text-white transition-all hover:border-[#ccff00] hover:text-[#ccff00]"
          >
            <span>Saved</span>

            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-white/5 px-1.5 text-[10px] text-[#ccff00]">
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
