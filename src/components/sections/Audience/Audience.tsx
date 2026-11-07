import { Icon } from '@/components/ui/Icon'
import { ui } from '@/content/ui'
import { useLang } from '@/i18n'
import './Audience.scss'

/** What leadership, managers, and staff each get from TeamFlow. */
export function Audience() {
  const { t } = useLang()
  return (
    <section className="audience" id="audience">
      <div className="audience__inner">
        <div className="section-head section-head--light">
          <p className="eyebrow">{t(ui.rolesEyebrow)}</p>
          <h2>{t(ui.rolesTitle)}</h2>
        </div>
        <div className="audience__grid">
          {ui.roles.map((role) => (
            <article className="audience-card" key={role.title.en}>
              <span className="audience-card__icon">
                <Icon name={role.icon} size={22} />
              </span>
              <h3>{t(role.title)}</h3>
              <ul>
                {role.points.map((point) => (
                  <li key={point.en}>
                    <Icon name="check" size={16} />
                    {t(point)}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
