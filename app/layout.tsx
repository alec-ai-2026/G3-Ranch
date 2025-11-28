import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "G3 Ranch",
  description: "Faith, family, and good horses – welcome to G3 Ranch.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#110b07] text-[#fdf4e3]">
        <div className="min-h-screen flex flex-col">
          {/* Top bar / nav */}
          <header className="border-b border-[#3b2618] bg-[#1b120c]/95 backdrop-blur">
            <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
              <a href="/" className="flex flex-col leading-tight">
                <span className="text-xs uppercase tracking-[0.3em] text-[#d9b07c]">
                  G3 Ranch
                </span>
                <span className="text-lg font-semibold text-[#f5c781]">
                  Faith • Family • Horses
                </span>
              </a>

              <nav className="flex gap-6 text-sm">
                <a
                  href="/"
                  className="hover:text-[#f5c781] transition-colors"
                >
                  Home
                </a>
                <a
                  href="/horses"
                  className="hover:text-[#f5c781] transition-colors"
                >
                  Horses
                </a>
                <a
                  href="/contact"
                  className="hover:text-[#f5c781] transition-colors"
                >
                  Contact
                </a>
              </nav>
            </div>
          </header>

          {/* Main page content */}
          <main className="flex-1">
            {children}
          </main>

          {/* Footer */}
          <footer className="border-t border-[#3b2618] bg-[#140d08]">
            <div className="max-w-5xl mx-auto px-4 py-4 text-xs flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between text-[#c8a678]/80">
              <span>© {new Date().getFullYear()} G3 Ranch. All rights reserved.</span>
              <span className="uppercase tracking-[0.25em] text-[0.6rem]">
                Built on grit & grace
              </span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
