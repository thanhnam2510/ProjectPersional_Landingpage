import { Icon } from '@/components/ui/Icon'
import { site } from '@/content/site'
import { ui } from '@/content/ui'
import { useLang } from '@/i18n'
import './ContactBanner.scss'

/** Closing call to action. Shows email and phone buttons once they are set in `content/site.ts`. */
export function ContactBanner() {
  const { t } = useLang()
  const hasContact = Boolean(site.contactEmail || site.contactPhone)

  return (
    <section className="contact" id="contact">
      <div className="contact__card">
        <div>
          <h2>{t(ui.ctaTitle)}</h2>
          <p>{t(ui.ctaText)}</p>
        </div>
        <div className="contact__actions">
          {site.contactEmail && (
            <a className="button button--brand" href={`mailto:${site.contactEmail}`}>
              {t(ui.ctaEmail)}
              <Icon name="arrow-right" size={18} />
            </a>
          )}
          {site.contactPhone && (
            <a className="button button--outline" href={`tel:${site.contactPhone.replace(/\s/g, '')}`}>
              {t(ui.ctaPhone)} {site.contactPhone}
            </a>
          )}
          {!hasContact && (
            <a className="button button--brand" href="#features">
              {t(ui.ctaFallback)}
              <Icon name="arrow-right" size={18} />
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
