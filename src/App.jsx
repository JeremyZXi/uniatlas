import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/HomePage.jsx";
import ClimateMap from "./pages/ClimateMap.jsx";
import StudentLifeMap from "./pages/StudentLifeMap.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
    const path =
        window.location.pathname.replace(/\/$/, "") || "/";

    const routes = {
        "/": <HomePage />,
        "/climate": <ClimateMap />,
        "/student-life": <StudentLifeMap />,
    };

    const Page = routes[path] ?? <NotFound />; // <-- THIS IS THE KEY LINE

    return (
        <div className="min-h-screen bg-white text-slate-100">
            <Header />
            <main>{Page}</main>
            <Footer />
        </div>
    );
}

export default App;
