import { Icon } from '@/components/ui/Icon'
import { ScreenFrame } from '@/components/ui/ScreenFrame'
import { ui } from '@/content/ui'
import { useLang } from '@/i18n'
import type { Feature } from '@/types/content'
import './Hero.scss'

type HeroProps = {
  main: Feature
  side: Feature
  onZoom: (feature: Feature) => void
}

/** Dark opening section: promise, calls to action, key numbers, and two stacked screenshots. */
export function Hero({ main, side, onZoom }: HeroProps) {
  const { t } = useLang()
  return (
    <section className="hero">
      <div className="hero__copy">
        <h1>{t(ui.headline)}</h1>
        <p className="hero__lead">{t(ui.lead)}</p>
        <div className="hero__actions">
          <a className="button button--light" href="#demo">
            <Icon name="play" size={18} />
            {t(ui.primary)}
          </a>
          <a className="button button--ghost" href="#contact">
            {t(ui.secondary)}
          </a>
        </div>
        <dl className="hero__stats">
          {ui.stats.map((stat) => (
            <div key={stat.value}>
              <dt>{stat.value}</dt>
              <dd>{t(stat.label)}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="hero__visual">
        <div className="hero__main">
          <ScreenFrame feature={main} onZoom={onZoom} />
        </div>
        <div className="hero__side">
          <ScreenFrame feature={side} onZoom={onZoom} compact />
        </div>
      </div>
    </section>
  )
}
