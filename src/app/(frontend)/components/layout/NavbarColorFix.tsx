"use client"

import { useEffect } from "react"

export function NavbarColorFix() {
  useEffect(() => {
    const header = document.querySelector('header')
    if (header) {
      // Remove any text-white classes that might be causing issues
      header.classList.remove('text-white', 'text-gray-900')
      
      // Add your theme's foreground color
      header.classList.add('text-foreground')
      
      // Ensure contrast with background
      const computedStyle = getComputedStyle(header)
      const bgColor = computedStyle.backgroundColor
      
      // Add dark text if background is light
      if (isLightColor(bgColor)) {
        header.classList.add('text-foreground')
      }
    }
  }, [])

  return null
}

function isLightColor(color: string) {
  // Convert hex/rgb to brightness
  const rgb = color.match(/\d+/g)
  if (rgb) {
    const brightness = (parseInt(rgb[0]) * 299 + 
                       parseInt(rgb[1]) * 587 + 
                       parseInt(rgb[2]) * 114) / 1000
    return brightness > 128
  }
  return true // Default to light
}