import Banner from "./components/Banner";
import plugin from "./../../node_modules/daisyui/index";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#090b0f]">
      <Banner />

      {/* Workout Library */}
      <section
        id="library"
        className="mx-auto min-h-screen container px-4 py-20 sm:px-6 lg:px-8"
      >
        <h2 className="font-oswald my-2 text-4xl font-black uppercase text-white">
          The <span className="text-[#ccff00]">Library</span>
        </h2>
        <p className="text-[#9CA3AF] text-[14px]">
          Twelve lifts covering every major muscle group.
        </p>

        {/* Workout cards will be added here later */}
      </section>
    </main>
  );
}
