import qgisLogo from "../assets/qgis.png";
function Footer() {
  return (
      <footer id="resources" className="w-full">
        {/* Navy footer */}
        <div className="h-3 bg-[#f1c44f]" />
        <div className="bg-[#0A3161]">
          <div className="mx-auto w-full max-w-6xl px-8 py-10 flex flex-col gap-6 text-sm md:flex-row md:items-start md:justify-between">
            <div>
              <p
                  className="text-white text-lg font-semibold"
                  style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                UniAtlas
              </p>
              {/* GitHub badge UNDER Netlify (forced block) */}
              <div>
                <a
                    href="https://github.com/JeremyZXi/uniatlas"
                    target="_blank"
                    rel="noreferrer"
                >
                  <img
                      alt="GitHub Repo"
                      src="https://img.shields.io/badge/github-repo-blue%3F?logo=github&link=https%3A%2F%2Fgithub.com%2FJeremyZXi%2Funiatlas"
                      className="block"
                  />
                </a>
              </div>
              <p className="mt-2 max-w-md text-slate-200">
                Information are derived from U.S.News, Niche, Openstreetmap, and Google Maps
              </p>
              <p className="mt-2 max-w-md text-slate-200">
                Disclaimer: Data might not be accurate or up-to-date. Data are only accurate up to Nov 2025
              </p>
              <p className="mt-2 max-w-md text-slate-200">
                By Asa Ma & Jeremy Zhang
              </p>



            </div>

            {/* RIGHT SIDE — badges stacked vertically */}
            <div className="space-y-3 md:text-left">
              <div>
                <a href="https://qgis.org" target="_blank" rel="noreferrer">
                  <img
                      src={qgisLogo}
                      alt="QGIS"
                      className="block h-12 w-auto"
                  />
                </a>
              </div>
              {/* Netlify badge (forced block) */}
              <div>
                <a href="https://www.netlify.com">
                  <img
                      src="https://www.netlify.com/assets/badges/netlify-badge-color-accent.svg"
                      alt="Deploys by Netlify"
                      className="block"
                  />
                </a>
              </div>






              <div>
                <a
                    href="https://github.com/qgis2web/qgis2web"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2"
                >
                  <img
                      src="https://raw.githubusercontent.com/qgis2web/qgis2web/master/icons/qgis2web.png"
                      alt="QGIS2Web"
                      className="h-10 w-auto"
                  />
                  <span className="text-slate-200 text-sm">qgis2web</span>
                </a>
              </div>








            </div>
          </div>
        </div>
      </footer>
  );
}

export default Footer;
