import { useState, useEffect } from "react";

function ClimateMap() {
    const base = import.meta.env.BASE_URL;
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <div className="h-screen w-full bg-white relative overflow-hidden">
            {!loaded && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white z-10">
                    <div className="animate-pulse text-lg font-medium mb-2">
                        Loading map…
                    </div>
                    <div className="w-12 h-12 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
                </div>
            )}

            <iframe
                src={`${base}maps/CollegeClimate/index.html`}
                title="Climate WebGIS"
                className="w-full h-full"
                allowFullScreen
                style={{ border: "none", display: "block" }}
                onLoad={() => setLoaded(true)}
            />

            <a
                href={base}
                className="fixed bottom-6 left-6 px-5 py-3 rounded-full shadow-lg transition hover:opacity-90"
                style={{
                    backgroundColor: "#f1c44f",
                    color: "#0A3161",
                    fontFamily: "Georgia, 'Times New Roman', serif",
                }}
            >
                Return to Home
            </a>
        </div>
    );
}

export default ClimateMap;
