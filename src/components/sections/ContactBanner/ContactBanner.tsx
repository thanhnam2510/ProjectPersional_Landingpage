import { Icon } from '@/components/ui/Icon'
import { site } from '@/content/site'
import { ui } from '@/content/ui'
import { useLang } from '@/i18n'
import './ContactBanner.scss'

/** Closing call to action: replay the demo, or book a live one by the email and phone set in `content/site.ts`. */
export function ContactBanner() {
  const { t } = useLang()
  const subject = encodeURIComponent(t(ui.ctaEmailSubject))

  return (
    <section className="contact" id="contact">
      <div className="contact__card">
        <div>
          <h2>{t(ui.ctaTitle)}</h2>
          <p>{t(ui.ctaText)}</p>
        </div>
        <div className="contact__actions">
          <a className="button button--brand" href="#demo">
            <Icon name="play" size={18} />
            {t(ui.primary)}
          </a>
          {site.contactEmail && (
            <a className="button button--outline" href={`mailto:${site.contactEmail}?subject=${subject}`}>
              {t(ui.ctaEmail)}
              <Icon name="arrow-right" size={18} />
            </a>
          )}
          {site.contactPhone && (
            <a className="button button--outline" href={`tel:${site.contactPhone.replace(/\s/g, '')}`}>
              {t(ui.ctaPhone)} {site.contactPhone}
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
