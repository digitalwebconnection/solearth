import HeroSection from './HeroSection'
import MarqueeBelt from './MarqueeBelt'
import ExpertsBanner from './ExpertsBanner'
// import ServicesSection from './ServicesSection'
import SolarCalculator from './SolarCalculator'
import PackagesSection from './PackagesSection'
import InquirySection from './InquirySection'
import BatterySection from './BatterySection'
import WhyUsSection from './WhyUsSection'
import TestimonialsSection from './TestimonialsSection'
import ConsultationSection from './ConsultationSection'
import BrandPartnersSection from './BrandPartnersSection'
import Products from './Products'
import Process from './Process'

export default function HomeMain() {
  return (
    <>
      <HeroSection />
      <ExpertsBanner />
      <Products />
      <MarqueeBelt />
      {/* <ServicesSection /> */}
      <SolarCalculator />
      <PackagesSection />
      <InquirySection />
      <Process />
      <BatterySection />
      <WhyUsSection />
      <TestimonialsSection />
      <ConsultationSection />
      <BrandPartnersSection />
    </>
  )
}
