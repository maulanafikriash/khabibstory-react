export default function AkhirKarir() {
  return (
    <>
      <main className="bg-black text-gray-200 py-10">
        <div className="max-w-6xl mx-auto px-4 space-y-8 mt-8">
          <article className="bg-slate-800/40 rounded-2xl p-6 md:p-8 shadow-md">
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Akhir Karir
            </h1>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed text-justify">
              Khabib Nurmagomedov telah resmi memutuskan pensiun dari UFC.
              Khabib pertama kali mengungkapkan hal ini di UFC 254, 24 Oktober
              2020, setelah mengalahkan Justin Gaethje. Ia menutup kisahnya di
              octagon dan memilih pensiun sebagai bentuk menghormati mendiang
              ayahnya. Khabib menutup karirnya dengan rekor tak terkalahkan
              29-0.
            </p>
          </article>

          <article className="bg-slate-900/60 rounded-2xl p-6 md:p-8 shadow-sm flex flex-col md:flex-row items-center gap-6">
            <div className="w-full md:w-1/3 flex justify-center">
              <img
                src="/assets/khabib_img/sosok-khabib.jpg"
                alt="sosok khabib"
                className="w-2xs h-48 md:w-2xl md:h-52 object-cover rounded-xl"
                loading="lazy"
              />
            </div>
            <div className="w-full md:w-2/3">
              <p className="text-sm text-gray-300 leading-relaxed text-justify">
                Dalam wawancara pasca pertarungannya, Khabib mengumumkan
                pengunduran dirinya dari seni bela diri campuran. Dia
                menjelaskan bahwa dia telah berjanji kepada ibunya bahwa dia
                tidak akan terus bertarung tanpa mendiang ayahnya,
                <br />
                <br />
                "Tidak mungkin saya akan datang ke sini tanpa ayah saya. Ini
                adalah pertama kalinya setelah apa yang terjadi dengan ayah
                saya, ketika UFC menelepon saya tentang Justin, saya berbicara
                dengan ibu saya tiga hari. Dia tidak ingin saya pergi berkelahi
                tanpa ayah saya, tetapi saya berjanji padanya itu akan menjadi
                pertarungan terakhir saya. Jika saya memberikan kata-kata saya,
                saya harus mengikuti ini. pertarungan terakhir di sini".
              </p>
            </div>
          </article>

          <article className="bg-slate-800/40 rounded-2xl p-6 md:p-8 shadow-md">
            <img
              src="/assets/khabib_img/hall-of-fame.jpg"
              alt="hall of fame"
              className="w-full h-56 md:h-72 object-cover rounded-md mb-4"
              loading="lazy"
            />
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Hall Of Fame UFC
            </h1>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed text-justify">
              Legenda Mixed Martial Arts (MMA), Khabib Nurmagomedov mendapat
              apresiasi tinggi. Mantan juara UFC (Ultimate Fighting
              Championship) terpilih masuk Hall of Fame. Dalam The UFC's 10th
              Annual International Fight Week 2022, beberapa atlet terhebat UFC
              yang sangat berpengaruh di olahraga Mixed Martial Arts (MMA)
              mendapat penghargaan khusus.
              <br />
              <br />
              Upacara pelantikan Hall of Fame UFC berlangsung pada 01 Juli 2022
              di T-Mobile Arena, Las Vegas, Amerika Serikat. Di antara para
              peraih penghargaan, terdapat nama terkenal. Mantan juara kelas
              ringan yang tak terkalahkan dan memiliki rekor sempurna 29-0
              sepanjang kariernya di UFC, dan selalu mengalahkan penantang
              teratas dan mantan juara, Khabib Nurmagomedov terpilih masuk dalam
              deretan bergengsi.
              <br />
              <br />
              "Saya merasa telah melakukan banyak hal untuk olahraga ini dan
              saya sangat senang untuk ini," kata Khabib Nurmagomedov.
              "Penghargaan ini merupakan kehormatan yang sangat besar bagi saya.
              Ketika mereka menempatkan Anda di posisi tingkat tinggi seperti
              ini, itu berarti kerja keras Anda terbayar." Khabib Nurmagomedov
              pantas masuk ke dalam kelompok termasyhur (Hall of Fame) UFC untuk
              prestasinya dalam olahraga MMA. Sepanjang kiprahnya beradu
              perkelahian bebas, atlet Muslim dari Russia mencatat rekor
              fantastis. Ia tidak terkalahkan sampai peristiwa pribadi
              menghentikan minatnya.
            </p>
          </article>

          <aside>
            <section
              className="profile_ bg-slate-900/50 rounded-2xl p-6 md:p-8"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="w-full">
                  <h3 className="text-lg font-semibold text-white">
                    @maulanafikriash
                  </h3>
                  <p className="text-sm text-gray-300">
                    <i>Front-end Web Developer from Bekasi, Indonesia</i>
                  </p>
                </div>

                <div className="w-full">
                  <p className="text-sm text-gray-300 mt-3">
                    "Saya membuat website dengan tema atlet MMA dari promotor
                    UFC, karena saya menggemari olahraga bela diri tersebut,
                    khususnya mantan atlet UFC Khabib Nurmagomedov. Semoga
                    informasi yang disajikan dapat menambah wawasan kita tentang
                    dunia combat sport."
                  </p>
                </div>
              </div>
            </section>
          </aside>
        </div>
      </main>
    </>
  );
}
