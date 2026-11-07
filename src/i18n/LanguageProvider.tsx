import { useEffect, useMemo, useState, type ReactNode } from 'react'
import type { Lang } from '@/types/content'
import { LanguageContext, type LanguageValue } from './LanguageContext'

const STORAGE_KEY = 'teamflow.landing.lang'

function storedLang(): Lang {
  return localStorage.getItem(STORAGE_KEY) === 'en' ? 'en' : 'vi'
}

/** Holds the chosen language, remembers it, and keeps `<html lang>` in sync. */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(storedLang)

  useEffect(() => {
    document.documentElement.lang = lang
    localStorage.setItem(STORAGE_KEY, lang)
  }, [lang])

  const value = useMemo<LanguageValue>(() => ({ lang, setLang, t: (copy) => copy[lang] }), [lang])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
