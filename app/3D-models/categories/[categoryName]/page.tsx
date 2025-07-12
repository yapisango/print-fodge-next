import ModelsGrid from "@/app/components/ModelsGrid"
import { getCategoryBySlug } from "@/app/lib/categories"
import { getModels } from "@/app/lib/models"
import type { CategoryPageProps } from "@/types"

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { categoryName } = params

  const category = getCategoryBySlug(categoryName)

  if (!category) {
    return <h1>Category not found</h1>
  }

  const models = await getModels({ category: category.slug })

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">{category.displayName}</h1>
      <ModelsGrid models={models} title={category.displayName} />
    </div>
  )
}



