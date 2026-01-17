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
              <p className="mt-2 max-w-md text-slate-200">
                @maran add whatever description you want
              </p>
            </div>

            <div className="space-y-2 md:text-right">
              <p
                  className="font-semibold text-white"
                  style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                add a sub title here to say something
              </p>
              <p className="text-slate-200">I'm a placeholder</p>
              <p className="text-slate-200">I'm a placeholder</p>
            </div>
          </div>
        </div>
      </footer>
  );
}

export default Footer;
