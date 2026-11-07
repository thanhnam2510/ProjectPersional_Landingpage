import { useRef, useState } from 'react'
import { Icon } from '@/components/ui/Icon'
import { demoVideo } from '@/content/demoVideo'
import { ui } from '@/content/ui'
import { useLang } from '@/i18n'
import './DemoVideo.scss'

const clock = (seconds: number) => `${Math.floor(seconds / 60)}:${String(Math.floor(seconds % 60)).padStart(2, '0')}`

/**
 * The recorded walkthrough. Nothing is downloaded until the visitor presses play; chapters jump to a part of the
 * film and start it.
 */
export function DemoVideo() {
  const { t } = useLang()
  const video = useRef<HTMLVideoElement>(null)
  const [started, setStarted] = useState(false)
  const [current, setCurrent] = useState(0)

  const play = (at?: number) => {
    const element = video.current
    if (!element) {
      return
    }
    setStarted(true)
    if (at !== undefined) {
      element.currentTime = at
    }
    void element.play()
  }

  const chapter = demoVideo.chapters.reduce((found, item, index) => (current >= item.at ? index : found), -1)

  return (
    <section className="demo-video" id="demo">
      <div className="demo-video__inner">
        <div className="section-head demo-video__head">
          <p className="eyebrow">{t(ui.videoEyebrow)}</p>
          <h2>{t(ui.videoTitle)}</h2>
          <p className="demo-video__lead">{t(ui.videoText)}</p>
        </div>

        <figure className="screen-frame demo-video__frame">
          <div className="screen-frame__bar">
            <span />
            <span />
            <span />
            <small>TeamFlow · {t(ui.videoEyebrow)} · {demoVideo.duration}</small>
          </div>
          <div className="demo-video__stage">
            <video
              ref={video}
              className="demo-video__player"
              src={demoVideo.src}
              poster={demoVideo.poster}
              preload="none"
              playsInline
              controls={started}
              aria-label={t(ui.videoLabel)}
              onTimeUpdate={(event) => setCurrent(event.currentTarget.currentTime)}
              onPlay={() => setStarted(true)}
            />
            {!started && (
              <button type="button" className="demo-video__play" onClick={() => play()}>
                <span className="demo-video__play-icon">
                  <Icon name="play" size={34} />
                </span>
                <span className="demo-video__play-text">
                  <strong>{t(ui.videoPlay)}</strong>
                  <small>
                    {demoVideo.duration} · {t(ui.videoSound)}
                  </small>
                </span>
              </button>
            )}
          </div>
        </figure>

        <ol className="demo-video__chapters" aria-label={t(ui.videoChapters)}>
          {demoVideo.chapters.map((item, index) => (
            <li key={item.at}>
              <button
                type="button"
                className={index === chapter && started ? 'demo-video__chapter is-active' : 'demo-video__chapter'}
                aria-current={index === chapter && started ? 'true' : undefined}
                onClick={() => play(item.at)}
              >
                <span className="demo-video__time">{clock(item.at)}</span>
                {t(item.title)}
              </button>
            </li>
          ))}
        </ol>

        <p className="demo-video__more">
          {t(ui.videoSteps)}{' '}
          <a href="#demo-steps">
            {t(ui.videoStepsLink)}
            <Icon name="arrow-right" size={16} />
          </a>
        </p>
      </div>
    </section>
  )
}
