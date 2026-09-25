import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const Banner = () => {
  return (
    <section className="relative overflow-hidden bg-[#090b0f]">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-125 w-125 rounded-full bg-[#ccff00]/5 blur-[120px]" />
      <div className="mx-auto grid min-h-[calc(100vh-72px)] container items-center gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 md:py-20 lg:px-8">
        {/* Left Content */}
        <div className="relative z-10 max-w-2xl">
          {/* Eyebrow */}
          <div className="mb-5 flex items-center gap-3">
            <span className="h-0.5 w-8 bg-[#ccff00]" />

            <p className="text-xs font-black tracking-[0.25em] text-[#ccff00]">
              WORKOUT LIBRARY
            </p>
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Train With Intent.
            <br />
            <span className="text-[#ccff00]">Log Every Set.</span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          {/* CTA */}
          <div className="mt-8">
            <Link
              href="#library"
              className="group inline-flex items-center gap-3 bg-[#ccff00] px-6 py-3.5 text-sm font-black uppercase tracking-wide text-[#090b0f] transition-all duration-200 hover:gap-4 hover:bg-[#d9ff4d]"
            >
              <span>Browse Workouts</span>

              <ArrowUpRight
                size={18}
                strokeWidth={3}
                className="transition-transform duration-200 group-hover:rotate-45"
              />
            </Link>
          </div>

          {/* Small Stats */}
          <div className="mt-10 flex items-center gap-6 border-t border-white/10 pt-5">
            <div>
              <p className="text-xl font-black text-white">50+</p>

              <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-zinc-500">
                Workouts
              </p>
            </div>

            <div className="h-8 w-px bg-white/10" />

            <div>
              <p className="text-xl font-black text-white">7</p>

              <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-zinc-500">
                Days tracked
              </p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex min-h-90 items-center justify-end md:min-h-125">
          {/* Image Glow */}
          <div className="absolute h-72 w-72 rounded-full bg-[#ccff00]/10 blur-[100px] sm:h-96 sm:w-96" />

          <Image
            src="/images/banner.png"
            alt="FitLog workout illustration"
            width={600}
            height={600}
            priority
            className="relative z-10 h-auto w-[85%] max-w-130 object-contain drop-shadow-[0_20px_50px_rgba(204,255,0,0.08)]"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
