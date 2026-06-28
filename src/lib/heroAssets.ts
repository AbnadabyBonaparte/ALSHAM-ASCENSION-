import { useCallback, useEffect, useMemo, useState, useSyncExternalStore } from 'react'

export const HERO_ASSETS = {
  desktop: {
    webp: '/images/hero/hero-observatory-desktop.webp',
    png: '/images/hero/hero-observatory-desktop.png',
  },
  mobile: {
    webp: '/images/hero/hero-observatory-mobile.webp',
    png: '/images/hero/hero-observatory-mobile.png',
  },
  source: '/images/hero/hero-observatory-4k.png',
} as const

type HeroFormat = 'webp' | 'png' | 'none'

function useIsMobile(breakpoint = 768) {
  const query = `(max-width: ${breakpoint}px)`

  return useSyncExternalStore(
    (onStoreChange) => {
      const mq = window.matchMedia(query)
      mq.addEventListener('change', onStoreChange)
      return () => mq.removeEventListener('change', onStoreChange)
    },
    () => window.matchMedia(query).matches,
    () => false,
  )
}

export function useHeroImageSrc() {
  const isMobile = useIsMobile()
  const assets = isMobile ? HERO_ASSETS.mobile : HERO_ASSETS.desktop

  const candidates = useMemo(
    () => [assets.webp, assets.png] as const,
    [assets.png, assets.webp],
  )

  const [index, setIndex] = useState(0)
  const format: HeroFormat =
    index >= candidates.length ? 'none' : index === 0 ? 'webp' : 'png'
  const src = format === 'none' ? '' : candidates[index]

  useEffect(() => {
    setIndex(0)
  }, [isMobile])

  const handleError = useCallback(() => {
    setIndex((current) => Math.min(current + 1, candidates.length))
  }, [candidates.length])

  return { src, format, handleError, isMobile }
}
