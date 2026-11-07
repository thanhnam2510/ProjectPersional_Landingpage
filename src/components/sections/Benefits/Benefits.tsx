import { Icon } from '@/components/ui/Icon'
import { ui } from '@/content/ui'
import { useLang } from '@/i18n'
import './Benefits.scss'

/** Four reasons to choose TeamFlow, on the dark band after the audience section. */
export function Benefits() {
  const { t } = useLang()
  return (
    <section className="benefits">
      <div className="benefits__inner">
        <div className="section-head section-head--light">
          <p className="eyebrow">{t(ui.whyEyebrow)}</p>
          <h2>{t(ui.whyTitle)}</h2>
        </div>
        <div className="benefits__grid">
          {ui.why.map((item) => (
            <article className="benefit-card" key={item.title.en}>
              <span className="benefit-card__icon">
                <Icon name={item.icon} size={22} />
              </span>
              <h3>{t(item.title)}</h3>
              <p>{t(item.text)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
