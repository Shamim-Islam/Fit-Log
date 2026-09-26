import Image from "next/image";
import Link from "next/link";
import { Clock3, Flame, Star, Dumbbell } from "lucide-react";

const WorkoutCard = ({ workout }) => {
  const {
    id,
    image,
    name,
    muscleGroups,
    equipment,
    duration,
    caloriesBurned,
    rating,
  } = workout;

  return (
    <Link
      href={`/workouts/${id}`}
      className="group block overflow-hidden rounded-xl border border-white/10 bg-[#101419] transition-all duration-300 hover:-translate-x-0.5 hover:border-[#ccff00]/40"
    >
      {/* Workout Image */}
      <div className="relative aspect-video overflow-hidden bg-[#151a20]">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-linear-to-t from-[#101419] via-transparent to-transparent" />
      </div>

      {/* Card Content */}
      <div className="p-4">
        {/* Muscle Group Tags */}
        <div className="mb-3 flex flex-wrap gap-2">
          {muscleGroups.map((muscle, index) => (
            <span
              key={`${muscle}-${index}`}
              className="rounded-full bg-[#ccff00] px-2.5 py-1 text-[9px] font-black uppercase tracking-wide text-[#090b0f]"
            >
              {muscle}
            </span>
          ))}
        </div>

        {/* Workout Name */}
        <h3 className="font-oswald line-clamp-1 text-xl font-black uppercase tracking-tight text-white transition-colors group-hover:text-[#ccff00]">
          {name}
        </h3>

        {/* Equipment */}
        <div className="mt-2 flex items-center gap-2 text-xs text-zinc-500">
          <Dumbbell size={13} />

          <span>{equipment}</span>
        </div>

        {/* Stats */}
        <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3">
          {/* Duration */}
          <div className="flex items-center gap-1.5 text-xs text-zinc-400">
            <Clock3 size={14} className="text-red-400" />

            <span>{duration} min</span>
          </div>

          {/* Calories */}
          <div className="flex items-center gap-1.5 text-xs text-zinc-400">
            <Flame size={14} className="text-red-500" />

            <span>{caloriesBurned} kcal</span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1.5 text-xs text-zinc-300">
            <Star size={14} fill="#ccff00" className="text-[#ccff00]" />

            <span>{rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;
