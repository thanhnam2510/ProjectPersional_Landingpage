import { useEffect, type RefObject } from 'react'

/**
 * When the URL hash is one of `ids` (on load or later), calls `select` with it and scrolls `section` into view.
 * Lets links such as `#leaves` open a feature inside its showcase.
 */
export function useHashSelection(
  ids: string[],
  select: (id: string) => void,
  section: RefObject<HTMLElement | null>,
) {
  useEffect(() => {
    const openFromHash = () => {
      const id = window.location.hash.slice(1)
      if (ids.includes(id)) {
        select(id)
        section.current?.scrollIntoView({ behavior: 'smooth' })
      }
    }
    openFromHash()
    window.addEventListener('hashchange', openFromHash)
    return () => window.removeEventListener('hashchange', openFromHash)
  }, [ids, select, section])
}
