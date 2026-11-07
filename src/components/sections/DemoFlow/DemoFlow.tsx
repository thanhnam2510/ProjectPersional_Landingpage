import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { Icon } from '@/components/ui/Icon'
import { ProtectedImage } from '@/components/ui/ProtectedImage'
import { demoSteps } from '@/content/demoFlow'
import { ui } from '@/content/ui'
import { useLang } from '@/i18n'
import { rovingTab } from '@/lib/roving'
import './DemoFlow.scss'

const STEP_MS = 6500

const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * The guided walkthrough: Assign → Log time → Approve → Report. Plays on its own while on screen, stops once a step
 * is picked or Pause is pressed, and does not autoplay for people who prefer reduced motion.
 */
export function DemoFlow() {
  const { t } = useLang()
  const [index, setIndex] = useState(0)
  const [playing, setPlaying] = useState(() => !reducedMotion())
  const [visible, setVisible] = useState(false)
  const section = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = section.current
    if (!element) {
      return
    }
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.35 })
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const next = demoSteps[(index + 1) % demoSteps.length]
    new Image().src = next.image
  }, [index])

  const running = playing && visible
  const step = demoSteps[index]
  const last = index === demoSteps.length - 1

  const pick = (next: number) => {
    setPlaying(false)
    setIndex(next)
  }

  return (
    <section
      ref={section}
      className="demo"
      id="demo-steps"
    >
      <div className="demo__inner">
        <div className="demo__head">
          <div className="section-head">
            <p className="eyebrow">{t(ui.demoEyebrow)}</p>
            <h2>{t(ui.demoTitle)}</h2>
            <p className="demo__lead">{t(ui.demoText)}</p>
          </div>
          <div className="demo__controls">
            <button type="button" className="demo__control" onClick={() => setPlaying(!playing)}>
              <Icon name={playing ? 'pause' : 'play'} size={18} />
              {t(playing ? ui.demoPause : ui.demoPlay)}
            </button>
            <button
              type="button"
              className="demo__control demo__control--primary"
              onClick={() => pick(last ? 0 : index + 1)}
            >
              {t(last ? ui.demoRestart : ui.demoNext)}
              <Icon name="arrow-right" size={18} />
            </button>
          </div>
        </div>

        <ol className="demo__steps" role="tablist" aria-label={t(ui.demoEyebrow)}>
          {demoSteps.map((item, position) => {
            const selected = position === index
            return (
              <li key={item.id} role="presentation">
                <button
                  type="button"
                  role="tab"
                  id={`demo-tab-${item.id}`}
                  aria-controls="demo-panel"
                  aria-selected={selected}
                  tabIndex={selected ? 0 : -1}
                  className={position < index ? 'demo-step is-done' : selected ? 'demo-step is-active' : 'demo-step'}
                  onClick={() => pick(position)}
                  onKeyDown={(event) => {
                    const next = rovingTab(event, position, demoSteps.length)
                    if (next !== null) {
                      pick(next)
                    }
                  }}
                >
                  <span className="demo-step__number">{position + 1}</span>
                  <span className="demo-step__text">
                    <strong>{t(item.title)}</strong>
                    <small>{t(item.who)}</small>
                  </span>
                  {selected && playing && (
                    <span
                      className={running ? 'demo-step__progress' : 'demo-step__progress is-paused'}
                      style={{ '--duration': `${STEP_MS}ms` } as CSSProperties}
                      onAnimationEnd={() => setIndex(last ? 0 : index + 1)}
                    />
                  )}
                </button>
              </li>
            )
          })}
        </ol>

        <div
          className="demo__stage"
          role="tabpanel"
          id="demo-panel"
          aria-labelledby={`demo-tab-${step.id}`}
          aria-live={running ? 'off' : 'polite'}
          key={step.id}
        >
          <figure className="screen-frame demo__frame">
            <div className="screen-frame__bar">
              <span />
              <span />
              <span />
              <small>
                TeamFlow · {t(ui.demoStep)} {index + 1}/{demoSteps.length}
              </small>
            </div>
            <ProtectedImage src={step.image} alt={`${t(ui.demoStep)} ${index + 1}: ${t(step.title)}`} />
          </figure>
          <div className="demo__copy">
            <p className="demo__who">
              {t(ui.demoStep)} {index + 1} · {t(step.who)}
            </p>
            <h3>{t(step.title)}</h3>
            <p>{t(step.text)}</p>
            <ul>
              {step.points.map((point) => (
                <li key={point.en}>
                  <span className="demo__check">
                    <Icon name="check" size={14} />
                  </span>
                  {t(point)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
