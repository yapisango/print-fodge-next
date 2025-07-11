"use client"

import Link from "next/link"
import NavLink from "@/app/components/NavLink"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const pathname = usePathname()

  return (
    <header className="w-full bg-white">
      <nav className="flex justify-between px-6 py-4 pr-2">
        <Link href="/">
          <div className="relative cursor-pointer">
            {/* Desktop Logo */}
            <img
              src="images/printforge-logo.svg"
              alt="PrintForge Logo"
              className="w-[200px] h-auto hidden md:block"
            />
            {/* Mobile Logo */}
            <img
              src="images/printforge-logo-icon.svg"
              alt="PrintForge Logo"
              className="w-[40px] h-auto block md:hidden"
            />
          </div>
        </Link>

        <ul className="flex items-center gap-1.5">
          <NavLink href="/3d-models" isActive={pathname === "/3d-models"}>
            3D Models
          </NavLink>
          <NavLink href="/about" isActive={pathname === "/about"}>
            About
          </NavLink>
        </ul>
      </nav>
    </header>
  )
}
