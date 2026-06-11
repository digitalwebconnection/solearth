import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomeMain from './pages/home/HomeMain'
import Preloader from './components/Preloader'
import WhatsAppChat from './components/WhatsAppChat'

function App() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="fixed inset-0 z-[9999]"
          >
            <Preloader onComplete={() => setLoading(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />
        <main className="flex-1">
          <HomeMain />
        </main>
        <Footer />
      </div>

      <WhatsAppChat isSiteReady={!loading} />
    </>
  )
}

export default App
