import { TICKER_ITEMS } from '@/lib/constants'

export function AuthorityTicker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS]

  return (
    <section className="bg-navy py-4 overflow-hidden border-y border-gold/20">
      <div className="ticker-animate flex whitespace-nowrap">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="inline-flex items-center mx-8 text-xs sm:text-sm font-light tracking-[0.12em] text-gold uppercase"
          >
            <span className="text-gold/60 mr-8">◆</span>
            {item}
          </span>
        ))}
      </div>
    </section>
  )
}
