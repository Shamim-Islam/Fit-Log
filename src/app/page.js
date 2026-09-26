import { getWorkouts } from "./lib/api";
import Banner from "./components/homePage/Banner";
import Library from "./components/homePage/Library";

export default async function HomePage() {
  const workouts = await getWorkouts();

  return (
    <main className="min-h-screen bg-[#090b0f]">
      <Banner />

      <Library workouts={workouts} />
    </main>
  );
}
