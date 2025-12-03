export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#1b120c] text-[#fdf4e3]">
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-[#f5c781] mb-4">
          Contact G3 Ranch
        </h1>

        <p className="text-[#f2dfc2] mb-8 max-w-xl">
          Have a question about our horses, training, or visiting the ranch?
          Send us a note and we’ll get back to you soon.
        </p>

        <form className="space-y-5 max-w-lg">
          <div>
            <label className="block text-sm mb-1 text-[#d9b07c]">Name</label>
            <input
              type="text"
              className="w-full rounded-md border border-[#3b2618] bg-[#140d08] px-3 py-2 text-sm text-[#fdf4e3] focus:outline-none focus:ring-2 focus:ring-[#f5c781]"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-[#d9b07c]">Email</label>
            <input
              type="email"
              className="w-full rounded-md border border-[#3b2618] bg-[#140d08] px-3 py-2 text-sm text-[#fdf4e3] focus:outline-none focus:ring-2 focus:ring-[#f5c781]"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-[#d9b07c]">Message</label>
            <textarea
              rows={5}
              className="w-full rounded-md border border-[#3b2618] bg-[#140d08] px-3 py-2 text-sm text-[#fdf4e3] focus:outline-none focus:ring-2 focus:ring-[#f5c781]"
              placeholder="How can we help?"
            />
          </div>

          <button
            type="submit"
            className="px-6 py-3 bg-[#f5c781] text-[#2b1a10] rounded-lg font-semibold hover:bg-[#f8d395] transition"
          >
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}
