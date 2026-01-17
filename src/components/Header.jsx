const navigation = [
  { label: 'Home', href: '/' },
  { label: 'Insights', href: '/insights' },
  { label: 'Compare', href: '/compare' },
]

function Header() {
  const activePath = window.location.pathname.replace(/\/$/, '') || '/'

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
              className={`transition hover:text-cyan-300 ${
                activePath === item.href ? 'text-cyan-200' : ''
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="/compare"
          className="rounded-full border border-cyan-400/60 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-cyan-200 transition hover:bg-cyan-500/20"
        >
          Launch Beta
        </a>
      </div>
    </header>
  )
}

export default Header
