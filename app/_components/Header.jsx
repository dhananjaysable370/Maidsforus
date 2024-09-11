import React from 'react'
import Image from 'next/image'

function Header() {
  return (
    <div className="p-5 shadow-sm flex">
      <div className="flex items-center gap-8">
        <Image src="/logo.svg" alt="Logo" width={180} height={105} />
        <div className="flex gap-6 items-center">
          <h2>Home</h2>
          <h2>Services</h2>
          <h2>About us</h2>
        </div>
      </div>
    </div>
  )
}

export default Header
