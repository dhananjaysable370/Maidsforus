import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

function Header() {
  return (
    <div className="p-5 shadow-sm flex justify-between">
      <div className="flex items-center gap-8">
        <Image src="/logo.svg" alt="Logo" width={180} height={105} />
        <div className="md:flex gap-6 items-center hidden">
          <h2 className='hover:scale-105 hover:text-primary cursor-pointer '>Home</h2>
          <h2 className='hover:scale-105 hover:text-primary cursor-pointer '>Services</h2>
          <h2 className='hover:scale-105 hover:text-primary cursor-pointer '>About us</h2>
        </div>
      </div>
        <div>
          <Button>Get Started</Button>
        </div>
    </div>
  )
}

export default Header
