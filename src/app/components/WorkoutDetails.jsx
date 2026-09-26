"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Bookmark,
  Check,
  Clock3,
  Dumbbell,
  Flame,
  Plus,
  Star,
} from "lucide-react";

import { useFitLog } from "@/context/FitLogContext";

const WorkoutDetails = ({ workout }) => {
  const { addToPlan, saveForLater } = useFitLog();

  const currentId = Number(workout.id);

  // 1-4 => 1-4
  // 5-8 => 5-8
  // 9-12 => 9-12
  const startNumber = Math.floor((currentId - 1) / 4) * 4 + 1;

  const navigationNumbers = Array.from(
    { length: 4 },
    (_, index) => startNumber + index,
  );

  return (
    <main className="min-h-screen bg-[#090b0f] text-white">
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Back */}
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-zinc-500 transition hover:text-[#ccff00]"
        >
          <ArrowLeft size={16} />
          Back to Library
        </Link>

        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          {/* IMAGE */}
          <div className="relative overflow-hidden border border-white/10 bg-[#101419]">
            <div className="relative aspect-[4/3]">
              <Image
                src={workout.image}
                alt={workout.name}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              {/* Dynamic Image Navigation */}
              <div className="absolute bottom-5 left-5 flex items-center gap-5">
                {navigationNumbers.map((number, index) => {
                  const isActive = number === currentId;

                  return (
                    <div key={number} className="flex items-center gap-5">
                      <Link
                        href={`/workouts/${number}`}
                        className={`text-xs font-black transition ${
                          isActive
                            ? "text-white"
                            : "text-zinc-600 hover:text-white"
                        }`}
                      >
                        {String(number).padStart(2, "0")}
                      </Link>

                      {index < navigationNumbers.length - 1 && isActive && (
                        <span className="h-0.5 w-5 bg-[#ccff00]" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* CONTENT */}
          <div>
            {/* Tags */}
            <div className="mb-5 flex flex-wrap gap-2">
              {workout.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="border border-[#ccff00]/40 bg-[#ccff00]/10 px-3 py-1 text-xs font-black uppercase text-[#ccff00]"
                >
                  {muscle}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-4xl font-black uppercase leading-none tracking-tight sm:text-5xl">
              {workout.name}
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl leading-7 text-zinc-400">
              {workout.description}
            </p>

            {/* Key Specs */}
            <div className="mt-8 border border-white/10 bg-[#101419]">
              <div className="border-b border-white/10 px-5 py-4">
                <h2 className="text-sm font-black uppercase tracking-[0.2em]">
                  Key Specs
                </h2>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3">
                <Spec label="Equipment" value={workout.equipment} />
                <Spec label="Difficulty" value={workout.difficulty} />
                <Spec label="Sets" value={workout.sets} />
                <Spec label="Reps" value={workout.reps} />
                <Spec label="Duration" value={`${workout.duration} min`} />
                <Spec
                  label="Calories"
                  value={`${workout.caloriesBurned} kcal`}
                />
              </div>
            </div>

            {/* Rating */}
            <div className="mt-5 flex items-center gap-2 text-sm">
              <Star size={17} fill="#ccff00" className="text-[#ccff00]" />
              <span className="font-bold">{workout.rating}</span>
              <span className="text-zinc-600">/ 5.0</span>
            </div>

            {/* Instructions */}
            <div className="mt-10">
              <h2 className="mb-5 text-sm font-black uppercase tracking-[0.2em]">
                Instructions
              </h2>

              <div className="space-y-4">
                {workout.instructions.map((instruction, index) => (
                  <div key={instruction} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#ccff00] text-sm font-black text-[#090b0f]">
                      {index + 1}
                    </span>

                    <p className="pt-1 text-sm leading-6 text-zinc-400">
                      {instruction}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => addToPlan(workout)}
                className="flex flex-1 items-center justify-center gap-2 bg-[#ccff00] px-6 py-4 text-sm font-black uppercase text-[#090b0f] transition hover:bg-white"
              >
                <Plus size={18} strokeWidth={3} />
                Add to today's plan
              </button>

              <button
                onClick={() => saveForLater(workout)}
                className="flex flex-1 items-center justify-center gap-2 border border-white/20 px-6 py-4 text-sm font-black uppercase text-white transition hover:border-[#ccff00] hover:text-[#ccff00]"
              >
                <Bookmark size={18} />
                Save for later
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

const Spec = ({ label, value }) => {
  return (
    <div className="border-b border-r border-white/10 p-4">
      <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-zinc-600">
        {label}
      </p>

      <p className="text-sm font-bold text-white">{value}</p>
    </div>
  );
};

export default WorkoutDetails;
