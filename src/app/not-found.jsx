import Link from "next/link";
import { Activity, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#090b0f] px-4 text-center text-white">
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-[#ccff00]/30 bg-[#101419] text-[#ccff00]">
        <Activity size={40} />
      </div>

      <h1 className="font-oswald text-5xl font-black uppercase tracking-tighter text-[#ccff00] sm:text-9xl">
        404
      </h1>

      <h2 className=" font-oswald mt-4 text-2xl font-black uppercase tracking-tight sm:text-3xl">
        Page Not Found
      </h2>

      <p className="mt-4 max-w-md text-sm leading-6 text-zinc-500">
        The page you are looking for doesn&apos;t exist or has been moved. Let&apos;s get
        you back to your workout plan.
      </p>

      <Link
        href="/"
        className="mt-8 flex items-center gap-2 rounded bg-[#ccff00] px-6 py-3 text-xs font-black uppercase text-[#090b0f] transition hover:bg-white"
      >
        <Home size={16} />
        Back to Home
      </Link>
    </main>
  );
}
