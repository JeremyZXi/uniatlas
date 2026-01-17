const navigation = [
  { label: 'Map', href: '#map' },
  { label: 'Colleges', href: '#colleges' },
  { label: 'Resources', href: '#resources' },
]

function Header() {
  return (
    <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
            UniAtlas
          </p>
          <p className="text-lg font-semibold text-white">US College Atlas</p>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-slate-200 md:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-cyan-300"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <button className="rounded-full border border-cyan-400/60 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-cyan-200 transition hover:bg-cyan-500/20">
          Launch Beta
        </button>
      </div>
    </header>
  )
}

export default Header
