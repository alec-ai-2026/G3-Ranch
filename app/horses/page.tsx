import Image from "next/image";
import { horses } from "./horsesData";

export default function HorsesPage() {
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

                <button className="mt-4 ranch-btn-outline w-full">
                  More Info
                </button>
              </div>
            </div>
          ))}
        </section>

        <section className="text-center mt-16">
          <p className="text-[#fdf4e3]/60 text-sm">
            Looking for a sale horse? Reach out for availability and pricing.
          </p>
        </section>

      </div>
    </main>
  );
}
