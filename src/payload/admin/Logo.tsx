import React from 'react'
import Image from 'next/image'

export const Logo = () => {
  return (
    <div className="custom-logo">
      <Image
        src="/logo.png"
        alt="Logo"
        width={150}
        height={50}
        priority // Good for LCP (Logo is usually at the top)
      />
    </div>
  )
}

export default Logo
