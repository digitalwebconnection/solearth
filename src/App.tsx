import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomeMain from './pages/home/HomeMain'
import AboutMain from './pages/about/AboutMain'
import ProjectsMain from './pages/projects/ProjectsMain'
import ContactMain from './pages/contact/ContactMain'
import ContactSection from './pages/home/ContactSection'
import ProductDetailMain from './pages/ProductDetail'
import PrivacyPolicy from './pages/policies/PrivacyPolicy'
import TermsConditions from './pages/policies/TermsConditions'
import ComplaintsPolicy from './pages/policies/ComplaintsPolicy'
import ResidentialMain from './pages/residential/ResidentialMain'
import CommercialMain from './pages/commercial/CommercialMain'
import ServiceMain from './pages/services/ServiceMain'
import { ToastProvider } from './pages/ui/Toast'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function AppContent() {
  const location = useLocation()

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomeMain />} />
          <Route path="/about" element={<AboutMain />} />
          <Route path="/projects" element={<ProjectsMain />} />
          <Route path="/contact" element={<ContactMain />} />
          <Route path="/product/:slug" element={<ProductDetailMain />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/complaints-policy" element={<ComplaintsPolicy />} />
          <Route path="/residential/:slug" element={<ResidentialMain />} />
          <Route path="/commercial/:slug" element={<CommercialMain />} />
          <Route path="/services/:slug" element={<ServiceMain />} />
        </Routes>
      </main>
      {location.pathname !== '/contact' && <ContactSection />}
      <Footer />
    </>
  )
}

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.04,            // Lower = silkier glide (0.05–0.1 range)
      smoothWheel: true,
      wheelMultiplier: 1.0,  // Slightly faster wheel to compensate for lower lerp
      touchMultiplier: 1.5,  // Snappy on mobile touch
      infinite: false,
    })
    
    // @ts-ignore
    window.lenis = lenis

    let raf: number
    const loop = (time: number) => {
      lenis.raf(time)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(raf)
      lenis.destroy()
    }
  }, [])

  return (
    <BrowserRouter>
      <ScrollToTop />
      <ToastProvider>
        <AppContent />
      </ToastProvider>
    </BrowserRouter>
  )
}

export default App
