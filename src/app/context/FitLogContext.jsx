"use client";

import { createContext, useContext, useEffect, useState } from "react";

const FitLogContext = createContext();

const PLAN_KEY = "fitlog-today-plan";
const SAVED_KEY = "fitlog-saved-workouts";

export const FitLogProvider = ({ children }) => {
  const [todayPlan, setTodayPlan] = useState([]);
  const [savedWorkouts, setSavedWorkouts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success",
  });

  // Load data from localStorage
  useEffect(() => {
    try {
      const savedPlan = localStorage.getItem(PLAN_KEY);
      const savedList = localStorage.getItem(SAVED_KEY);

      if (savedPlan) {
        setTodayPlan(JSON.parse(savedPlan));
      }

      if (savedList) {
        setSavedWorkouts(JSON.parse(savedList));
      }
    } catch (error) {
      console.error("Failed to load FitLog data:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Save plan
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem(PLAN_KEY, JSON.stringify(todayPlan));
    }
  }, [todayPlan, isLoading]);

  // Save saved workouts
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem(SAVED_KEY, JSON.stringify(savedWorkouts));
    }
  }, [savedWorkouts, isLoading]);

  // Toast
  const showToast = (message, type = "success") => {
    setToast({
      show: true,
      message,
      type,
    });

    setTimeout(() => {
      setToast({
        show: false,
        message: "",
        type: "success",
      });
    }, 2500);
  };

  // Add to today's plan
  const addToPlan = (workout) => {
    const alreadyExists = todayPlan.some(
      (item) => String(item.id) === String(workout.id),
    );

    if (alreadyExists) {
      showToast("Workout is already in today's plan", "error");
      return;
    }

    if (todayPlan.length >= 5) {
      showToast("Today's plan is limited to 5 workouts", "error");
      return;
    }

    setTodayPlan((prev) => [
      ...prev,
      {
        ...workout,
        completed: false,
      },
    ]);

    showToast("Added to today's plan");
  };

  // Remove from today's plan
  const removeFromPlan = (id) => {
    setTodayPlan((prev) =>
      prev.filter((item) => String(item.id) !== String(id)),
    );

    showToast("Removed from today's plan");
  };

  // Mark as done
  const toggleDone = (id) => {
    setTodayPlan((prev) =>
      prev.map((item) =>
        String(item.id) === String(id)
          ? {
              ...item,
              completed: !item.completed,
            }
          : item,
      ),
    );
  };

  // Save for later
  const saveForLater = (workout) => {
    const alreadySaved = savedWorkouts.some(
      (item) => String(item.id) === String(workout.id),
    );

    if (alreadySaved) {
      showToast("Workout is already saved", "error");
      return;
    }

    setSavedWorkouts((prev) => [...prev, workout]);

    showToast("Saved for later");
  };

  // Remove saved workout
  const removeSavedWorkout = (id) => {
    setSavedWorkouts((prev) =>
      prev.filter((item) => String(item.id) !== String(id)),
    );

    showToast("Removed from saved");
  };

  return (
    <FitLogContext.Provider
      value={{
        todayPlan,
        savedWorkouts,
        isLoading,
        addToPlan,
        removeFromPlan,
        toggleDone,
        saveForLater,
        removeSavedWorkout,
        showToast,
      }}
    >
      {children}

      {/* Toast */}
      {toast.show && (
        <div className="fixed bottom-6 right-6 z-999">
          <div
            className={`min-w-65 border px-5 py-4 text-sm font-bold uppercase tracking-wide shadow-2xl ${
              toast.type === "error"
                ? "border-red-500 bg-red-500 text-white"
                : "border-[#ccff00] bg-[#ccff00] text-[#090b0f]"
            }`}
          >
            {toast.message}
          </div>
        </div>
      )}
    </FitLogContext.Provider>
  );
};

export const useFitLog = () => {
  const context = useContext(FitLogContext);

  if (!context) {
    throw new Error("useFitLog must be used inside FitLogProvider");
  }

  return context;
};
