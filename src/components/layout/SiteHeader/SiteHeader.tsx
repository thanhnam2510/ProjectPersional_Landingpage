import { ui } from '@/content/ui'
import { useScrolledPast } from '@/hooks/useScrolledPast'
import { useLang } from '@/i18n'
import { Brand } from '@/components/ui/Brand'
import { LanguageSwitch } from '@/components/layout/LanguageSwitch'
import './SiteHeader.scss'

/** Fixed top bar: transparent over the hero, white once the page scrolls. */
export function SiteHeader() {
  const { t } = useLang()
  const solid = useScrolledPast(12)

  return (
    <header className={solid ? 'site-header site-header--solid' : 'site-header'}>
      <div className="site-header__inner">
        <Brand />
        <nav className="site-header__nav">
          {ui.nav.map((link) => (
            <a key={link.href} href={link.href}>
              {t(link.label)}
            </a>
          ))}
        </nav>
        <div className="site-header__tools">
          <LanguageSwitch />
          <a className="site-header__cta" href="#contact">
            {t(ui.cta)}
          </a>
        </div>
      </div>
    </header>
  )
}
