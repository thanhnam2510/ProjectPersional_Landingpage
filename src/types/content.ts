import type { IconName } from '@/assets/icons'

export type Lang = 'vi' | 'en'

/** One piece of text in both languages. */
export type Copy = Record<Lang, string>

export type FeatureText = {
  kicker: string
  title: string
  points: string[]
}

/** One product screen shown on the page. */
export type Feature = FeatureText & {
  id: string
  image: string
}

/** A group of related features, shown as one showcase section. */
export type Chapter = {
  id: string
  icon: IconName
  title: Copy
  summary: Copy
  featureIds: string[]
}
