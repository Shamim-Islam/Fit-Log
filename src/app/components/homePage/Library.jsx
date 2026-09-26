import WorkoutCard from "./WorkoutCard";

const Library = ({ workouts = [] }) => {
  return (
    <section
      id="library"
      className="bg-[#090b0f] px-4 py-20 sm:px-6 lg:px-8 mx-auto container"
    >
      <div className="">
        {/* Heading */}
        <div className="mb-10">
          <div className="mb-4 h-[3px] w-10 bg-[#ccff00]" />

          <h2 className="font-oswald text-4xl font-black uppercase leading-none tracking-tight text-white sm:text-5xl">
            The Library
          </h2>

          <p className="mt-3 text-sm text-zinc-500 sm:text-base">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        {/* Workout Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {workouts.map((workout) => (
            <WorkoutCard key={workout.id} workout={workout} />
          ))}
        </div>

        {/* Empty State */}
        {workouts.length === 0 && (
          <div className="flex min-h-[250px] items-center justify-center rounded-xl border border-white/10 bg-[#101419]">
            <p className="text-sm text-zinc-500">No workouts found.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Library;
