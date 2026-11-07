import { useCallback, useRef, useState } from 'react'
import { Icon } from '@/components/ui/Icon'
import { ScreenFrame } from '@/components/ui/ScreenFrame'
import { chapters } from '@/content/chapters'
import { ui } from '@/content/ui'
import { useHashSelection } from '@/hooks/useHashSelection'
import { featureText, useLang } from '@/i18n'
import { rovingTab } from '@/lib/roving'
import { chapterFeatures } from '@/lib/tour'
import type { Feature } from '@/types/content'
import './FeatureExplorer.scss'

/** Features listed in a group before "Show more". */
const VISIBLE = 4

const hashIds = [...chapters.map((chapter) => chapter.id), ...chapters.flatMap((chapter) => chapter.featureIds)]

type FeatureExplorerProps = {
  onZoom: (feature: Feature) => void
}

/**
 * Every feature, one group at a time: group tabs on top, the group's features as tabs on the left, the selected one
 * on the right. Hashes such as `#leave` or `#leave-accrual` open that group or feature.
 */
export function FeatureExplorer({ onZoom }: FeatureExplorerProps) {
  const { lang, t } = useLang()
  const [chapterId, setChapterId] = useState(chapters[0].id)
  const [activeId, setActiveId] = useState(chapters[0].featureIds[0])
  const [expanded, setExpanded] = useState(false)
  const section = useRef<HTMLElement>(null)

  const openChapter = useCallback((id: string) => {
    const chapter = chapters.find((item) => item.id === id) ?? chapters[0]
    setChapterId(chapter.id)
    setActiveId(chapter.featureIds[0])
    setExpanded(false)
  }, [])

  const openHash = useCallback(
    (id: string) => {
      const owner = chapters.find((chapter) => chapter.featureIds.includes(id))
      if (!owner) {
        openChapter(id)
        return
      }
      setChapterId(owner.id)
      setActiveId(id)
      setExpanded(owner.featureIds.indexOf(id) >= VISIBLE)
    },
    [openChapter],
  )
  useHashSelection(hashIds, openHash, section)

  const chapter = chapters.find((item) => item.id === chapterId) ?? chapters[0]
  const features = chapterFeatures[chapter.id]
  const shown = expanded ? features : features.slice(0, VISIBLE)
  const hidden = features.length - VISIBLE
  const active = features.find((feature) => feature.id === activeId) ?? features[0]
  const text = featureText(active, lang)
  const chapterIndex = chapters.indexOf(chapter)

  return (
    <section ref={section} className="explorer" id="features">
      <div className="explorer__inner">
        <div className="section-head">
          <p className="eyebrow">{t(ui.modulesEyebrow)}</p>
          <h2>{t(ui.modulesTitle)}</h2>
        </div>

        <div className="explorer__groups" role="tablist" aria-label={t(ui.modulesEyebrow)}>
          {chapters.map((item, index) => {
            const selected = item.id === chapter.id
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                id={`group-${item.id}`}
                aria-controls="group-panel"
                aria-selected={selected}
                tabIndex={selected ? 0 : -1}
                className={selected ? 'explorer-group is-active' : 'explorer-group'}
                onClick={() => openChapter(item.id)}
                onKeyDown={(event) => {
                  const next = rovingTab(event, index, chapters.length)
                  if (next !== null) {
                    openChapter(chapters[next].id)
                  }
                }}
              >
                <span className={`explorer-group__icon explorer-group__icon--${index + 1}`}>
                  <Icon name={item.icon} size={18} />
                </span>
                {t(item.title)}
              </button>
            )
          })}
        </div>

        <div className="explorer__panel" role="tabpanel" id="group-panel" aria-labelledby={`group-${chapter.id}`}>
          <header className="explorer__head">
            <span className="explorer__number">{String(chapterIndex + 1).padStart(2, '0')}</span>
            <div>
              <h3>{t(chapter.title)}</h3>
              <p>{t(chapter.summary)}</p>
            </div>
          </header>

          <div className="explorer__body">
            <div className="explorer__list">
              <div className="explorer__tabs" role="tablist" aria-label={t(chapter.title)}>
                {shown.map((feature, index) => {
                  const item = featureText(feature, lang)
                  const selected = feature.id === active.id
                  return (
                    <button
                      key={feature.id}
                      type="button"
                      role="tab"
                      aria-selected={selected}
                      aria-controls="feature-panel"
                      tabIndex={selected ? 0 : -1}
                      className={selected ? 'explorer-tab is-active' : 'explorer-tab'}
                      onClick={() => setActiveId(feature.id)}
                      onKeyDown={(event) => {
                        const next = rovingTab(event, index, shown.length)
                        if (next !== null) {
                          setActiveId(shown[next].id)
                        }
                      }}
                    >
                      <strong>{item.kicker}</strong>
                      <span>{item.title}</span>
                    </button>
                  )
                })}
              </div>
              {hidden > 0 && (
                <button
                  type="button"
                  className={expanded ? 'explorer__more is-open' : 'explorer__more'}
                  aria-expanded={expanded}
                  onClick={() => {
                    if (expanded && features.indexOf(active) >= VISIBLE) {
                      setActiveId(features[0].id)
                    }
                    setExpanded(!expanded)
                  }}
                >
                  {expanded ? t(ui.showLess) : t(ui.showMore).replace('{n}', String(hidden))}
                  <Icon name="chevron-down" size={16} />
                </button>
              )}
            </div>

            <div className="explorer__stage" role="tabpanel" id="feature-panel" key={active.id}>
              <ScreenFrame feature={active} onZoom={onZoom} />
              <div className="explorer__copy">
                <h4>{text.title}</h4>
                <ul>
                  {text.points.map((point) => (
                    <li key={point}>
                      <span className="explorer__check">
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
      </div>
    </section>
  )
}
