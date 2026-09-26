// const API_URL = "https://api.abcz.workers.dev/api/fitlog";
const API_URL = "https://quickmock.dev/m/DducCtkHeJK4";

export const getWorkouts = async () => {
  const res = await fetch(API_URL, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch workouts: ${res.status}`);
  }

  return res.json();
};

export const getWorkoutById = async (id) => {
  const workouts = await getWorkouts();

  return workouts.find((workout) => String(workout.id) === String(id));
};
