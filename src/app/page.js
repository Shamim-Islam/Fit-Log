import Banner from "./components/Banner";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#090b0f]">
      <Banner />

      {/* Workout Library */}
      <section
        id="library"
        className="mx-auto min-h-screen container px-4 py-20 sm:px-6 lg:px-8"
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
