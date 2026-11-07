import type { KeyboardEvent } from 'react'

/**
 * Arrow keys, Home, and End for a row of `role="tab"` buttons: returns the index to select and moves focus to it,
 * or `null` for any other key.
 */
export function rovingTab(event: KeyboardEvent<HTMLElement>, index: number, count: number): number | null {
  const targets: Record<string, number> = {
    ArrowRight: index + 1,
    ArrowDown: index + 1,
    ArrowLeft: index - 1,
    ArrowUp: index - 1,
    Home: 0,
    End: count - 1,
  }
  if (!(event.key in targets)) {
    return null
  }
  event.preventDefault()
  const next = (targets[event.key] + count) % count
  const tabs = event.currentTarget.closest('[role="tablist"]')?.querySelectorAll<HTMLElement>('[role="tab"]')
  tabs?.[next]?.focus()
  return next
}
