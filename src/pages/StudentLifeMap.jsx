function StudentLifeMap() {
    const base = import.meta.env.BASE_URL; // e.g. "/" or "/uniatlas-remake/"

    return (
        <div className="h-screen w-full bg-white relative overflow-hidden">
            <iframe
                src={`${base}maps/CollegeStudentLife/index.html`}
                title="Student Life WebGIS"
                className="w-full h-full"
                allowFullScreen
                loading="lazy"
                style={{ border: "none", display: "block" }}
            />

            <a
                href={base}   // safer than "/"
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

export default StudentLifeMap;
