"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import clsx from "clsx"
import type { NavLinkProps } from "@/app/types"

export default function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname()
  const isActive = pathname.startsWith(href)

  return (
    <li className="text-sm uppercase">
      <Link
        href={href}
        className={clsx(
          "px-4 py-2 text-gray-700 transition-colors rounded-md cursor-pointer hover:text-orange-accent",
          isActive && "text-orange-accent font-semibold"
        )}
      >
        {children}
      </Link>
    </li>
  )
}

