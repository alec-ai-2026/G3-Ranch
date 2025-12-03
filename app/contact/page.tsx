import React from "react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-neutral-100">
      <section className="mx-auto max-w-5xl px-4 py-16">
        {/* Heading */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Get in Touch With G3 Ranch
          </h1>
          <p className="mt-4 text-neutral-600 max-w-2xl mx-auto">
            Whether you’re planning a stay, an event, a tour, or just have
            questions about the ranch, we’d love to hear from you. Fill out
            the form below and we’ll get back to you as soon as we can.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-[1.1fr,0.9fr]">
          {/* Form */}
          <div className="rounded-2xl bg-white p-6 shadow-md md:p-8">
            <h2 className="text-xl font-semibold mb-4">Send Us a Message</h2>

            <form
              className="space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Form submitted (connect this to your backend later).");
              }}
            >
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                  Full Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="w-full rounded-xl border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-800"
                  name="name"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                  Email<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  className="w-full rounded-xl border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-800"
                  name="email"
                  placeholder="you@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full rounded-xl border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-800"
                  name="phone"
                  placeholder="(555) 555-5555"
                />
              </div>

              {/* Interest Type */}
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                  What are you interested in?
                </label>
                <select
                  name="interest"
                  className="w-full rounded-xl border border-neutral-300 px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-neutral-800"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="stay">Staying at the ranch</option>
                  <option value="event">Hosting an event / wedding</option>
                  <option value="tour">Ranch tour / day visit</option>
                  <option value="media">Content / media / collab</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Dates & Group Size */}
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    Preferred Date(s)
                  </label>
                  <input
                    type="text"
                    name="dates"
                    className="w-full rounded-xl border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-800"
                    placeholder="e.g., June 10–12"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    Group Size
                  </label>
                  <input
                    type="number"
                    name="groupSize"
                    min={1}
                    className="w-full rounded-xl border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-800"
                    placeholder="e.g., 6"
                  />
                </div>
              </div>

              {/* How did you hear about us */}
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                  How did you hear about G3 Ranch?
                </label>
                <input
                  type="text"
                  name="referral"
                  className="w-full rounded-xl border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-800"
                  placeholder="Friend, Instagram, Google, etc."
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                  Message / Details
                </label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full rounded-xl border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-800"
                  placeholder="Tell us a bit more about what you’re planning…"
                />
              </div>

              {/* Newsletter */}
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="newsletter"
                  name="newsletter"
                  className="mt-1 h-4 w-4 rounded border-neutral-300 text-neutral-900 focus:ring-neutral-900"
                />
                <label
                  htmlFor="newsletter"
                  className="text-xs text-neutral-700"
                >
                  I’d like to receive occasional updates and news from G3 Ranch.
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="mt-2 w-full rounded-xl bg-neutral-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-900"
              >
                Send Inquiry
              </button>

              <p className="mt-2 text-xs text-neutral-500 text-center">
                We typically reply within 24–48 hours.
              </p>
            </form>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="rounded-2xl bg-white p-6 shadow-md">
              <h2 className="text-lg font-semibold mb-3">Contact Details</h2>
              <p className="text-sm text-neutral-700">
                <span className="font-medium">Email:</span> info@g3ranch.com
              </p>
              <p className="text-sm text-neutral-700 mt-1">
                <span className="font-medium">Phone:</span> (555) 555-5555
              </p>
              <p className="text-sm text-neutral-700 mt-1">
                <span className="font-medium">Location:</span> G3 Ranch – Your
                City, State
              </p>
              <p className="text-sm text-neutral-600 mt-4">
                Office hours: Mon–Fri, 9am–5pm (local time)
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-md">
              <h2 className="text-lg font-semibold mb-3">Find Us</h2>
              <div className="h-52 w-full rounded-xl border border-dashed border-neutral-300 flex items-center justify-center text-xs text-neutral-500">
                Map / ranch photo placeholder
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
