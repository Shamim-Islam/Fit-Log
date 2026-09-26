import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="sticky top-0 z-50 border-t border-white/5 bg-[#090b0f]/95 backdrop-blur-md py-2">
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

        {/* Right Side portion */}
        <div className="flex items-center gap-1 md:gap-2">
          <p className="text-[12px] text-[#6B7280]">
            © 2026 FitLog — Workout Library. Train hard, log honest.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
