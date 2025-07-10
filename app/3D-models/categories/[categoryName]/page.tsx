import type { categoryPageProps } from "@/app/types";
import { getCategoryBySlug } from "@/app/lib/categories"


export default async function categoryPage ({params}: categoryPageProps) {
    const { categoryName } = await params;
    const category = getCategoryBySlug(categoryName)
    console.log(category)

    return <h1>{categoryName}</h1>
}