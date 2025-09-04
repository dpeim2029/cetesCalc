import type { ReactNode } from "react"

interface LayoutProps {
  children: ReactNode
}

export default function ArticleLayout({ children }: LayoutProps) {
  return <article className="prose prose-lg mx-auto max-w-4xl px-4 py-8">{children}</article>
}
