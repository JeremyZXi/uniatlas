function Hero() {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-16 md:flex-row md:items-center">
      <div className="flex-1">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
          National College Explorer
        </p>
        <h1 className="mt-4 text-4xl font-semibold text-white md:text-5xl">
          Discover the right campus with a living map of every US college.
        </h1>
        <p className="mt-4 text-base text-slate-300">
          UniAtlas brings together location, tuition context, and student
          outcomes so families can compare campuses side-by-side. Use curated
          filters to find the best fit, then dive into details for each school.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="/insights"
            className="rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            Explore the map
          </a>
          <a
            href="/compare"
            className="rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-400 hover:text-cyan-200"
          >
            Compare colleges
          </a>
        </div>
      </div>
      <div className="flex-1 rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-cyan-950/40 p-6">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-white">Atlas filters</p>
          <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-200">
            Beta
          </span>
        </div>
        <div className="mt-6 grid gap-4 text-sm text-slate-200">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
              Region
            </p>
            <p className="mt-2 text-base">West Coast · Great Lakes · Northeast</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
              Cost & Outcomes
            </p>
            <p className="mt-2 text-base">
              In-state tuition, graduation rate, career score
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
              Campus vibe
            </p>
            <p className="mt-2 text-base">
              Urban · Suburban · Small town · Remote
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
