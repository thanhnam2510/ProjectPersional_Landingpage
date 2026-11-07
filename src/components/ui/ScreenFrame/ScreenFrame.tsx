import { ui } from '@/content/ui'
import { useFeatureText, useLang } from '@/i18n'
import type { Feature } from '@/types/content'
import { Icon } from '@/components/ui/Icon'
import { ProtectedImage } from '@/components/ui/ProtectedImage'
import './ScreenFrame.scss'

type ScreenFrameProps = {
  feature: Feature
  onZoom?: (feature: Feature) => void
  /** Smaller frame without the zoom hint, for the stacked hero image. */
  compact?: boolean
}

/** A feature screenshot inside a browser-style frame. Clicking it opens the lightbox. */
export function ScreenFrame({ feature, onZoom, compact = false }: ScreenFrameProps) {
  const { t } = useLang()
  const text = useFeatureText(feature)
  return (
    <figure className={compact ? 'screen-frame screen-frame--compact' : 'screen-frame'}>
      <div className="screen-frame__bar">
        <span />
        <span />
        <span />
        <small>TeamFlow · {text.kicker}</small>
      </div>
      <button
        type="button"
        className="screen-frame__image"
        aria-label={`${t(ui.zoomHint)}: ${text.title}`}
        onClick={() => onZoom?.(feature)}
      >
        <ProtectedImage src={feature.image} alt={text.title} />
        {!compact && (
          <span className="screen-frame__zoom">
            <Icon name="zoom" size={16} />
            {t(ui.zoomHint)}
          </span>
        )}
      </button>
    </figure>
  )
}
