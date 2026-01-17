import CollegeList from './components/CollegeList'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import MapSection from './components/MapSection'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Header />
      <main>
        <Hero />
        <MapSection />
        <CollegeList />
      </main>
      <Footer />
    </div>
  )
}

export default App
