function TeamCard({ img, name, desc }) {
  return (
    <div
      className="bg-white/5 border border-white/5 rounded-xl p-4 flex flex-col items-center gap-3 shadow-sm hover:shadow-lg transition"
      data-aos="fade-up"
    >
      <img
        src={img}
        alt={name}
        className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-cover rounded-full border-2 border-white/10 shadow-inner"
        loading="lazy"
      />
      <h3 className="text-lg font-semibold text-white text-center">{name}</h3>
      <p className="text-sm text-gray-300 leading-relaxed">{desc}</p>
    </div>
  );
}

export default function TeamGrid({ team }) {
  return (
    <section className="py-12 bg-gradient-to-b from-black/50 to-black">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
          Tim & Rekan
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {team.map((t, idx) => (
            <TeamCard key={idx} img={t.img} name={t.name} desc={t.desc} />
          ))}
        </div>
      </div>
    </section>
  );
}
