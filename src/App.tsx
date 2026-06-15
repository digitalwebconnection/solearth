import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomeMain from './pages/home/HomeMain'
import AboutMain from './pages/about/AboutMain'
import ContactSection from './pages/home/ContactSection'
import ProductDetailMain from './pages/ProductDetail'
import { ToastProvider } from './pages/ui/Toast'

function AppContent() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomeMain />} />
          <Route path="/about" element={<AboutMain />} />
          <Route path="/product/:slug" element={<ProductDetailMain />} />
        </Routes>
      </main>
      <ContactSection />
      <Footer />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ToastProvider>
        <AppContent />
      </ToastProvider>
    </BrowserRouter>
  )
}

export default App

