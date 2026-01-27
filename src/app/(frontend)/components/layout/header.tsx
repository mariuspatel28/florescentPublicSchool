'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link' 
import { Button } from '../../../../../public/UI/button'
import { FullMenu } from './full-menu'
import AdmissionInquiry from '../home/admissionInquiry'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isInquiryOpen, setIsInquiryOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const pathname = usePathname()
  
  // Detect if we are on the homepage
  const isHomePage = pathname === '/'

  useEffect(() => {
    const onScroll = () => {
      // Trigger background change after 20px of scrolling
      setScrolled(window.scrollY > 20)
    }
    
    // Check immediately on mount in case page is already scrolled
    onScroll()
    
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Logic: 
     1. If scrolled: Gray/Glass effect
     2. If not scrolled AND on homepage: Totally transparent
     3. If not scrolled AND on other pages: White (to keep content readable)
  */
  const headerBg = scrolled
    ? 'bg-gray-800/80 backdrop-blur-md border-b border-white/10 shadow-lg'
    : isHomePage
      ? 'bg-transparent' 
      : 'bg-white/90 backdrop-blur-sm shadow-sm'

  // Text color logic: White for dark backgrounds/home, dark gray/yellow for white backgrounds
  const textColor = (scrolled || isHomePage) 
    ? 'text-white' 
    : 'text-gray-800'

  const iconColor = (scrolled || isHomePage)
    ? 'text-yellow-400'
    : 'text-yellow-600'

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-500 ease-in-out
          px-4 py-2 md:px-6 md:py-3
          ${headerBg}
        `}
      >
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
          
          {/* LEFT — Logo */}
          <Link 
            href="/" 
            className="flex items-center group transition-transform hover:scale-105 active:scale-95"
            aria-label="Florescent Public School Home"
          >
            <Image
              src="/UI/button.svg"
              alt="School Logo"
              width={160}
              height={40}
              priority
              className={`h-8 w-auto md:h-12 transition-all duration-300 ${
                !scrolled && !isHomePage ? 'brightness-90' : 'brightness-110'
              }`}
            />
          </Link>

          {/* RIGHT — Actions */}
          <nav className="flex items-center gap-2 md:gap-6">
            <Button
              variant="ghost"
              onClick={() => setIsInquiryOpen(true)}
              className={`
                p-2 font-bold text-sm md:text-base tracking-wide h-auto rounded-full
                ${textColor}
                hover:bg-yellow-400 hover:text-black transition-all duration-300
              `}
            >
              Inquiry
              <ChevronDown className={`w-4 h-4 ml-1 transition-colors ${iconColor}`} />
            </Button>

            <Button 
              variant="ghost" 
              onClick={() => setIsMenuOpen(true)} 
              className={`
                p-2 rounded-full transition-all duration-300
                ${textColor} 
                hover:bg-white/20
              `}
            >
              <Menu className="h-6 w-6 md:h-7 md:w-7" />
            </Button>
          </nav>
        </div>
      </header>

      {/* Modals */}
      <FullMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <AdmissionInquiry isOpen={isInquiryOpen} onClose={() => setIsInquiryOpen(false)} />
    </>
  )
}