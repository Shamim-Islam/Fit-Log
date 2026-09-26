import { notFound } from "next/navigation";

import { getWorkoutById } from "../../lib/api";
import WorkoutDetails from "@/app/components/WorkoutDetails";

const WorkoutDetailsPage = async ({ params }) => {
  const { id } = await params;

  const workout = await getWorkoutById(id);

  if (!workout) {
    notFound();
  }

  return <WorkoutDetails workout={workout} />;
};

export default WorkoutDetailsPage;


