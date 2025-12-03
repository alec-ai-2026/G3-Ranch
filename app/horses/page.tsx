import Image from "next/image";

export default function HorsesPage() {
  // This will eventually come from a CMS or database, but hardcoding is fine for now.
  const horses = [
    {
      name: "Cowboy Drift",
      year: 2018,
      sex: "Gelding",
      img: "/horse1.jpg",
      desc: "A strong, cowy gelding with a big heart and a lot of try. Perfect for ranch work and intermediate riders.",
    },
    {
      name: "Blondie Rose",
      year: 2020,
      sex: "Mare",
      img: "/horse2.jpg",
      desc: "Flashy palomino mare with foundation bloodlines. Athletic, willing, and already showing tremendous potential.",
    },
    {
      name: "Rio Smokin Gun",
      year: 2017,
      sex: "Stallion",
      img: "/horse3.jpg",
      desc: "Powerful young stallion with a calm mind. Throws foals with bone, disposition, and natural athleticism.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#1b120c] text-[#fdf4e3] px-4 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Page Title */}
        <section className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.25em] text-[#d9b07c]">
            G3 Ranch Performance Horses
          </p>
          <h1 className="text-4xl font-semibold text-[#f5c781] mt-2">
            Our Horses
          </h1>
          <p className="text-sm text-[#fdf4e3]/70 mt-3 max-w-xl mx-auto">
            Performance-bred, ranch-raised, and built on faith, family, and
            foundation bloodlines.
          </p>
        </section>

        {/* Horses Grid */}
        <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {horses.map((horse, i) => (
            <div
              key={i}
              className="bg-[#24160f] border border-[#3a2518] rounded-xl shadow-md overflow-hidden"
            >
              {/* Image */}
              <div className="relative w-full h-56">
                <Image
                  src={horse.img}
                  alt={horse.name}
                  fill
                  className="object-cover rounded-t-xl"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <h2 className="text-xl font-semibold text-[#f5c781]">
                  {horse.name}
                </h2>
                <p className="text-sm text-[#d9b07c] mt-1">
                  {horse.year} • {horse.sex}
                </p>
                <p className="text-sm text-[#fdf4e3]/80 mt-3">{horse.desc}</p>

                {/* Button */}
                <button className="mt-4 ranch-btn-outline w-full">
                  More Info
                </button>
              </div>
            </div>
          ))}
        </section>

        {/* Footer Message */}
        <section className="text-center mt-16">
          <p className="text-[#fdf4e3]/60 text-sm">
            Looking for a sale horse? Reac
