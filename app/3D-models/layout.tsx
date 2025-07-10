import Link from "next/link"
import { getAllCategories } from "@/app/lib/categories"
import type { ReactNode } from "react"
import type { Category } from "@/app/types"

export default function ModelsLayout({children} : {children: ReactNode}) {
  const categories: Category[] = getAllCategories()
  console.log(categories)
  return (
    <div>
        <nav>
            <Link href="/3d-models">All</Link>
            {categories.map((category) => (
                <Link key={category.slug} href={`/3D-models/categories/${category.slug}`}>
                    {category.displayName}
                </Link>
            ))}
        </nav>
        {children}
    </div>
  )
}