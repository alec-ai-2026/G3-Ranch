export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#1b120c] text-[#fdf4e3]">
      <section className="max-w-5xl mx-auto px-4 py-20">
        <p className="text-xs uppercase tracking-[0.25em] text-[#d9b07c] mb-4">
          Welcome to
        </p>

        <h1 className="text-5xl font-bold text-[#f5c781] mb-6">
          G3 Ranch
        </h1>

        <p className="text-lg text-[#f2dfc2] max-w-xl mb-10">
          A working western ranch built on faith, family, and good horses.
          We raise, train, and honor the horses that carry our brand, our work,
          and our legacy forward.
        </p>

        <div className="flex gap-4">
          <a
            href="/horses"
            className="px-6 py-3 bg-[#f5c781] text-[#2b1a10] rounded-lg font-semibold hover:bg-[#f8d395] transition"
          >
            Meet Our Horses
          </a>

          <a
            href="/contact"
            className="px-6 py-3 border border-[#f5c781] text-[#f5c781] rounded-lg font-semibold hover:bg-[#2b1a10] transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}
