function ClimateMap() {
    return (
        <div className="h-screen bg-white relative">
            {/* Map frame */}
            <div className="h-full w-full border border-[#0A3161]/20 rounded-md shadow-md overflow-hidden bg-white">
                <iframe
                    src="https://example.com"
                    title="Climate WebGIS"
                    className="w-full h-full"
                    allowFullScreen
                    loading="lazy"
                />
            </div>

            {/* Floating Return Home Button */}
            <a
                href="/"
                className="fixed bottom-6 right-6 px-5 py-3 rounded-full shadow-lg transition hover:opacity-90"
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
