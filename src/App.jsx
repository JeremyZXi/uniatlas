import Footer from './components/Footer'
import Header from './components/Header'
import HomePage from "./pages/HomePage.jsx";



function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/'
  const routes = {
    '/': <HomePage />,
  }

  return (
    <div className="min-h-screen bg-white text-slate-100">
      <Header />
      <main>{routes[path] ?? <HomePage />}</main>
      <Footer />
    </div>
  )
}

export default App
