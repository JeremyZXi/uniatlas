function ClimateMap() {
    return (
        <div className="h-screen w-full bg-white relative overflow-hidden">
            {/* 让 iframe 真的吃满容器 */}
            <iframe
                src="https://www.wikipedia.org/"
                title="WebGIS Placeholder"
                className="w-full h-full"
                allowFullScreen
                loading="lazy"
                style={{ border: "none", display: "block" }}
            />

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
