import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const NAV_ITEMS = [
  { label: 'Tese', href: '#tese' },
  { label: 'Metodologia', href: '#metodologia' },
  { label: 'Verticais', href: '#verticais' },
  { label: 'Manifesto', href: '#manifesto' },
]

export function TopBar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        scrolled
          ? 'bg-obsidian/90 backdrop-blur-[20px] border-gold/30'
          : 'bg-obsidian/25 backdrop-blur-[8px] border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <span className="text-gold text-xl">⚜</span>
          <span className="font-display text-gold text-lg font-semibold tracking-wide">
            ALSHAM™
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-platinum hover:text-gold transition-colors tracking-wide"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a href="#aplicar" className="hidden sm:inline-flex cta-outlined text-xs py-2 px-4">
            ALSHAM SELECT™
          </a>
          <div className="flex items-center gap-2 text-xs text-platinum">
            <span className="text-gold font-medium">PT</span>
            <span className="opacity-40">·</span>
            <span className="hover:text-gold cursor-pointer transition-colors">EN</span>
            <span className="opacity-40">·</span>
            <span className="hover:text-gold cursor-pointer transition-colors">ES</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export function Loader() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  if (!visible) return null

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-obsidian flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.2, duration: 0.3 }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-center"
      >
        <div className="text-gold text-5xl mb-4">⚜</div>
        <div className="font-display text-gold text-2xl tracking-[0.2em]">ALSHAM™</div>
        <motion.div
          className="mt-4 h-px bg-gold mx-auto"
          initial={{ width: 0 }}
          animate={{ width: 120 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        />
      </motion.div>
    </motion.div>
  )
}
