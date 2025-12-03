// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "G3 Ranch Performance Horses",
  description: "A working western ranch built on faith, family, and good horses.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#1b120c] text-[#fdf4e3]">
        <div className="min-h-screen flex flex-col">
          {/* Top Ranch Header */}
          <header className="sticky top-0 z-50 border-b border-[#3a2518] bg-[#1f140d]/95 backdrop-blur-sm">
            <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
              {/* Brand */}
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-[#d9b07c]">
                  Faith • Family • Horses
                </p>
                <p className="text-lg font-semibold text-[#f5c781]">
                  G3 Ranch
                </p>
              </div>

              {/* Simple Nav */}
              <nav className="flex gap-4 text-sm">
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

          {/* Page content */}
          <main className="flex-1 pt-4">
            {children}
          </main>

          {/* Footer */}
          <footer className="border-t border-[#3a2518] bg-[#1f140d]">
            <div className="max-w-5xl mx-auto px-4 py-4 text-xs text-[#f2dfc2]/70 flex items-center justify-between">
              <span>© {new Date().getFullYear()} G3 Ranch. All rights reserved.</span>
              <span className="uppercase tracking-[0.25em] text-[#d9b07c]">
                Faith • Family • Horses
              </span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
