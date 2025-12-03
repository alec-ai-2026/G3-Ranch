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
        <div className="pt-4">
          {children}
        </div>
      </body>
    </html>
  );
}

