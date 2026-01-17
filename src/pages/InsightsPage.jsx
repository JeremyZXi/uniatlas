import MapSection from '../components/MapSection'

const insightCards = [
  {
    title: 'Outcome signals',
    description:
      'Track graduation rates, alumni earnings, and internship pipelines across regions.',
  },
  {
    title: 'Cost transparency',
    description:
      'Compare sticker prices with net tuition estimates and scholarship trends.',
  },
  {
    title: 'Campus environment',
    description:
      'Filter by setting, enrollment size, and academic focus to refine your shortlist.',
  },
]

function InsightsPage() {
  return (
    <div className="space-y-16">
      <section className="mx-auto w-full max-w-6xl px-6 pt-16">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
          Insights hub
        </p>
        <h1 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
          Dive deeper into the data behind each campus pin.
        </h1>
        <p className="mt-4 max-w-2xl text-base text-slate-300">
          Use the insights dashboard to explore trends over time, benchmark outcomes,
          and see how every school stacks up against regional averages.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {insightCards.map((card) => (
            <article
              key={card.title}
              className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6"
            >
              <h2 className="text-lg font-semibold text-white">{card.title}</h2>
              <p className="mt-3 text-sm text-slate-300">{card.description}</p>
            </article>
          ))}
        </div>
      </section>
      <MapSection />
      <section className="mx-auto w-full max-w-6xl px-6 pb-20">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
            Analyst notes
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-white">
            Save custom overlays for your counseling sessions.
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-slate-300">
            Layer admissions competitiveness, affordability, and career readiness
            so every meeting starts with a clear picture of campus fit.
          </p>
        </div>
      </section>
    </div>
  )
}

export default InsightsPage
