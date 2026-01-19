import hatLogo from "../assets/hat.svg";
// adjust the path if HomePage is in a different folder
import sampleMap from "../assets/sample_map.png"
function HomePage() {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <main className="flex-1 px-10 md:px-16 lg:px-20 py-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                    {/* Left: Logo + tagline */}
                    <section className="pt-2">
                        <div className="text-[#0A3161] leading-none">
                            <div>
                                {/* Top row: UNI + hat logo */}
                                <div className="flex items-center gap-4">
                                    <h1
                                        className="text-[72px] sm:text-[96px] md:text-[110px] font-[800] tracking-wide"
                                        style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                                    >
                                        UNI
                                    </h1>

                                    <img
                                        src={hatLogo}
                                        alt="UniAtlas logo"
                                        className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28"
                                    />
                                </div>

                                {/* Bottom row: ATLAS */}
                                <h2
                                    className="text-[72px] sm:text-[96px] md:text-[110px] font-[800] tracking-wide -mt-2"
                                    style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                                >
                                    ATLAS
                                </h2>
                            </div>

                            <p
                                className="mt-6 text-[20px] sm:text-[22px] italic font-[600]"
                                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                            >
                                Interactive maps for smarter
                                <br />
                                U.S. college decisions.
                            </p>
                        </div>
                        <div className="mt-8 bg-gray-200 p-3  shadow-inner border border-gray-300">
                            <img
                                alt="GitHub Repo"
                                src={sampleMap}
                                className="block w-full  shadow-inner"
                            />
                        </div>




                    </section>

                    {/* Right: Cards + link */}
                    <section className="w-full flex flex-col items-end">
                        <div className="w-full max-w-xl space-y-8">
                            <HomeCard
                                title="College Info"
                                href="/college-info"
                            />
                            <HomeCard
                                title="College & Climate"
                                href="/climate"
                            />
                            <HomeCard
                                title="Student life & Colleges"
                                href="/student-life"
                            />
                            <HomeCard
                                title="View all maps"
                                href="/maps"
                            />
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}

function HomeCard({ title, href }) {
    return (
        <a
            href={href}
            className="block w-full bg-white border border-black/10 rounded-sm shadow-[0_8px_18px_rgba(0,0,0,0.18)] px-10 py-12 text-center hover:shadow-[0_12px_26px_rgba(0,0,0,0.22)] transition"
        >
      <span
          className="text-[#0A3161] italic font-[700] text-[26px] sm:text-[30px]"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
      >
        {title}
      </span>
        </a>
    );
}

export default HomePage;
