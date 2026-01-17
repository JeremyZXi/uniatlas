import CollegeList from '../components/CollegeList'

const comparisonSteps = [
  'Pin your top schools and add them to a side-by-side shortlist.',
  'Compare tuition ranges, graduation rates, and internship access.',
  'Share the shortlist with families and counselors for real-time feedback.',
]

function ComparePage() {
  return (
    <div className="space-y-16">
      <section className="mx-auto w-full max-w-6xl px-6 pt-16">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
          College comparison
        </p>
        <h1 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
          Build shortlists that make decision day easier.
        </h1>
        <p className="mt-4 max-w-2xl text-base text-slate-300">
          UniAtlas helps you compare colleges across cost, outcomes, and campus
          culture in one view, so you can focus on the schools that fit best.
        </p>
        <div className="mt-10 grid gap-4 rounded-3xl border border-slate-800 bg-slate-900/60 p-6 text-sm text-slate-300">
          {comparisonSteps.map((step, index) => (
            <div key={step} className="flex gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-500/10 text-xs font-semibold text-cyan-200">
                {index + 1}
              </span>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>
      <CollegeList />
      <section className="mx-auto w-full max-w-6xl px-6 pb-20">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
          <h2 className="text-2xl font-semibold text-white">
            Ready to review a full comparison set?
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-slate-300">
            Invite stakeholders to comment on each campus, add scholarships, and
            export the final recommendation package.
          </p>
          <button className="mt-6 rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
            Start a comparison
          </button>
        </div>
      </section>
    </div>
  )
}

export default ComparePage
