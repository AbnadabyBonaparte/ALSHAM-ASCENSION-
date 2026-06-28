import { AuthorityTicker } from '@/components/AuthorityTicker'
import { CTAFinal } from '@/components/CTAFinal'
import { Differentiators } from '@/components/Differentiators'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { IconSystemShowcase } from '@/components/icons'
import { Journey } from '@/components/Journey'
import { Paradox } from '@/components/Paradox'
import { TargetAudience } from '@/components/TargetAudience'
import { Thesis } from '@/components/Thesis'
import { Loader, TopBar } from '@/components/TopBar'
import { TrustStack } from '@/components/TrustStack'

export default function App() {
  const isIconPreview =
    typeof window !== 'undefined' &&
    new URLSearchParams(window.location.search).get('preview') === 'icons'

  if (isIconPreview) {
    return <IconSystemShowcase />
  }

  return (
    <>
      <Loader />
      <TopBar />
      <main>
        <Hero />
        <AuthorityTicker />
        <Paradox />
        <Thesis />
        <Journey />
        <TargetAudience />
        <Differentiators />
        <TrustStack />
        <CTAFinal />
      </main>
      <Footer />
    </>
  )
}
