import hatLogo from "../assets/hat.svg";
import ma from "../assets/ma.svg";

const navigation = [
    { label: "Maps", href: "/maps" },
    { label: "About us", href: "/about" },
    { label: "Buy me a coffee", href: "/buy-me-a-coffee" },
];

function Header() {
    const activePath = window.location.pathname.replace(/\/$/, "") || "/";
    const gold = "#f1c44f";

    return (
        <header className="w-full">
            <div className="bg-[#0A3161]">
                <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
                    {/* Left brand */}
                    <a href="/" className="flex items-center gap-4">
                        {/* LOGO — cleaned up positioning */}
                        <img
                            src={ma}
                            alt="maran logo"
                            className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
                        />

                        <span
                            className="text-[40px] leading-none font-semibold underline underline-offset-8 decoration-2"
                            style={{
                                color: gold,
                                fontFamily: "Georgia, 'Times New Roman', serif",
                                textDecorationColor: gold,
                            }}
                        >
              UniAtlas
            </span>
                    </a>

                    {/* Right nav */}
                    <nav className="hidden items-center gap-10 md:flex">
                        {navigation.map((item) => {
                            const isActive =
                                (item.href === "/" && activePath === "/") ||
                                (item.href !== "/" && activePath.startsWith(item.href));

                            return (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className="text-[30px] leading-none underline underline-offset-8 decoration-2 transition-opacity hover:opacity-90"
                                    style={{
                                        color: gold,
                                        fontFamily: "Georgia, 'Times New Roman', serif",
                                        textDecorationColor: gold,
                                        opacity: isActive ? 1 : 0.95,
                                    }}
                                >
                                    {item.label}
                                </a>
                            );
                        })}
                    </nav>

                    {/* Mobile: simple menu */}
                    <div className="md:hidden">
                        <a
                            href="/maps"
                            className="text-base underline underline-offset-4"
                            style={{ color: gold, fontFamily: "Georgia, 'Times New Roman', serif" }}
                        >
                            Maps
                        </a>
                    </div>
                </div>
            </div>

            {/* Gold stripe */}
            <div className="h-3" style={{ backgroundColor: gold }} />
        </header>
    );
}

export default Header;
