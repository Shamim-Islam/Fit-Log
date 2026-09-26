const API_URL = "https://api.abcz.workers.dev/api/fitlog";

export const getWorkouts = async () => {
  const res = await fetch(API_URL, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch workouts");
  }

  return res.json();
};

export const getWorkoutById = async (id) => {
  const workouts = await getWorkouts();

  return workouts.find(
    (workout) => String(workout.id) === String(id)
  );
};