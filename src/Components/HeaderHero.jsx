

export default function HeaderHero() {
  return (
    <header className="bg-gradient-to-b from-slate-900 via-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto px-4 py-12 lg:py-24 flex flex-col-reverse lg:flex-row items-center gap-8">
        {/* Text area */}
        <div className="w-full lg:w-1/2 text-center lg:text-left mt-9">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Khabib <span className="italic font-semibold text-yellow-300">"The Eagle"</span>
            <span className="block">Nurmagomedov</span>
          </h1>

          <h3 className="mt-4 text-base sm:text-lg md:text-xl text-gray-300">
            Mari membaca...
          </h3>
        </div>

        {/* Image area - HIDDEN on mobile, visible at lg and above */}
        <div className="hidden lg:flex w-full lg:w-1/2 justify-center lg:justify-end">
          <img
            src="/assets/khabib_img/khabib-hero-header.png"
            alt="Khabib Nurmagomedov"
            className="w-48 sm:w-64 md:w-80 lg:w-96 object-contain drop-shadow-2xl"
            loading="lazy"
          />
        </div>
      </div>
    </header>
  );
}
