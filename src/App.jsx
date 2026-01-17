import Footer from './components/Footer'
import Header from './components/Header'
import HomePage from "./pages/HomePage.jsx";
import ClimateMap from "./pages/ClimateMap.jsx";
import StudentLifeMap from "./pages/StudentLifeMap.jsx";
function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/'
  const routes = {
    '/': <HomePage />,
      '/climate':<ClimateMap />,
      '/student-life':<StudentLifeMap />
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
