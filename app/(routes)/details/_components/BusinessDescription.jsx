import Image from 'next/image'
import React from 'react'

function BusinessDescription({business}) {
  return business?.name&&(
    <div>
      <h2 className='text-[25px] font-bold'>
        Description
      </h2>
      <p className='text-lg text-gray-600 mt-4'>{business?.about}</p>
      <h2 className='text-[25px] font-bold mt-8'>Gallary</h2>

      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5'>
        {business?.images?.map((item, index) => (
          <Image src={item?.url} key={index} alt={business?.name} width={700} height={200} className='rounded-lg' />
        ))}
      </div>

    </div>
  )
}

export default BusinessDescription
