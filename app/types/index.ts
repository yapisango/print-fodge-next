import type { ReactNode, HTMLAttributes } from "react"

// Data Types
export type Model = {
  id: number
  name: string
  description: string
  likes: number
  image: string
  category: string
  dateAdded: string
}

// Page Types
export type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>

export type ModelDetailPageProps = {
    params: Promise<{
        id: string
    }>
}

// Components Types
export type ModelCardProps = {
    model: Model
}

export type PillProps = {
    children: ReactNode
    className?: string
} & HTMLAttributes<HTMLSpanElement>

export type ModelsGridProps = {
  title: string;
  models: Model[];
};

export type Category = {
  slug: string;
  displayName: string;
};

export type CategoriesData = {
    categories: Category[]
}


export type CategoryPageProps = {
  params: Promise<{
    categoryName: string;
  }>
};

export type NavLinkProps = {
    href: string
    children: ReactNode
    isActive?: boolean
}
