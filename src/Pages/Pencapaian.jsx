import { Link } from "react-router-dom";
import fightChamp from "../data/fightChamp";

export default function Pencapaian() {
  return (
    <>
      <main className="bg-black text-gray-200 py-10">
        <div className="max-w-6xl mx-auto px-4 space-y-8 mt-8">
          <article className="bg-slate-800/40 rounded-2xl p-6 md:p-8 shadow-md">
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Pencapaian
            </h1>
            <h2 className="text-xl text-yellow-300 font-semibold mb-4">
              Juara Kelas Ringan UFC <i>(UFC Lightweight Champion)</i>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {fightChamp.map((f, idx) => (
                <article
                  key={idx}
                  className="bg-slate-900/60 rounded-xl p-4 shadow-sm flex flex-col"
                >
                  <a
                    href={f.video}
                    target="_blank"
                    rel="noreferrer"
                    className="block overflow-hidden rounded-md"
                  >
                    <img
                      src={f.img}
                      alt={f.title}
                      className="w-full h-48 object-cover"
                      loading="lazy"
                    />
                  </a>

                  <div className="mt-3 flex-1 flex flex-col">
                    <h3 className="text-lg font-semibold text-white">
                      {f.title}
                    </h3>
                    <h4 className="text-sm text-gray-400">{f.date}</h4>
                    <p className="text-sm text-gray-300 mt-2">{f.desc}</p>

                    <div className="mt-4 flex items-center justify-between">
                      <a
                        href={f.video}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition text-sm"
                      >
                        Tonton
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M6.5 5.5v9l7-4.5-7-4.5z" />
                        </svg>
                      </a>

                      <span className="text-xs text-gray-400">
                        Sumber: YouTube
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <section
              className="mt-8 rounded-xl overflow-hidden"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <img
                src="/assets/khabib_img/khabib-akhir-karir.jpg"
                alt="akhir karir"
                className="w-full h-56 md:h-72 object-cover"
                loading="lazy"
              />
              <div className="p-4 bg-slate-900/60">
                <h3 className="text-xl font-semibold text-white">
                  Akhir Karir Khabib Nurmagomedov
                </h3>
                <Link
                  to="/akhir-karir"
                  className="inline-block mt-3 px-4 py-2 rounded-full bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition"
                >
                  Klik Disini
                </Link>
              </div>
            </section>
          </article>
        </div>
      </main>
    </>
  );
}
