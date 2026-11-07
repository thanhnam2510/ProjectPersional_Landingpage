import { Icon } from '@/components/ui/Icon'
import { chapters } from '@/content/chapters'
import { ui } from '@/content/ui'
import { useLang } from '@/i18n'
import './FeatureAreas.scss'

/** Five cards, one per feature area, each linking to its showcase. */
export function FeatureAreas() {
  const { t } = useLang()
  return (
    <section className="feature-areas" id="features">
      <div className="section-head">
        <p className="eyebrow">{t(ui.modulesEyebrow)}</p>
        <h2>{t(ui.modulesTitle)}</h2>
      </div>
      <div className="feature-areas__grid">
        {chapters.map((chapter, index) => (
          <a className="area-card" href={`#${chapter.id}`} key={chapter.id}>
            <span className={`area-card__icon area-card__icon--${index + 1}`}>
              <Icon name={chapter.icon} size={22} />
            </span>
            <strong>{t(chapter.title)}</strong>
            <span className="area-card__text">{t(chapter.summary)}</span>
            <span className="area-card__more">
              {chapter.featureIds.length} {t(ui.screens)}
              <Icon name="arrow-right" size={16} />
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}
