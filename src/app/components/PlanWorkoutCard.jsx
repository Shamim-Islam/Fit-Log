"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock3, Flame, Star, Check, X } from "lucide-react";

const PlanWorkoutCard = ({ workout, isSaved = false, onRemove, onDone }) => {
  return (
    <article
      className={`overflow-hidden rounded-xl border bg-[#101419] transition ${
        workout.completed
          ? "border-[#ccff00]/40 opacity-70"
          : "border-white/10 hover:border-white/20"
      }`}
    >
      <div className="flex flex-col sm:flex-row">
        {/* Thumbnail */}
        <div className="relative h-48 w-full shrink-0 sm:h-auto sm:w-64">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 256px"
          />
          {workout.completed && (
            <div className="absolute left-3 top-3 flex items-center gap-1 rounded bg-[#ccff00] px-2 py-1 text-[10px] font-black uppercase text-[#090b0f]">
              <Check size={12} />
              Done
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
          <div>
            <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-[#ccff00]">
              {workout.muscleGroups?.join(" / ") || "Full Body"}
            </p>

            <h3 className="text-2xl font-black uppercase tracking-tight text-white">
              {workout.name}
            </h3>

            <p className="mt-1 text-sm text-zinc-500">{workout.equipment}</p>
          </div>

          {/* Stats */}
          <div className="mt-6 flex flex-wrap items-center gap-5 text-xs font-medium text-zinc-400">
            <span className="flex items-center gap-1.5">
              <Clock3 size={16} className="text-zinc-500" />
              {workout.duration} min
            </span>

            <span className="flex items-center gap-1.5">
              <Flame size={16} className="text-zinc-500" />
              {workout.caloriesBurned} kcal
            </span>

            <span className="flex items-center gap-1.5">
              <Star size={16} className="text-[#ccff00]" fill="#ccff00" />
              {workout.rating}
            </span>
          </div>

          {/* Actions */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href={`/workouts/${workout.id}`}
              className="rounded border border-white/10 px-5 py-2.5 text-[11px] font-black uppercase text-white transition hover:border-white/30 hover:bg-white/5"
            >
              View Details
            </Link>

            {!isSaved && (
              <button
                onClick={() => onDone(workout.id)}
                className={`flex items-center gap-2 rounded px-5 py-2.5 text-[11px] font-black uppercase transition ${
                  workout.completed
                    ? "bg-[#ccff00] text-[#090b0f]"
                    : "bg-[#ccff00] text-[#090b0f] hover:bg-[#b3e600]"
                }`}
              >
                <Check size={14} strokeWidth={3} />
                {workout.completed ? "Completed" : "Mark as Done"}
              </button>
            )}

            <button
              onClick={() => onRemove(workout.id)}
              className="ml-auto flex items-center justify-center rounded p-2.5 text-zinc-500 transition hover:bg-red-500/10 hover:text-red-400"
              title="Remove"
            >
              <X size={18} />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PlanWorkoutCard;
