import { useCallback, useEffect } from 'react'
import { ui } from '@/content/ui'
import { featureText, useLang } from '@/i18n'
import type { Feature } from '@/types/content'
import { Icon } from '@/components/ui/Icon'
import { ProtectedImage } from '@/components/ui/ProtectedImage'
import './Lightbox.scss'

type LightboxProps = {
  features: Feature[]
  current: Feature | null
  onChange: (feature: Feature | null) => void
}

/** A feature shown full size. Arrow keys step through every feature, Esc closes. */
export function Lightbox({ features, current, onChange }: LightboxProps) {
  const { lang, t } = useLang()
  const index = current ? features.findIndex((feature) => feature.id === current.id) : -1

  const step = useCallback(
    (by: number) => onChange(features[(index + by + features.length) % features.length]),
    [features, index, onChange],
  )

  useEffect(() => {
    if (!current) {
      return
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onChange(null)
      if (event.key === 'ArrowRight') step(1)
      if (event.key === 'ArrowLeft') step(-1)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [current, onChange, step])

  if (!current) {
    return null
  }

  const text = featureText(current, lang)

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={text.title}
      onClick={() => onChange(null)}
    >
      <div className="lightbox__frame" onClick={(event) => event.stopPropagation()}>
        <header className="lightbox__head">
          <div className="lightbox__title">
            <strong>{text.kicker}</strong>
            <span>{text.title}</span>
          </div>
          <small>
            {index + 1} / {features.length}
          </small>
          <button type="button" className="lightbox__close" aria-label={t(ui.close)} onClick={() => onChange(null)}>
            <Icon name="close" />
          </button>
        </header>
        <ProtectedImage src={current.image} alt={text.title} />
      </div>
      <button
        type="button"
        className="lightbox__nav lightbox__nav--prev"
        aria-label={t(ui.previous)}
        onClick={(event) => {
          event.stopPropagation()
          step(-1)
        }}
      >
        <Icon name="chevron-left" size={26} />
      </button>
      <button
        type="button"
        className="lightbox__nav lightbox__nav--next"
        aria-label={t(ui.next)}
        onClick={(event) => {
          event.stopPropagation()
          step(1)
        }}
      >
        <Icon name="chevron-right" size={26} />
      </button>
    </div>
  )
}
