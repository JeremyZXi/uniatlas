function NotFound() {
    const base = import.meta.env.BASE_URL || "/";

    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center bg-[#0A3161] text-white px-6 text-center">
            <h1 className="text-7xl font-bold mb-4">404</h1>
            <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
            <p className="max-w-md text-slate-200 mb-8">
                The page you’re looking for doesn’t exist or has been moved.
            </p>

            <a
                href={base}
                className="px-6 py-3 rounded-full shadow-lg transition hover:opacity-90"
                style={{
                    backgroundColor: "#f1c44f",
                    color: "#0A3161",
                    fontFamily: "Georgia, 'Times New Roman', serif",
                }}
            >
                Return Home
            </a>
        </div>
    );
}

export default NotFound;
