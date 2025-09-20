import { Link } from "react-router-dom";
import HeaderHero from "../Components/HeaderHero";
import TeamGrid from "../Components/TeamGrid";
import team from "../data/team.json";

export default function Home() {
  return (
    <>
      <HeaderHero />

      <main className="bg-black text-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-10 space-y-10">
          {/* Latar Belakang */}
          <article className="bg-gradient-to-b from-slate-900/60 to-black/40 rounded-2xl p-6 md:p-8 shadow-md">
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Latar Belakang
            </h1>
            <p className="text-sm md:text-base leading-relaxed text-gray-300 text-justify">
              Khabib Abdulmanapovich Nurmagomedov lahir pada 20 September 1988
              di Slidi, Dagestan, Rusia. Khabib kecil mulai menunjukkan
              ketertarikan pada seni bela diri saat melihat pelatihan di pusat
              kebugaran milik ayahnya, Abdulmanap Nurmagomedov. Sang ayah
              merupakan seorang atlet dan veteran Angkatan Darat yang juga
              menjadi pelatih olahraga bela diri campuran asal Rusia, Sambo.
              <br />
              <br />
              Saat usianya menginjak 12 tahun, Khabib yang merupakan anak kedua
              dari tiga bersaudara ini mulai berlatih gulat. Kemudian, di usia
              15 tahun dirinya mulai menekuni judo. Barulah di usianya yang
              ke-17 tahun Khabib mulai berlatih sambo di bawah pengawasan sang
              ayah.
              <br />
              <br />
              Ayah Khabib merupakan pelatih elite dinegaranya, ia spesialisasi
              di gulat dan sambo. Saking besar jasa Abdulmanap bagi dunia mixed
              martial arts di negara kelahirannya, Abdulmanap dijuluki "Ayah MMA
              Dagestan."
              <br />
              <br />
              Khabib memliki julukan yaitu "The Eagle". Julukan itu tak lepas
              dari tempat ia dibesarkan yaitu Dagestan. "Elang adalah simbol
              Republik Dagestan, tempat saya dilahirkan dan tinggal. Saya ingin
              menjadi perwakilan yang layak dari tanah air saya dan orang-orang
              saya, jadi saya suka nama panggilan ini," ucapnya dalam sebuah
              sesi wawancara.
            </p>
          </article>

          {/* About Ayah */}
          <aside className="bg-black/40 rounded-2xl p-4 md:p-6 shadow-inner">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-full md:w-1/3 flex justify-center">
                <img
                  src="/assets/khabib_img/ayah_khabib.jpg"
                  alt="ayah khabib"
                  className="w-2xs h-48 md:w-2xl md:h-1/2 object-cover rounded-xl border-2 border-white/10 shadow-lg"
                  loading="lazy"
                />
              </div>

              <div className="w-full md:w-2/3">
                <h2 className="text-xl font-semibold text-white mb-2">
                  Abdulmanap Nurmagomedov
                </h2>
                <p className="text-sm text-gray-300 leading-relaxed text-justify">
                  Abdulmanap mempunyai pengaruh besar bagi latihan dan kehidupan
                  Khabib. Abdulmanap pernah bercerita mengenai Khabib dalam
                  suatu wawancara, "Khabib kecil sangat aktif, ia selalu
                  memanjat dan melompati berbagai hal mulai dari tembok sampai
                  pohon rumah tetangga," ujarnya. Ia juga mengaku tak pernah
                  memberi perlakuan istimewa kepada Khabib saat anaknya
                  menginjak usia remaja.
                  <br />
                  <br />
                  Kedekatan dan kecintaan Khabib terhadap ayahnya terlihat jelas
                  dari beberapa interview yang pernah dilakoni sang petarung.
                  "Ini penting sekali, hormati orang tua kalian dan jaga mereka
                  dekat dengan Anda," tuturnya sebelum duel kontra Dustin
                  Poirier pada September 2019. "Orang tua adalah segalanya. Jika
                  mendengarkan ibu dan ayah, semua di hidup kalian akan baik.
                  Dekatlah dengan mereka."
                </p>
              </div>
            </div>
          </aside>

          {/* Rekan & Team */}
          <article className="bg-gradient-to-b from-black/40 to-black/20 rounded-2xl p-6 md:p-8">
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Rekan Senegara
            </h1>
            <p className="text-sm md:text-base text-gray-300 mb-6 text-justify">
              Khabib juga memiliki beberapa rekan senegara yang bertanding di UFC, di antaranya Umar Nurmagomedov, Movsar Evloev, Islam Makhachev, dan Magomed Ankalaev.
            </p>

            <TeamGrid team={team} />

            <section
              className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="md:col-span-2 rounded-xl overflow-hidden relative">
                <img
                  src="/assets/khabib_img/kribo_land2.jpg"
                  alt="kisah awal karir"
                  className="w-full h-56 md:h-72 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-xl font-semibold text-white">
                    Kisah awal karir Khabib Nurmagomedov
                  </h3>
                  <p className="text-sm text-gray-300 mt-2">
                    Perjalanan dari regional ke panggung dunia.
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-center items-start gap-4 p-4 rounded-xl bg-slate-900/60">
                <h4 className="text-lg font-semibold text-white">
                  Penasaran sama awal perjalanan Khabib?
                </h4>
                <p className="text-sm text-gray-300">
                  Klik tombol untuk membaca perjalanan awal karir Khabib.
                </p>
                <Link
                  to="/awal-karir"
                  className="inline-block mt-2 px-4 py-2 rounded-full bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition"
                >
                  Baca Awal Karir
                </Link>
              </div>
            </section>
          </article>
        </div>
      </main>
    </>
  );
}
