const colleges = [
  {
    id: 1,
    name: 'Stanford University',
    city: 'Stanford, CA',
    type: 'Private',
    focus: 'Computer Science, Engineering',
  },
  {
    id: 2,
    name: 'University of Michigan',
    city: 'Ann Arbor, MI',
    type: 'Public',
    focus: 'Business, Medicine',
  },
  {
    id: 3,
    name: 'New York University',
    city: 'New York, NY',
    type: 'Private',
    focus: 'Arts, Global Studies',
  },
  {
    id: 4,
    name: 'University of Texas at Austin',
    city: 'Austin, TX',
    type: 'Public',
    focus: 'STEM, Humanities',
  },
]

function CollegeList() {
  return (
    <section id="colleges" className="mx-auto w-full max-w-6xl px-6 pb-20">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
            Featured campuses
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-white">
            Highlighted colleges to compare
          </h2>
        </div>
        <button className="rounded-full border border-slate-700 px-5 py-2 text-xs font-semibold uppercase tracking-wide text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
          View all 4,200+
        </button>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {colleges.map((college) => (
          <article
            key={college.id}
            className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 transition hover:border-cyan-400/60"
          >
            <div className="flex items-center justify-between">
              <p className="text-lg font-semibold text-white">{college.name}</p>
              <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-200">
                {college.type}
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-300">{college.city}</p>
            <p className="mt-4 text-sm text-slate-400">Focus areas</p>
            <p className="mt-1 text-base text-slate-200">{college.focus}</p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs">
              {['Admissions', 'Costs', 'Outcomes'].map((pill) => (
                <span
                  key={pill}
                  className="rounded-full border border-slate-700 px-3 py-1 text-slate-300"
                >
                  {pill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default CollegeList
