import { ui } from '@/content/ui'
import { useScrolledPast } from '@/hooks/useScrolledPast'
import { useLang } from '@/i18n'
import { Icon } from '@/components/ui/Icon'
import './BackToTop.scss'

/** Floating button that appears after scrolling and returns to the top. */
export function BackToTop() {
  const { t } = useLang()
  const visible = useScrolledPast(480)

  return (
    <button
      type="button"
      className={visible ? 'back-to-top is-visible' : 'back-to-top'}
      onClick={() => document.getElementById('top')?.scrollIntoView({ behavior: 'smooth' })}
    >
      <Icon name="arrow-up" size={16} />
      {t(ui.backToTop)}
    </button>
  )
}
