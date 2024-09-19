import { Button } from '@/components/ui/button'
import { Clock, Mail, MapPin, Share, User } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function BusinessInfo({ business }) {
  return business.name && (
    <div className='md:flex items-start gap-4'>
      {/* Left Section: Image */}
      <Image 
        src={business?.images[0]?.url} 
        alt={business.name} 
        width={150} 
        height={200} 
        className='rounded-full h-[150px] w-[150px] object-cover' 
      />

      {/* Center Section: Business Info */}
      <div className="flex justify-between items-end w-full">
        <div className='flex flex-col mt-4 md:mt-0 gap-3'>
          <h2 className='text-lg font-bold p-1 px-5 text-primary bg-purple-100 rounded-full w-fit'>
            {business?.category?.name}
          </h2>
          <h2 className='text-2xl font-semibold'>{business?.name}</h2>
          <h2 className='flex items-center gap-2 text-sm text-gray-500'>
            <MapPin /> {business?.address}
          </h2>
          <h2 className='flex items-center gap-2 text-sm text-gray-500'>
            <Mail /> {business?.email}
          </h2>
        </div>

        {/* Right Section: Contact and Availability */}
        <div className='flex flex-col items-end gap-2 justify-end'>
          <Button><Share /></Button>
          <h2 className='flex items-center gap-2 text-primary text-sm'>
            <User /> {business?.contactPerson}
          </h2>
          <h2 className='flex items-center gap-2 text-sm text-gray-500'>
            <Clock /> Available 8:00 AM to 10:00 PM
          </h2>
        </div>
      </div>
    </div>
  );
}

export default BusinessInfo;
