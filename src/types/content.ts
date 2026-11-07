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

/** A flagship feature near the top of the page: a product screen with a one-line benefit. */
export type Highlight = {
  featureId: string
  chapterId: string
  title: Copy
  benefit: Copy
}

/** One step of the guided demo. */
export type DemoStep = {
  id: string
  image: string
  title: Copy
  who: Copy
  text: Copy
  points: Copy[]
}

/** A group of related features, shown as one tab of the feature explorer. */
export type Chapter = {
  id: string
  icon: IconName
  title: Copy
  summary: Copy
  featureIds: string[]
}
