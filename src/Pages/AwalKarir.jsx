import { Link } from "react-router-dom";
import fights from "../data/fights";

export default function AwalKarir() {
  return (
    <>
      <main className="bg-black text-gray-200 py-10">
        <div className="max-w-6xl mx-auto px-4 space-y-8 mt-8">
          <article className="bg-slate-800/40 rounded-2xl p-6 md:p-8 shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Awal Karir
                </h1>
                <p className="text-sm md:text-base leading-relaxed text-gray-300 text-justify">
                  Khabib Nurmagomedov memulai debut MMA profesionalnya pada
                  September 2008 dan mengumpulkan empat kemenangan dalam waktu
                  kurang dari sebulan. Pada 11 Oktober, ia menjadi juara
                  turnamen Piala Atrium perdana, setelah mengalahkan tiga
                  lawannya di acara Moskow . Selama tiga tahun berikutnya, ia
                  tak terkalahkan, menyelesaikan 11 dari 12 lawan. Ini termasuk
                  penyelesaian armbar ronde pertama dari penantang gelar
                  Bellator masa depan Shahbulat Shamhalaev , yang menandai
                  debutnya di M-1 Global . Pada tahun 2011, ia berkompetisi
                  dalam tujuh pertarungan untuk promosi ProFC, yang semuanya
                  dimenangkannya dengan TKO atau submission.
                  <br />
                  <br />
                  Rekor 16-0 diregional Rusia dan Ukraina membangkitkan minat
                  dari Ultimate Fighting Championship (UFC) untuk merekrut
                  Nurmagomedov. Kemudian, ayah Nurmagomedov mengungkapkan dalam
                  sebuah wawancara bahwa karena perselisihan kontrak dengan
                  ProFC, mereka memiliki 11 kasus pengadilan yang menentang
                  legitimasi kontrak UFC Nurmagomedov. Setelah kalah enam kali
                  dan memenangkan lima kasus, mereka mencapai kesepakatan dan
                  Khabib dapat melanjutkan karirnya.
                  <br />
                  <br />
                  Menjelang pertandingannya khabib biasa menggunakan rambut
                  palsu (wig). Bukan tanpa alasan Khabib getol mengenakan wig
                  itu. Papakha digunakan Khabib sebagai identitas dirinya.
                  Khabib dibesarkan di Dagestan, Rusia. Papakha kerap dikenakan
                  oleh orang-orang Dagestan dan berbagai suku lainnya yang
                  berada di wilayah Pegunungan Kaukasus. Berdasarkan
                  Encyclopedia of National Dress: Traditional Clothing Around
                  the World, pria dan anak-anak Dagestan mengenakan papakha
                  sepanjang tahun. "Papakha mewakili dari mana saya berasal.
                  Kampung kecil saya di Dagestan," ujar Khabib.
                </p>
              </div>

              <div className="flex justify-center">
                <img
                  src="/assets/khabib_img/khabib-papakha.png"
                  alt="khabib papakha"
                  className="w-48 h-48 md:w-2xl md:h-1/3 object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </article>

          {/* Perjalanan di UFC */}
          <aside className="bg-gradient-to-b from-black/30 to-black/10 rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              Perjalanan Khabib di UFC
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {fights.map((f, idx) => (
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
                      className="w-full h-48 object-cover rounded-md"
                      loading="lazy"
                    />
                  </a>

                  <div className="mt-3 flex-1 flex flex-col">
                    <h3 className="text-lg font-semibold text-white">
                      {f.title}
                    </h3>
                    <h4 className="text-sm text-gray-400">{f.date}</h4>
                    <p className="text-sm text-gray-300 mt-2 flex-1">
                      {f.desc}
                    </p>

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
                src="/assets/khabib_img/khabib-champ.jpeg"
                alt="pencapaian"
                className="w-full h-56 md:h-72 object-cover"
                loading="lazy"
              />
              <div className="p-4 bg-slate-900/60">
                <h3 className="text-xl font-semibold text-white">
                  Pencapaian Khabib Nurmagomedov
                </h3>
                <Link
                  to="/pencapaian"
                  className="inline-block mt-3 px-4 py-2 rounded-full bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition"
                >
                  Klik Disini
                </Link>
              </div>
            </section>
          </aside>
        </div>
      </main>
    </>
  );
}
