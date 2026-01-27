'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Search, ChevronRight, ChevronLeft, X, Menu } from 'lucide-react'
import { Button } from '../../../../../public/UI/button'
import { Input } from '@/app/(frontend)/ui/input'
import { ScrollArea } from '@/app/(frontend)/ui/scroll-area'
import { motion, AnimatePresence } from 'framer-motion'

interface MenuItem {
  label: string
  href?: string
  submenu?: MenuItem[]
}

const menuData: MenuItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Schedules', href: '/schedules' },
  { label: 'Gallery', href: '/gallery' },
  {
    label: 'Achievements & Activities',
    submenu: [
      { label: 'Student Achievements', href: '/achievements/StudentAchievements' },
      { label: 'School Achievements', href: '/achievements/SchoolAchievements' },
      { label: 'Co-Curricular Activities', href: '/achievements/Co-CurricularActivities' },
      { label: 'Previous Year results', href: '/achievements/PreviousYearResults' },
    ],
  },
  {
    label: 'About Us',
    href: '/about',
  },
  {
    label: 'Admission',
    href: '/admissions/',
  },
  {
    label: 'Career',
    href: '/career',
  },
  { label: 'Contact Us', href: '/contact-us' },
  { label: 'Scholarship', href: '/scholarship' },
]

