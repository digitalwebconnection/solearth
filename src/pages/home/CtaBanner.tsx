import { useQuoteModal } from '../../components/QuoteModal'

export default function CtaBanner() {
  const { openQuoteModal } = useQuoteModal()

  return (
    <section className="py-16 bg-linear-to-r from-[#F8C000] to-[#e0ad00]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-3">
              Ready to Start Saving?
            </h2>
            <p className="text-white/80 text-lg">
              Get a free, no-obligation quote in under 60 seconds. No pushy sales — just honest advice.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <a
              href="tel:1300672194"
              className="flex items-center justify-center gap-2 bg-white text-[#F8C000] font-extrabold px-8 py-4 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 text-base"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
              </svg>
              1300 672 194
            </a>
            <button
              onClick={() => openQuoteModal('Cta Banner')}
              className="flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 border-2 border-white/50 text-white font-extrabold px-8 py-4 rounded-full transition-all duration-300 text-base cursor-pointer"
            >
              Get Free Quote →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
