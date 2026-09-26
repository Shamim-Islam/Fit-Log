"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const FitLogContext = createContext();

const PLAN_KEY = "fitlog-today-plan";
const SAVED_KEY = "fitlog-saved-workouts";

export const FitLogProvider = ({ children }) => {
  const [todayPlan, setTodayPlan] = useState([]);
  const [savedWorkouts, setSavedWorkouts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  // Add to today's plan
  const addToPlan = (workout) => {
    const alreadyExists = todayPlan.some(
      (item) => String(item.id) === String(workout.id),
    );

    if (alreadyExists) {
      toast.error("Workout is already in today's plan");
      return;
    }

    // if (todayPlan.length >= 5) {
    //   toast.error("Today's plan is limited to 5 workouts");
    //   return;
    // }

    setTodayPlan((prev) => [
      ...prev,
      {
        ...workout,
        completed: false,
      },
    ]);

    toast.success("Added to today's plan");
  };

  // Remove from today's plan
  const removeFromPlan = (id) => {
    setTodayPlan((prev) =>
      prev.filter((item) => String(item.id) !== String(id)),
    );

    toast.success("Removed from today's plan");
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
      toast.error("Workout is already saved");
      return;
    }

    setSavedWorkouts((prev) => [...prev, workout]);

    toast.success("Saved for later");
  };

  // Remove saved workout
  const removeSavedWorkout = (id) => {
    setSavedWorkouts((prev) =>
      prev.filter((item) => String(item.id) !== String(id)),
    );

    toast.success("Removed from saved");
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
      }}
    >
      {children}
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
