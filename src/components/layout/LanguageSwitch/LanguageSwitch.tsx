import { useLang } from '@/i18n'
import type { Lang } from '@/types/content'
import './LanguageSwitch.scss'

const languages: { id: Lang; label: string }[] = [
  { id: 'vi', label: 'VI' },
  { id: 'en', label: 'EN' },
]

/** VI / EN toggle in the header. */
export function LanguageSwitch() {
  const { lang, setLang } = useLang()
  return (
    <div className="language-switch" role="group" aria-label={lang === 'vi' ? 'Ngôn ngữ' : 'Language'}>
      {languages.map((item) => (
        <button
          key={item.id}
          type="button"
          className={lang === item.id ? 'is-active' : undefined}
          aria-pressed={lang === item.id}
          onClick={() => setLang(item.id)}
        >
          {item.label}
        </button>
      ))}
    </div>
  )
}
