import Image from 'next/image';
import React from 'react';

function BusinessList({ businessList, title }) {
  return (
    <div className='mt-5'>
      <h2 className='font-bold text-[22px]'>{title}</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5'>
        {businessList.map((business, index) => (
          <div key={index} className='shadow-md rounded-lg hover:shadow-lg hover:shadow-primary cursor-pointer hover:scale-105 transition-all ease-in-out'>
            <Image
              src={business?.images[0]?.url} // Added optional chaining to avoid errors if images or url is undefined
              alt={business?.name || 'Business image'} // Fallback in case name is undefined
              width={500}
                    height={200}
                    className='h-[150px] md:h-[200px] object-cover rounded-lg'
                />
                <div className='flex flex-col items-baseline p-3 '>
                    <h2 className='p-1 bg-purple-200 text-primary rounded-full px-2 text-[12px]'>{business.category.name}</h2>
                    <h2 className='font-bold text-lg'>{business.name}</h2>
                    <h2 className='text-primary'>{ business.contactPerson}</h2>
                    <h2 className='text-gray-500 text-sm'>{ business.address}</h2>
                </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BusinessList;