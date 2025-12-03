export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#1b120c] text-[#fdf4e3] flex items-center justify-center px-6 py-20">
      <section className="max-w-4xl text-center">

        <p className="text-xs uppercase tracking-[0.25em] text-[#d9b07c] mb-4">
          Welcome to
        </p>

        <h1 className="text-5xl md:text-6xl font-bold text-[#f5c781] mb-6 drop-shadow-lg">
          G3 Ranch Performance Horses
        </h1>

        <p className="text-lg md:text-xl text-[#f2dfc2] max-w-2xl mx-auto leading-relaxed mb-10">
          A modern western ranch built on faith, family, and good horses — powered by
          love, sweat, and innovative AI that helps us care for each horse like family.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">

          <a
            href="/walk-the-stalls"
            className="px-6 py-3 bg-[#f5c781] text-[#2b1a10] rounded-lg font-semibold 
                       hover:bg-[#f8d395] transition shadow-md text-center"
          >
            Walk the Stalls™
          </a>

          <a
            href="/horses"
            className="px-6 py-3 border border-[#f5c781] text-[#f5c781] rounded-lg font-semibold 
                       hover:bg-[#2b1a10] hover:text-[#f5c781] transition text-center"
          >
            Meet Our Horses
          </a>

          <a
            href="/join"
            className="px-6 py-3 bg-[#8d3f2f] text-white rounded-lg font-semibold 
                       hover:bg-[#a24f3a] transition shadow-md text-center"
          >
            Join the Ranch
          </a>

        </div>
      </section>
    </main>
  );
}

