const Loading = () => {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-[#090b0f] px-4">
      <div className="flex flex-col items-center text-center">
        {/* Spinner */}
        <div className="relative flex h-16 w-16 items-center justify-center">
          <div className="absolute inset-0 animate-spin rounded-full border-2 border-zinc-800 border-t-[#ccff00]" />

          <div className="h-8 w-8 rounded-full bg-[#ccff00]" />
        </div>

        {/* Text */}
        <p className="mt-6 text-xs font-black uppercase tracking-[0.3em] text-white">
          Loading workouts
          <span className="ml-1 text-[#ccff00]">...</span>
        </p>

        <p className="mt-2 text-[10px] uppercase tracking-widest text-zinc-600">
          Train with intent
        </p>
      </div>
    </main>
  );
};

export default Loading;
