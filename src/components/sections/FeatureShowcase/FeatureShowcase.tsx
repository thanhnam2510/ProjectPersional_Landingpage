import { useMemo, useRef, useState } from 'react'
import { Icon } from '@/components/ui/Icon'
import { ScreenFrame } from '@/components/ui/ScreenFrame'
import { useHashSelection } from '@/hooks/useHashSelection'
import { featureText, useLang } from '@/i18n'
import type { Chapter, Feature } from '@/types/content'
import './FeatureShowcase.scss'

type FeatureShowcaseProps = {
  chapter: Chapter
  features: Feature[]
  index: number
  onZoom: (feature: Feature) => void
}

/** One feature area: its features as tabs on the left, the selected one on the right. */
export function FeatureShowcase({ chapter, features, index, onZoom }: FeatureShowcaseProps) {
  const { lang, t } = useLang()
  const [activeId, setActiveId] = useState(features[0].id)
  const section = useRef<HTMLElement>(null)
  const ids = useMemo(() => features.map((feature) => feature.id), [features])
  useHashSelection(ids, setActiveId, section)

  const active = features.find((feature) => feature.id === activeId) ?? features[0]
  const text = featureText(active, lang)

  return (
    <section
      ref={section}
      className={index % 2 ? 'showcase showcase--tinted' : 'showcase'}
      id={chapter.id}
    >
      <div className="showcase__inner">
        <header className="showcase__head">
          <span className="showcase__number">{String(index + 1).padStart(2, '0')}</span>
          <div>
            <h2>{t(chapter.title)}</h2>
            <p>{t(chapter.summary)}</p>
          </div>
        </header>

        <div className="showcase__body">
          <div className="showcase__tabs" role="tablist" aria-label={t(chapter.title)}>
            {features.map((feature) => {
              const item = featureText(feature, lang)
              const selected = feature.id === active.id
              return (
                <button
                  key={feature.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  className={selected ? 'showcase-tab is-active' : 'showcase-tab'}
                  onClick={() => setActiveId(feature.id)}
                >
                  <strong>{item.kicker}</strong>
                  <span>{item.title}</span>
                </button>
              )
            })}
          </div>

          <div className="showcase__stage" role="tabpanel" key={active.id}>
            <ScreenFrame feature={active} onZoom={onZoom} />
            <div className="showcase__copy">
              <h3>{text.title}</h3>
              <ul>
                {text.points.map((point) => (
                  <li key={point}>
                    <span className="showcase__check">
                      <Icon name="check" size={14} />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
