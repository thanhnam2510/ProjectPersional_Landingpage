import { createContext } from 'react'
import type { Copy, Lang } from '@/types/content'

export type LanguageValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  /** The text of `copy` in the current language. */
  t: (copy: Copy) => string
}

export const LanguageContext = createContext<LanguageValue | null>(null)
