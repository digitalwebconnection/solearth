import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomeMain from './pages/home/HomeMain'
import AboutMain from './pages/about/AboutMain'
import ContactSection from './pages/home/ContactSection'


function AppContent() {


  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomeMain />} />
          <Route path="/about" element={<AboutMain />} />
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
      <AppContent />
    </BrowserRouter>
  )
}

export default App
