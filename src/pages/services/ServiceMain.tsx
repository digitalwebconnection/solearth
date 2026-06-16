import { useParams, Navigate } from 'react-router-dom'
import { SERVICES_PAGES_DATA } from '../../data/servicesData'
import ServiceHero from './sections/ServiceHero'
import ServiceContent from './sections/ServiceContent'
import ServiceDifference from './sections/ServiceDifference'

export default function ServiceMain() {
  const { slug } = useParams<{ slug: string }>()

  const pageData = slug ? SERVICES_PAGES_DATA[slug] : null

  // Fallback to installation page if slug is invalid or not provided
  if (!pageData) {
    return <Navigate to="/services/installation" replace />
  }

  return (
    <div className="flex flex-col min-h-screen">
      <ServiceHero
        title={pageData.title}
        heroSubtitle={pageData.heroSubtitle}
      />
      <ServiceContent
        introTitle={pageData.introTitle}
        introDesc={pageData.introDesc}
        features={pageData.features}
      />
      <ServiceDifference
        difference={pageData.difference}
      />
    </div>
  )
}