interface FullMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function FullMenu({ isOpen, onClose }: FullMenuProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeSubmenu, setActiveSubmenu] = useState<MenuItem | null>(null)
  const [activeTertiaryMenu, setActiveTertiaryMenu] = useState<MenuItem | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  // Check screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleNavigate = () => {
    setActiveSubmenu(null)
    setActiveTertiaryMenu(null)
    onClose()
  }

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Mobile Backdrop */}
          {isMobile && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={handleBackdropClick}
            />
          )}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background overflow-hidden"
          >
            {/* Animated Background Elements - Hidden on mobile for performance */}
            <div className="absolute inset-0 overflow-hidden hidden md:block">
              {/* Geometric Grid Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="grid grid-cols-12 gap-4 h-full w-full">
                  {Array.from({ length: 144 }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.01, duration: 0.5 }}
                      className="border border-primary/20 rounded-lg"
                    />
                  ))}
                </div>
              </div>

              {/* Floating Academia Icons */}
              <div className="absolute inset-0">
                {[
                  '🎓',
                  '📚',
                  '⚡',
                  '🔬',
                  '🎨',
                  '🏆',
                  '🌍',
                  '💡',
                  '🎭',
                  '🏀',
                  '🎵',
                  '🔍',
                  '🚀',
                  '🌟',
                  '📝',
                  '🎯',
                ].map((icon, i) => (
                  <motion.div
                    key={i}
                    initial={{
                      opacity: 0,
                      scale: 0,
                      x: Math.random() * 100 - 50,
                      y: Math.random() * 100 - 50,
                    }}
                    animate={{
                      opacity: [0, 0.3, 0],
                      scale: [0, 1, 0],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 8,
                      delay: i * 0.5,
                      repeat: Infinity,
                      repeatType: 'loop',
                    }}
                    className="absolute text-4xl"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                  >
                    {icon}
                  </motion.div>
                ))}
              </div>

              {/* Animated Gradient Orbs */}
              <div className="absolute inset-0">
                <motion.div
                  animate={{
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                  className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
                  style={{ left: '10%', top: '20%' }}
                />
                <motion.div
                  animate={{
                    x: [0, -80, 0],
                    y: [0, 60, 0],
                  }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                  className="absolute w-80 h-80 bg-gradient-to-r from-green-500/10 to-yellow-500/10 rounded-full blur-3xl"
                  style={{ right: '15%', bottom: '30%' }}
                />
                <motion.div
                  animate={{
                    x: [0, 60, 0],
                    y: [0, -30, 0],
                  }}
                  transition={{
                    duration: 18,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                  className="absolute w-72 h-72 bg-gradient-to-r from-red-500/10 to-pink-500/10 rounded-full blur-3xl"
                  style={{ left: '40%', top: '60%' }}
                />
              </div>

              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full opacity-20">
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(var(--primary))" />
                    <stop offset="100%" stopColor="hsl(var(--muted-foreground))" />
                  </linearGradient>
                </defs>
                {Array.from({ length: 20 }).map((_, i) => (
                  <motion.line
                    key={i}
                    x1={Math.random() * 100 + '%'}
                    y1={Math.random() * 100 + '%'}
                    x2={Math.random() * 100 + '%'}
                    y2={Math.random() * 100 + '%'}
                    stroke="url(#lineGradient)"
                    strokeWidth="0.5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{
                      duration: 3,
                      delay: i * 0.2,
                      repeat: Infinity,
                      repeatType: 'reverse',
                    }}
                  />
                ))}
              </svg>

              {/* Particle System */}
              <div className="absolute inset-0">
                {Array.from({ length: 50 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-primary/30 rounded-full"
                    animate={{
                      x: [0, Math.random() * 100 - 50, 0],
                      y: [0, Math.random() * 100 - 50, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: Math.random() * 10 + 5,
                      delay: Math.random() * 5,
                      repeat: Infinity,
                    }}
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                  />
                ))}
              </div>

              {/* Subtle Grid Pattern */}
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(100, 100, 100, 0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(100, 100, 100, 0.1) 1px, transparent 1px)
                  `,
                  backgroundSize: '50px 50px',
                }}
              />
            </div>

            {/* Top Bar */}
            <motion.div
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 60 }}
              className="absolute top-0 right-0 left-0 flex justify-between md:justify-end items-center px-4 md:px-8 h-[60px] md:h-[72px] bg-background/90 md:bg-background/80 backdrop-blur-sm border-b border-border z-50"
            >
              {isMobile && activeSubmenu && (
                <Button
                  onClick={() => {
                    setActiveSubmenu(null)
                    setActiveTertiaryMenu(null)
                  }}
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Back
                </Button>
              )}

              {isMobile && activeTertiaryMenu && (
                <Button
                  onClick={() => setActiveTertiaryMenu(null)}
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Back
                </Button>
              )}

              <Button
                onClick={onClose}
                variant="ghost"
                size="icon"
                className="h-8 w-8 md:h-10 md:w-10 rounded-full hover:bg-accent"
              >
                <X className="h-4 w-4 md:h-5 md:w-5" />
              </Button>
            </motion.div>

            <div className="h-full flex pt-[60px] md:pt-[72px] relative z-10">
              {/* Mobile: Slide-in panels */}
              {isMobile ? (
                <div className="flex-1 overflow-hidden">
                  <AnimatePresence mode="wait">
                    {/* Main Menu - Mobile */}
                    {!activeSubmenu && !activeTertiaryMenu && (
                      <motion.div
                        key="main-mobile"
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -100, opacity: 0 }}
                        className="h-full"
                      >
                        <ScrollArea className="h-full">
                          <div className="p-6">
                            {/* Search - Mobile */}
                            <div className="mb-8 relative">
                              <Input
                                type="text"
                                placeholder="Search"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-9 pr-4 py-6 text-base bg-background border-2"
                              />
                            </div>

                            {/* Main Menu Items - Mobile */}
                            <nav className="space-y-1">
                              {menuData.map((item, i) => (
                                <motion.div
                                  key={item.label}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.05 }}
                                >
                                  {item.href ? (
                                    <Button
                                      asChild
                                      variant="ghost"
                                      className="w-full justify-between text-base py-6 hover:bg-accent/50"
                                    >
                                      <Link href={item.href} onClick={handleNavigate}>
                                        {item.label}
                                        {item.submenu && <ChevronRight className="h-5 w-5" />}
                                      </Link>
                                    </Button>
                                  ) : (
                                    <Button
                                      onClick={() => {
                                        setActiveSubmenu(item)
                                        setActiveTertiaryMenu(null)
                                      }}
                                      variant="ghost"
                                      className="w-full justify-between text-base py-6 hover:bg-accent/50"
                                    >
                                      {item.label}
                                      {item.submenu && <ChevronRight className="h-5 w-5" />}
                                    </Button>
                                  )}
                                </motion.div>
                              ))}
                            </nav>
                          </div>
                        </ScrollArea>
                      </motion.div>
                    )}

                    {/* Submenu - Mobile */}
                    {activeSubmenu && !activeTertiaryMenu && (
                      <motion.div
                        key="submenu-mobile"
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 100, opacity: 0 }}
                        className="h-full"
                      >
                        <ScrollArea className="h-full">
                          <div className="p-6">
                            <nav className="space-y-1">
                              {activeSubmenu.submenu?.map((item, i) => (
                                <motion.div
                                  key={item.label}
                                  initial={{ opacity: 0, x: 20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.05 }}
                                >
                                  {item.href ? (
                                    <Button
                                      asChild
                                      variant="ghost"
                                      className="w-full justify-between text-base py-6 hover:bg-accent/50"
                                    >
                                      <Link href={item.href} onClick={handleNavigate}>
                                        {item.label}
                                      </Link>
                                    </Button>
                                  ) : (
                                    <Button
                                      onClick={() => {
                                        if (item.submenu) {
                                          setActiveTertiaryMenu(item)
                                        }
                                      }}
                                      variant="ghost"
                                      className="w-full justify-between text-base py-6 hover:bg-accent/50"
                                    >
                                      {item.label}
                                      {item.submenu && <ChevronRight className="h-5 w-5" />}
                                    </Button>
                                  )}
                                </motion.div>
                              ))}
                            </nav>
                          </div>
                        </ScrollArea>
                      </motion.div>
                    )}

                    {/* Tertiary Menu - Mobile */}
                    {activeTertiaryMenu && (
                      <motion.div
                        key="tertiary-mobile"
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 100, opacity: 0 }}
                        className="h-full"
                      >
                        <ScrollArea className="h-full">
                          <div className="p-6">
                            <nav className="space-y-1">
                              {activeTertiaryMenu.submenu?.map((item, i) => (
                                <motion.div
                                  key={item.label}
                                  initial={{ opacity: 0, x: 20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.05 }}
                                >
                                  {item.href ? (
                                    <Button
                                      asChild
                                      variant="ghost"
                                      className="w-full justify-start text-base py-6 hover:bg-accent/50"
                                    >
                                      <Link href={item.href} onClick={handleNavigate}>
                                        {item.label}
                                      </Link>
                                    </Button>
                                  ) : (
                                    <Button
                                      variant="ghost"
                                      className="w-full justify-start text-base py-6 hover:bg-accent/50"
                                      disabled
                                    >
                                      {item.label} (No link)
                                    </Button>
                                  )}
                                </motion.div>
                              ))}
                            </nav>
                          </div>
                        </ScrollArea>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                /* Desktop: Side-by-side panels */
                <>
                  {/* MAIN MENU - Desktop */}
                  <motion.div
                    initial={{ x: -200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -200, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 60 }}
                  >
                    <ScrollArea className="w-full md:w-[320px] lg:w-[420px] border-r border-border bg-background/80 backdrop-blur-sm">
                      <div className="px-6 md:px-10 lg:px-14 py-8 md:py-10">
                        {/* Search Input */}
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                          <div className="mb-10 md:mb-14 relative">
                            <Input
                              type="text"
                              placeholder="Search"
                              value={searchQuery}
                              onChange={(e) => setSearchQuery(e.target.value)}
                              className="border-0 border-b border-input rounded-none bg-transparent pl-9 pr-9 pb-3 text-sm md:text-base"
                            />
                            <ChevronRight className="absolute right-0 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                          </div>
                        </motion.div>

                        {/* Main Menu Items */}
                        <nav className="space-y-1 md:space-y-2">
                          {menuData.map((item, i) => (
                            <motion.div
                              key={item.label}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.05 }}
                            >
                              {item.href ? (
                                <Button
                                  asChild
                                  variant="ghost"
                                  className="w-full justify-between text-sm md:text-[15px] hover:bg-accent/50 transition-all duration-300 py-5 md:py-3"
                                >
                                  <Link href={item.href} onClick={handleNavigate}>
                                    {item.label}
                                    {item.submenu && (
                                      <ChevronRight className="h-5 w-5 md:h-7 md:w-7" />
                                    )}
                                  </Link>
                                </Button>
                              ) : (
                                <Button
                                  onClick={() => {
                                    setActiveSubmenu(item)
                                    setActiveTertiaryMenu(null)
                                  }}
                                  variant="ghost"
                                  className="w-full justify-between text-sm md:text-[15px] hover:bg-accent/50 transition-all duration-300 py-5 md:py-3"
                                >
                                  {item.label}
                                  {item.submenu && (
                                    <ChevronRight className="h-5 w-5 md:h-7 md:w-7" />
                                  )}
                                </Button>
                              )}
                            </motion.div>
                          ))}
                        </nav>
                      </div>
                    </ScrollArea>
                  </motion.div>

                  {/* SUBMENU (2nd panel) - Desktop */}
                  <AnimatePresence>
                    {activeSubmenu && (
                      <motion.div
                        key="submenu"
                        initial={{ x: 200, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 200, opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 60 }}
                      >
                        <ScrollArea className="w-full md:w-[300px] lg:w-[400px] xl:w-[480px] border-r border-border bg-background/80 backdrop-blur-sm">
                          <div className="px-6 md:px-10 lg:px-14 py-8 md:py-10">
                            <Button
                              onClick={() => {
                                setActiveSubmenu(null)
                                setActiveTertiaryMenu(null)
                              }}
                              variant="ghost"
                              className="flex items-center gap-2 mb-8 md:mb-10 hover:bg-accent/50"
                            >
                              <ChevronLeft className="h-4 w-4" /> BACK
                            </Button>

                            <nav className="space-y-1 md:space-y-1.5">
                              {activeSubmenu.submenu?.map((item, i) => (
                                <motion.div
                                  key={item.label}
                                  initial={{ opacity: 0, x: 20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.05 }}
                                >
                                  {item.href ? (
                                    <Button
                                      asChild
                                      variant="ghost"
                                      className="w-full justify-between text-sm hover:bg-accent/50 py-4 md:py-3"
                                    >
                                      <Link href={item.href} onClick={handleNavigate}>
                                        {item.label}
                                      </Link>
                                    </Button>
                                  ) : (
                                    <Button
                                      onClick={() => {
                                        if (item.submenu) {
                                          setActiveTertiaryMenu(item)
                                        }
                                      }}
                                      variant="ghost"
                                      className="w-full justify-between text-sm hover:bg-accent/50 py-4 md:py-3"
                                    >
                                      {item.label}
                                      {item.submenu && (
                                        <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
                                      )}
                                    </Button>
                                  )}
                                </motion.div>
                              ))}
                            </nav>
                          </div>
                        </ScrollArea>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* TERTIARY MENU (3rd panel) - Desktop */}
                  <AnimatePresence>
                    {activeTertiaryMenu && (
                      <motion.div
                        key="tertiary"
                        initial={{ x: 200, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 200, opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 60 }}
                        className="flex-1"
                      >
                        <ScrollArea>
                          <div className="px-6 md:px-10 lg:px-14 py-8 md:py-10 bg-background/80 backdrop-blur-sm">
                            <Button
                              onClick={() => setActiveTertiaryMenu(null)}
                              variant="outline"
                              className="flex items-center gap-2 mb-8 md:mb-10 border-2 border-foreground hover:bg-accent/50"
                            >
                              <ChevronLeft className="h-4 w-4" /> BACK
                            </Button>

                            <nav className="space-y-1 md:space-y-1.5">
                              {activeTertiaryMenu.submenu?.map((item, i) => (
                                <motion.div
                                  key={item.label}
                                  initial={{ opacity: 0, x: 20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.05 }}
                                >
                                  {item.href ? (
                                    <Button
                                      asChild
                                      variant="ghost"
                                      className="w-full justify-start text-sm hover:bg-accent/50 py-4 md:py-3"
                                    >
                                      <Link href={item.href} onClick={handleNavigate}>
                                        {item.label}
                                      </Link>
                                    </Button>
                                  ) : (
                                    <Button
                                      variant="ghost"
                                      className="w-full justify-start text-sm hover:bg-accent/50 py-4 md:py-3"
                                      disabled
                                    >
                                      {item.label} (No link)
                                    </Button>
                                  )}
                                </motion.div>
                              ))}
                            </nav>
                          </div>
                        </ScrollArea>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

// 'use client'

// import { useState, useEffect } from 'react'
// import { useRouter } from 'next/navigation'
// import { ChevronRight, ChevronLeft, X } from 'lucide-react'
// import { Button } from '../../../../../public/UI/button'
// import { Input } from '@/app/(frontend)/ui/input'
// import { ScrollArea } from '@/app/(frontend)/ui/scroll-area'
// import { motion, AnimatePresence } from 'framer-motion'

// interface MenuItem {
//   label: string
//   href?: string
//   submenu?: MenuItem[]
// }

// const menuData: MenuItem[] = [
//   { label: 'Home', href: '/' },
//   { label: 'Schedules', href: '/schedules' },
//   { label: 'Gallery', href: '/gallery' },
//   {
//     label: 'Achievements & Activities',
//     submenu: [
//       { label: 'Student Achievements', href: '/achievements/StudentAchievements' },
//       { label: 'School Achievements', href: '/achievements/SchoolAchievements' },
//       { label: 'Co-Curricular Activities', href: '/achievements/Co-CurricularActivities' },
//       { label: 'Previous Year results', href: '/achievements/PreviousYearResults' },
//     ],
//   },
//   { label: 'About Us', href: '/about' },
//   { label: 'Admission', href: '/admissions/' },
//   { label: 'Career', href: '/career' },
//   { label: 'Contact Us', href: '/contact-us' },
//   { label: 'Scholarship', href: '/scholarship' },
// ]

// interface FullMenuProps {
//   isOpen: boolean
//   onClose: () => void
// }

// export function FullMenu({ isOpen, onClose }: FullMenuProps) {
//   const router = useRouter()

//   const [searchQuery, setSearchQuery] = useState('')
//   const [activeSubmenu, setActiveSubmenu] = useState<MenuItem | null>(null)
//   const [activeTertiaryMenu, setActiveTertiaryMenu] = useState<MenuItem | null>(null)
//   const [isMobile, setIsMobile] = useState(false)

//   // ✅ Prefetch all routes when menu opens
//   useEffect(() => {
//     if (!isOpen) return

//     menuData.forEach((item) => {
//       if (item.href) router.prefetch(item.href)
//       item.submenu?.forEach((sub) => {
//         if (sub.href) router.prefetch(sub.href)
//         sub.submenu?.forEach((deep) => {
//           if (deep.href) router.prefetch(deep.href)
//         })
//       })
//     })
//   }, [isOpen, router])

//   // Screen size detection
//   useEffect(() => {
//     const checkMobile = () => setIsMobile(window.innerWidth < 768)
//     checkMobile()
//     window.addEventListener('resize', checkMobile)
//     return () => window.removeEventListener('resize', checkMobile)
//   }, [])

//   const navigate = (href?: string) => {
//     if (!href) return
//     router.push(href)
//     setActiveSubmenu(null)
//     setActiveTertiaryMenu(null)
//     onClose()
//   }

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 z-50 bg-background overflow-hidden"
//         >
//           {/* Top Bar */}
//           <div className="absolute top-0 left-0 right-0 h-[72px] flex justify-end items-center px-6 border-b bg-background/80 backdrop-blur">
//             <Button onClick={onClose} variant="ghost" size="icon">
//               <X />
//             </Button>
//           </div>

//           <div className="h-full pt-[72px] flex">
//             <ScrollArea className="w-full md:w-[420px] border-r bg-background/80 backdrop-blur">
//               <div className="p-8 space-y-2">
//                 <div className="relative mb-6">
//                   <Input
//                     placeholder="Search"
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                     className="pl-8 border-b rounded-none bg-transparent"
//                   />
//                 </div>

//                 {menuData.map((item, i) => (
//                   <motion.div
//                     key={item.label}
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: i * 0.05 }}
//                   >
//                     {item.href ? (
//                       <Button
//                         variant="ghost"
//                         className="w-full justify-between py-5"
//                         onClick={() => navigate(item.href)}
//                       >
//                         {item.label}
//                         {item.submenu && <ChevronRight />}
//                       </Button>
//                     ) : (
//                       <Button
//                         variant="ghost"
//                         className="w-full justify-between py-5"
//                         onClick={() => setActiveSubmenu(item)}
//                       >
//                         {item.label}
//                         {item.submenu && <ChevronRight />}
//                       </Button>
//                     )}
//                   </motion.div>
//                 ))}
//               </div>
//             </ScrollArea>

//             {/* Submenu */}
//             <AnimatePresence>
//               {activeSubmenu && (
//                 <ScrollArea className="w-[360px] border-r bg-background/80 backdrop-blur">
//                   <div className="p-8">
//                     <Button
//                       variant="ghost"
//                       className="mb-6"
//                       onClick={() => setActiveSubmenu(null)}
//                     >
//                       <ChevronLeft /> Back
//                     </Button>

//                     {activeSubmenu.submenu?.map((item, i) => (
//                       <motion.div
//                         key={item.label}
//                         initial={{ opacity: 0, x: 20 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ delay: i * 0.05 }}
//                       >
//                         <Button
//                           variant="ghost"
//                           className="w-full justify-between py-4"
//                           onClick={() => navigate(item.href)}
//                         >
//                           {item.label}
//                         </Button>
//                       </motion.div>
//                     ))}
//                   </div>
//                 </ScrollArea>
//               )}
//             </AnimatePresence>
//           </div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   )
// }
