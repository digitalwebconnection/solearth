import { useParams, Navigate } from 'react-router-dom'
import { RESIDENTIAL_PAGES_DATA } from '../../data/residentialData'
import ResidentialHero from './sections/ResidentialHero'
import ResidentialSpecs from './sections/ResidentialSpecs'
import ResidentialTimeline from './sections/ResidentialTimeline'
import ResidentialEducational from './sections/ResidentialEducational'
import BrandPartnersSection from '../home/BrandPartnersSection'

export default function ResidentialMain() {
  const { slug } = useParams<{ slug: string }>()

  const pageData = slug ? RESIDENTIAL_PAGES_DATA[slug] : null

  // Fallback to 6.6kW system if slug is invalid or not provided
  if (!pageData) {
    return <Navigate to="/residential/6-6kw" replace />
  }

  return (
    <div className="flex flex-col min-h-screen">
      <ResidentialHero
        title={pageData.title}
        tagline={pageData.tagline}
        heroBanner={pageData.heroBanner}
        heroBannerSub={pageData.heroBannerSub}
        savings={pageData.savings}
        backgroundImage={pageData.backgroundImage}
      />
      <ResidentialSpecs
        savings={pageData.savings}
        introTitle={pageData.introTitle}
        introDesc={pageData.introDesc}
        details={pageData.details}
      />
      <ResidentialTimeline timeline={pageData.timeline} header={pageData.timelineHeader} />

      {/* Educational Columns */}
      <ResidentialEducational educational={pageData.educational} />

      {/* Brand Partners */}

      <BrandPartnersSection />

    </div>
  )
}
