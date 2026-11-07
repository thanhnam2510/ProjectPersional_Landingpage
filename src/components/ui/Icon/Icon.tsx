import type { CSSProperties } from 'react'
import { icons, type IconName } from '@/assets/icons'
import './Icon.scss'

type IconProps = {
  name: IconName
  size?: number
}

/** A line icon from `assets/icons`, drawn in the current text colour. */
export function Icon({ name, size = 20 }: IconProps) {
  const style = { '--icon': `url("${icons[name]}")`, width: size, height: size } as CSSProperties
  return <span className="icon" style={style} aria-hidden="true" />
}
