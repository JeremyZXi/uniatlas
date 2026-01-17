function MapSection() {
  return (
    <section
      id="map"
      className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 pb-16"
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
            Interactive map
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-white">
            Visualize colleges across the United States
          </h2>
        </div>
        <div className="flex flex-wrap gap-3 text-xs">
          {['Public', 'Private', 'Community', 'Graduate'].map((filter) => (
            <button
              key={filter}
              className="rounded-full border border-slate-700 px-4 py-2 text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="relative min-h-[320px] overflow-hidden rounded-3xl border border-slate-800 bg-[radial-gradient(circle_at_top,_rgba(14,116,144,0.35),_transparent_60%)]">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=60')] bg-cover bg-center opacity-20" />
          <div className="relative z-10 flex h-full flex-col justify-between p-6">
            <div>
              <p className="text-sm font-semibold text-white">
                Nationwide coverage
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Pin data for 4,200+ campuses, updated monthly with admissions
                and affordability insights.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-700/80 bg-slate-950/70 p-4 text-sm text-slate-200">
              <p className="font-semibold text-cyan-200">Next map layer</p>
              <p className="mt-1 text-slate-300">Student outcomes + salary bands</p>
            </div>
          </div>
        </div>
        <aside className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-lg font-semibold text-white">Search filters</h3>
          <ul className="mt-4 space-y-4 text-sm text-slate-300">
            <li className="rounded-2xl border border-slate-800 p-4">
              <p className="font-semibold text-white">Degree focus</p>
              <p className="mt-1">STEM, Liberal Arts, Business, Arts</p>
            </li>
            <li className="rounded-2xl border border-slate-800 p-4">
              <p className="font-semibold text-white">Enrollment size</p>
              <p className="mt-1">Small &lt; 5k · Mid 5k-15k · Large 15k+</p>
            </li>
            <li className="rounded-2xl border border-slate-800 p-4">
              <p className="font-semibold text-white">Cost range</p>
              <p className="mt-1">Net price, aid packages, residency</p>
            </li>
          </ul>
        </aside>
      </div>
    </section>
  )
}

export default MapSection
