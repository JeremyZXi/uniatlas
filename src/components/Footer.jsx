function Footer() {
  return (
    <footer id="resources" className="border-t border-slate-800">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-white">UniAtlas</p>
          <p className="mt-2 max-w-md">
            Built for students, families, and counselors seeking transparent
            insights into the US higher education landscape.
          </p>
        </div>
        <div className="space-y-2 text-right">
          <p className="font-semibold text-slate-200">Coming soon</p>
          <p>Personalized match scores</p>
          <p>Virtual campus tours</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
