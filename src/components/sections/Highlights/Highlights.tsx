import type { MouseEvent } from 'react'
import { Icon } from '@/components/ui/Icon'
import { ScreenFrame } from '@/components/ui/ScreenFrame'
import { highlights } from '@/content/highlights'
import { ui } from '@/content/ui'
import { useLang } from '@/i18n'
import { featureById } from '@/lib/tour'
import type { Feature } from '@/types/content'
import './Highlights.scss'

type HighlightsProps = {
  onZoom: (feature: Feature) => void
}

/** Re-opens the feature when its link is clicked again, since the same hash does not fire `hashchange`. */
function reopen(event: MouseEvent<HTMLAnchorElement>) {
  if (window.location.hash === event.currentTarget.hash) {
    window.dispatchEvent(new HashChangeEvent('hashchange'))
  }
}

/** The six flagship features, each with one screenshot and its main benefit. */
export function Highlights({ onZoom }: HighlightsProps) {
  const { t } = useLang()
  return (
    <section className="highlights" id="featured">
      <div className="section-head">
        <p className="eyebrow">{t(ui.featuredEyebrow)}</p>
        <h2>{t(ui.featuredTitle)}</h2>
      </div>
      <div className="highlights__grid">
        {highlights.map((item) => (
          <article className="highlight-card" key={item.featureId}>
            <ScreenFrame feature={featureById(item.featureId)} onZoom={onZoom} compact />
            <div className="highlight-card__body">
              <h3>{t(item.title)}</h3>
              <p>{t(item.benefit)}</p>
              <a className="highlight-card__more" href={`#${item.featureId}`} onClick={reopen}>
                {t(ui.featuredMore)}
                <Icon name="arrow-right" size={16} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
