import { featuresEn } from '@/content/features.en'
import type { Feature, FeatureText, Lang } from '@/types/content'
import { useLang } from './useLang'

/** A feature's text in `lang`; Vietnamese when no translation exists. */
export function featureText(feature: Feature, lang: Lang): FeatureText {
  if (lang === 'en' && featuresEn[feature.id]) {
    return featuresEn[feature.id]
  }
  return { kicker: feature.kicker, title: feature.title, points: feature.points }
}

export function useFeatureText(feature: Feature): FeatureText {
  const { lang } = useLang()
  return featureText(feature, lang)
}
