import { useParams, Navigate } from 'react-router-dom'
import { COMMERCIAL_PAGES_DATA } from '../../data/commercialData'
import CommercialHero from './sections/CommercialHero'
import CommercialSpecs from './sections/CommercialSpecs'
import CommercialFAQ from './sections/CommercialFAQ'

export default function CommercialMain() {
  const { slug } = useParams<{ slug: string }>()

  const pageData = slug ? COMMERCIAL_PAGES_DATA[slug] : null

  // Fallback to 30kW system if slug is invalid or not provided
  if (!pageData) {
    return <Navigate to="/commercial/30kw" replace />
  }

  return (
    <div className="flex flex-col min-h-screen">
      <CommercialHero
        tagline={pageData.tagline}
        heroTitle={pageData.heroTitle}
        savings={pageData.savings}
      />
      <CommercialSpecs
        savings={pageData.savings}
        introTitle={pageData.introTitle}
        introDesc={pageData.introDesc}
        details={pageData.details}
      />
      <CommercialFAQ />
    </div>
  )
}
