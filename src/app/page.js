import Hero from "./components/Hero";

export default function HomePage() {
  // Temporary values.
  // Later these will come from Today's Plan and Saved data.
  const planCount = 3;
  const savedCount = 5;

  return (
    <main className="min-h-screen bg-[#090b0f]">
      <Hero />

      {/* Workout Library */}
      <section
        id="library"
        className="mx-auto min-h-screen max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
      >
        <p className="text-sm font-bold text-[#ccff00]">WORKOUT LIBRARY</p>

        <h2 className="mt-2 text-3xl font-black uppercase text-white">
          Choose Your Workout
        </h2>

        {/* Workout cards will be added here later */}
      </section>
    </main>
  );
}
