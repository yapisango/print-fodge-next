import "./globals.css"
import Link from "next/link"
import { Albert_Sans, Montserrat_Alternates } from "next/font/google"

const albertSans = Albert_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-albert-sans",
})

const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat-alternates"
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"
        className={`${montserratAlternates.variable} ${albertSans.variable}`}
      >
      <body>
        <header className="w-full bg-white">
          <nav className="flex justify-between px-6 py-4">
            <Link href="/">
            <div className="flex items-center">
              {/* Desktop logo */}
              <img
                src="images/printforge-logo.svg"
                alt="PrintForge Logo"
                className="w-[200px] h-auto hidden md:block object-contain"
              />
              {/* Mobile logo */}
              <img
                src="images/printforge-logo-icon.svg"
                alt="PrintForge Logo"
                className="w-[40px] h-auto block md:hidden object-contain"
              />
            </div>
            </Link>
            <ul className="flex items-center gap-2.5">
              <li><Link href="/3d-models">3D Models</Link></li>
              <li><Link href="/about">AboutPage</Link></li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
