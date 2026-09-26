

import { notFound } from "next/navigation";

import { getWorkoutById } from "@/lib/api";


const WorkoutDetailsPage = async ({ params }) => {
  const { id } = await params;

  const workout = await getWorkoutById(id);

  if (!workout) {
    notFound();
  }

  return <WorkoutDetails workout={workout} />;
};

export default WorkoutDetailsPage;














import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Plus, Bookmark, Star, ArrowLeft } from "lucide-react";

import { getWorkoutById } from "../../lib/api";
import WorkoutDetails from "@/app/components/WorkoutDetails";

const WorkoutDetailsPage = async ({ params }) => {
  const { id } = await params;

  const workout = await getWorkoutById(id);

  if (!workout) {
    notFound();
  }

  const {
    image,
    name,
//     description,
//     muscleGroups,
//     equipment,
//     difficulty,
//     sets,
//     reps,
//     duration,
//     caloriesBurned,
//     rating,
//     instructions,
//   } = workout;

//   return (
//     <main className="min-h-screen bg-[#090b0f] px-4 py-8 sm:px-6 lg:px-8">
//       <div className="mx-auto max-w-7xl">
//         {/* Back to Library */}
//         <Link
//           href="/#library"
//           className="mb-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-500 transition-colors hover:text-[#ccff00]"
//         >
//           <ArrowLeft size={15} />
//           Back to library
//         </Link>

//         {/* Main Two Column Layout */}
//         <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
//           {/* ======================================
//               LEFT SIDE — IMAGE
//           ======================================= */}

//           <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#101419]">
//             <div className="relative aspect-4/5 min-h-125 lg:min-h-170">
//               <Image
//                 src={image}
//                 alt={name}
//                 fill
//                 priority
//                 sizes="(max-width: 1024px) 100vw, 55vw"
//                 className="object-cover"
//               />

//               {/* Dark Overlay */}
//               <div className="absolute inset-0 bg-linear-to-t from-[#090b0f]/80 via-transparent to-transparent" />

//               {/* Image Navigation */}
//               <div className="absolute bottom-5 left-5 flex items-center gap-5">
//                 <span className="text-xs font-black text-white">01</span>

//                 <span className="h-0.5 w-5 bg-[#ccff00]" />

//                 <span className="text-xs text-zinc-600">02</span>

//                 <span className="text-xs text-zinc-600">03</span>

//                 <span className="text-xs text-zinc-600">04</span>
//               </div>
//             </div>
//           </div>

//           {/* ======================================
//               RIGHT SIDE — INFORMATION
//           ======================================= */}

//           <div className="pt-2">
//             {/* Muscle Groups */}
//             <div className="mb-4 flex flex-wrap gap-2">
//               {muscleGroups.map((muscle, index) => (
//                 <span
//                   key={`${muscle}-${index}`}
//                   className="rounded-full bg-[#ccff00] px-3 py-1.5 text-[10px] font-black uppercase tracking-wide text-[#090b0f]"
//                 >
//                   {muscle}
//                 </span>
//               ))}
//             </div>

//             {/* Title */}
//             <h1 className="font-oswald text-4xl font-black uppercase leading-none tracking-tight text-white sm:text-5xl">
//               {name}
//             </h1>

//             {/* Description */}
//             <p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-400">
//               {description}
//             </p>

//             {/* ======================================
//                 KEY SPECS
//             ======================================= */}

//             <div className="mt-7 rounded-xl border border-white/10 bg-[#101419] p-5">
//               <div className="mb-4 flex items-center gap-3">
//                 <span className="h-0.75 w-6 bg-[#ccff00]" />

//                 <h2 className="text-sm font-black uppercase tracking-wide text-[#ccff00]">
//                   Key Specs
//                 </h2>
//               </div>

//               <div className="grid grid-cols-1 gap-x-8 ">
//                 <SpecRow label="Equipment" value={equipment} />

//                 <SpecRow label="Duration" value={`${duration} min`} />

//                 <SpecRow label="Difficulty" value={difficulty} />

//                 <SpecRow label="Calories" value={`${caloriesBurned} kcal`} />

//                 <SpecRow label="Sets" value={sets} />

//                 <SpecRow
//                   label="Rating"
//                   value={
//                     <span className="flex items-center gap-1">
//                       <Star
//                         size={13}
//                         fill="#ccff00"
//                         className="text-[#ccff00]"
//                       />

//                       {rating}
//                     </span>
//                   }
//                 />

//                 <SpecRow label="Reps" value={reps} />
//               </div>
//             </div>

//             {/* ======================================
//                 INSTRUCTIONS
//             ======================================= */}

//             <div className="mt-7">
//               <div className="mb-4 flex items-center gap-3">
//                 <span className="h-0.75 w-6 bg-[#ccff00]" />

//                 <h2 className="font-oswald text-lg font-black uppercase tracking-wide text-white">
//                   Instructions
//                 </h2>
//               </div>

//               <div className="space-y-3">
//                 {instructions.map((instruction, index) => (
//                   <div key={index} className="flex items-start gap-3">
//                     <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#ccff00] text-[10px] font-black text-[#090b0f]">
//                       {index + 1}
//                     </span>

//                     <p className="pt-0.5 text-xs leading-5 text-zinc-400">
//                       {instruction}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* ======================================
//                 ACTION BUTTONS
//             ======================================= */}

//             <div className="mt-8 grid gap-3 sm:grid-cols-2">
//               {/* Add to Plan */}
//               <button
//                 type="button"
//                 className="flex items-center justify-center gap-2 rounded-full bg-[#ccff00] px-5 py-3.5 text-xs font-black uppercase tracking-wide text-[#090b0f] transition-all hover:bg-[#d9ff4d]"
//               >
//                 <Plus size={17} strokeWidth={3} />
//                 Add to today&apos;s plan
//               </button>

//               {/* Save */}
//               <button
//                 type="button"
//                 className="flex items-center justify-center gap-2 rounded-full border border-white/40 px-5 py-3.5 text-xs font-black uppercase tracking-wide text-white transition-all hover:border-[#ccff00] hover:text-[#ccff00]"
//               >
//                 <Bookmark size={16} />
//                 Save for later
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// /* ==========================================
//    SPEC ROW
// ========================================== */

// const SpecRow = ({ label, value }) => {
//   return (
//     <div className="flex items-center justify-between border-b border-white/10 py-3">
//       <span className="text-[9px] font-bold uppercase tracking-wider text-zinc-600">
//         {label}
//       </span>

//       <span className="text-xs font-semibold text-zinc-200">{value}</span>
//     </div>
//   );
// };

// export default WorkoutDetailsPage;
