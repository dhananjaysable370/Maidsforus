import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React from 'react'

function Hero() {
  return (
    <div className='flex justify-center gap-3 items-center flex-col pt-14 pb-7'>
          <h2 className='font-bold text-[46px] text-center'>Find Home <span className='text-primary'>Service/Repair</span><br/> Near You</h2>
          <h2 className='text-xl text-gray-400 text-center'>Explore Best Home Service & Repair near You</h2>
          <div className='mt-4 flex gap-4 items-center'>
              <Input placeholder='Search' className='rounded-full md:w-[350px] px-4 py-2' />
              <Button className='rounded-full h-[43px]'>
                  <Search className='h-3 w-3 font-bold'/>
              </Button>
          </div>
    </div>
  )
}

export default Hero
