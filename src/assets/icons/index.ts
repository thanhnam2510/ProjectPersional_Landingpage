import arrowRight from './arrow-right.svg'
import arrowUp from './arrow-up.svg'
import bolt from './bolt.svg'
import box from './box.svg'
import chart from './chart.svg'
import chat from './chat.svg'
import check from './check.svg'
import chevronLeft from './chevron-left.svg'
import chevronRight from './chevron-right.svg'
import clock from './clock.svg'
import close from './close.svg'
import folder from './folder.svg'
import globe from './globe.svg'
import leave from './leave.svg'
import org from './org.svg'
import shield from './shield.svg'
import tasks from './tasks.svg'
import wallet from './wallet.svg'
import zoom from './zoom.svg'

/** Line icons, one SVG file each. Drawn in the current text colour by `<Icon>`. */
export const icons = {
  'arrow-right': arrowRight,
  'arrow-up': arrowUp,
  bolt,
  box,
  chart,
  chat,
  check,
  'chevron-left': chevronLeft,
  'chevron-right': chevronRight,
  clock,
  close,
  folder,
  globe,
  leave,
  org,
  shield,
  tasks,
  wallet,
  zoom,
}

export type IconName = keyof typeof icons
