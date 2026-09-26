"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Activity, Flame, Timer, ChevronDown } from "lucide-react";

import PlanWorkoutCard from "../components/PlanWorkoutCard";
import { useFitLog } from "../context/FitLogContext";
import { Oswald } from "next/font/google";

const MyPlanPage = () => {
  const {
    todayPlan,
    savedWorkouts,
    isLoading,
    removeFromPlan,
    removeSavedWorkout,
    toggleDone,
  } = useFitLog();

  const [activeTab, setActiveTab] = useState("plan");
  const [sortBy, setSortBy] = useState("duration"); // Default sort by duration

  // Select the current list based on active tab
  const currentList = activeTab === "plan" ? todayPlan : savedWorkouts;

  // Calculate metrics based on the ACTIVE tab (Fixes the saved state metrics issue)
  const metrics = useMemo(() => {
    return {
      exercises: currentList.length,
      minutes: currentList.reduce(
        (total, workout) => total + Number(workout.duration || 0),
        0,
      ),
      calories: currentList.reduce(
        (total, workout) => total + Number(workout.caloriesBurned || 0),
        0,
      ),
    };
  }, [currentList]);

  // Sort the current list based on selected criteria
  const sortedList = useMemo(() => {
    return [...currentList].sort((a, b) => {
      if (sortBy === "duration") {
        return Number(b.duration || 0) - Number(a.duration || 0); // Descending
      }
      if (sortBy === "rating") {
        return Number(b.rating || 0) - Number(a.rating || 0); // Descending
      }
      if (sortBy === "calories") {
        return Number(b.caloriesBurned || 0) - Number(a.caloriesBurned || 0); // Descending
      }
      return 0;
    });
  }, [currentList, sortBy]);

  return (
    <main className="min-h-screen bg-[#090b0f] text-white">
      <section className="mx-auto container px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div>
          <p className="mb-3 text-xs font-black uppercase tracking-[0.25em] text-[#ccff00]">
            Your workout log
          </p>

          <h1 className="font-oswald text-5xl font-black uppercase tracking-tight sm:text-6xl">
            My Plan
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-6 text-zinc-500">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Metrics */}
        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3 font-oswald ">
          <MetricCard
            icon={<Activity size={20} />}
            label="Exercises"
            value={metrics.exercises}
          />
          <MetricCard
            icon={<Timer size={20} />}
            label="Minutes"
            value={metrics.minutes}
          />
          <MetricCard
            icon={<Flame size={20} />}
            label="Calories"
            value={metrics.calories}
          />
        </div>

        {/* Tabs & Sorting */}
        <div className="mt-10 flex flex-col justify-between gap-4 border-b border-white/10 sm:flex-row sm:items-center">
          <div className="flex">
            <button
              onClick={() => setActiveTab("plan")}
              className={`px-5 py-4 text-xs font-black uppercase tracking-wide transition ${
                activeTab === "plan"
                  ? "border-b-2 border-[#ccff00] text-[#ccff00]"
                  : "text-zinc-500 hover:text-white"
              }`}
            >
              Today&apos;s Plan
              <span className="ml-2 text-zinc-600">{todayPlan.length}</span>
            </button>

            <button
              onClick={() => setActiveTab("saved")}
              className={`px-5 py-4 text-xs font-black uppercase tracking-wide transition ${
                activeTab === "saved"
                  ? "border-b-2 border-[#ccff00] text-[#ccff00]"
                  : "text-zinc-500 hover:text-white"
              }`}
            >
              Saved
              <span className="ml-2 text-zinc-600">{savedWorkouts.length}</span>
            </button>
          </div>

          {/* Sorting Dropdown */}
          <div className="relative flex items-center pb-2 sm:pb-0">
            <span className="mr-3 text-xs text-zinc-500">Sort By</span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none rounded border border-white/10 bg-[#101419] px-4 py-2 pr-10 text-xs font-bold text-white outline-none focus:border-[#ccff00]"
              >
                <option value="duration">Duration</option>
                <option value="rating">Rating</option>
                <option value="calories">Calories</option>
              </select>
              <ChevronDown
                size={14}
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="mt-8">
          {isLoading ? (
            <div className="flex min-h-[300px] items-center justify-center border border-white/10">
              <p className="text-sm font-black uppercase tracking-widest text-zinc-500">
                Loading workouts…
              </p>
            </div>
          ) : sortedList.length === 0 ? (
            <EmptyState />
          ) : (
            <div className="space-y-4">
              {sortedList.map((workout) => (
                <PlanWorkoutCard
                  key={workout.id}
                  workout={workout}
                  isSaved={activeTab === "saved"}
                  onDone={toggleDone}
                  onRemove={
                    activeTab === "plan" ? removeFromPlan : removeSavedWorkout
                  }
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

const MetricCard = ({ icon, label, value }) => {
  return (
    <div className="flex flex-col justify-center border border-white/10 bg-[#101419] p-6">
      <div className="flex items-center gap-2 text-[#ccff00]">
        {icon}
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
          {label}
        </span>
      </div>
      <p className="mt-2 text-4xl font-black text-white">{value}</p>
    </div>
  );
};

const EmptyState = () => {
  return (
    <div className="flex min-h-[360px] flex-col items-center justify-center border border-dashed border-white/10 px-6 text-center">
      <div className="mb-5 flex h-14 w-14 items-center justify-center border border-[#ccff00]/30 text-[#ccff00]">
        <Activity size={24} />
      </div>
      <h2 className="text-2xl font-black uppercase">Nothing Here Yet</h2>
      <p className="mt-3 max-w-md text-sm leading-6 text-zinc-500">
        Browse the library and add a lift to get today moving.
      </p>
      <Link
        href="/"
        className="mt-7 bg-[#ccff00] px-6 py-3 text-xs font-black uppercase text-[#090b0f] transition hover:bg-white"
      >
        Go to workouts
      </Link>
    </div>
  );
};

export default MyPlanPage;
