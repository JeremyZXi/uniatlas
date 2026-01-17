import Footer from './components/Footer'
import Header from './components/Header'
import ComparePage from './pages/ComparePage'
import HomePage from './pages/HomePage'
import InsightsPage from './pages/InsightsPage'

function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/'
  const routes = {
    '/': <HomePage />,
    '/insights': <InsightsPage />,
    '/compare': <ComparePage />,
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Header />
      <main>{routes[path] ?? <HomePage />}</main>
      <Footer />
    </div>
  )
}

export default App
