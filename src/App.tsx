import { useEffect, useState, Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ContactSection from './pages/home/ContactSection'
import { ToastProvider } from './pages/ui/Toast'
import Preloader from './components/Preloader'
import { QuoteModalProvider } from './components/QuoteModal'
import CookieConsent from './components/CookieConsent'
import WhatsAppChat from './components/WhatsAppChat'

// Lazy loaded page components
const HomeMain = lazy(() => import('./pages/home/HomeMain'))
const AboutMain = lazy(() => import('./pages/about/AboutMain'))
const ProjectsMain = lazy(() => import('./pages/projects/ProjectsMain'))
const ContactMain = lazy(() => import('./pages/contact/ContactMain'))
const ProductDetailMain = lazy(() => import('./pages/ProductDetail'))
const PrivacyPolicy = lazy(() => import('./pages/policies/PrivacyPolicy'))
const TermsConditions = lazy(() => import('./pages/policies/TermsConditions'))
const ComplaintsPolicy = lazy(() => import('./pages/policies/ComplaintsPolicy'))
const ResidentialMain = lazy(() => import('./pages/residential/ResidentialMain'))
const CommercialMain = lazy(() => import('./pages/commercial/CommercialMain'))
const ServiceMain = lazy(() => import('./pages/services/ServiceMain'))

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Lenis manages the scroll position — we must call its API directly.
    // `immediate: true` skips the smooth animation and snaps instantly to top.
    const lenis = (window as unknown as Record<string, unknown>).lenis as {
      scrollTo: (target: number, opts: { immediate: boolean }) => void
    } | undefined

    if (lenis) {
      lenis.scrollTo(0, { immediate: true })
    } else {
      // Fallback for the very first render before Lenis mounts
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }
  }, [pathname])

  return null
}

function AppContent() {
  const location = useLocation()

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Suspense fallback={<div className="min-h-screen bg-white" />}>
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
        </Suspense>
      </main>
      {location.pathname !== '/contact' && <ContactSection />}
      <Footer />
    </>
  )
}

function App() {
  // showPreloader controls whether the preloader DOM node is mounted.
  // showContent controls whether the site content is mounted (always true after first render).
  // This way the site content loads silently underneath the fixed-position preloader,
  // eliminating the white flash that occurred when content mounted AFTER the preloader unmounted.
  // Always show the preloader when the application first loads or is refreshed
  const [showPreloader, setShowPreloader] = useState(true)
  const [showContent, setShowContent] = useState(false)

  const handlePreloaderComplete = () => {
    // Reveal the site content the moment the preloader starts fading
    setShowContent(true)
    // Remove the preloader from the DOM after its CSS fade-out finishes (700ms transition + buffer)
    setTimeout(() => setShowPreloader(false), 800)
  }

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.04,
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
      infinite: false,
    })

      ; (window as unknown as Record<string, unknown>).lenis = lenis

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
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <ToastProvider>
          <QuoteModalProvider>
            {/* App content renders underneath the preloader from the very start */}
            {showContent && (
              <>
                <AppContent />
                <CookieConsent />
                <WhatsAppChat />
              </>
            )}
            {/* Preloader is fixed-position, covering all content until its fade-out ends */}
            {showPreloader && (
              <Preloader onComplete={handlePreloaderComplete} />
            )}
          </QuoteModalProvider>
        </ToastProvider>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App