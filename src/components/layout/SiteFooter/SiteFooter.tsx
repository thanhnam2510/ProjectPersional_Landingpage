import { chapters } from '@/content/chapters'
import { ui } from '@/content/ui'
import { useLang } from '@/i18n'
import { Brand } from '@/components/ui/Brand'
import './SiteFooter.scss'

const year = new Date().getFullYear()

export function SiteFooter() {
  const { t } = useLang()
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <Brand />
        <nav className="site-footer__nav">
          {chapters.map((chapter) => (
            <a key={chapter.id} href={`#${chapter.id}`}>
              {t(chapter.title)}
            </a>
          ))}
        </nav>
        <p>
          © {year} TeamFlow. {t(ui.footer)}
        </p>
      </div>
    </footer>
  )
}
