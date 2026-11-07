import { chapters } from '@/content/chapters'
import { features } from '@/content/features'
import type { Feature } from '@/types/content'

const byId = new Map(features.map((feature) => [feature.id, feature]))

export function featureById(id: string): Feature {
  const feature = byId.get(id)
  if (!feature) {
    throw new Error(`Unknown feature: ${id}`)
  }
  return feature
}

/** Each chapter's features, in the order they are shown. */
export const chapterFeatures: Record<string, Feature[]> = Object.fromEntries(
  chapters.map((chapter) => [chapter.id, chapter.featureIds.map(featureById)]),
)

/** Every feature in page order, for stepping through in the lightbox. */
export const tourFeatures: Feature[] = chapters.flatMap((chapter) => chapterFeatures[chapter.id])
