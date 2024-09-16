import GlobalApi from '@/app/_services/GlobalApi';
import { Button } from '@/components/ui/button';
import { NotebookPen } from 'lucide-react';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import BookingSection from './BookingSection';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


function SuggestedBusinessList({ business }) {
  const [businessList, setBusinessList] = useState([]);

  useEffect(() => {
    if (business?.category?.name) {
      getBusinessList();
    }
  }, [business?.category?.name]);

  const getBusinessList = async () => {
    try {
      const resp = await GlobalApi.getBusinessByCategory(business.category.name);
      if (resp?.businessLists) {
        setBusinessList(resp.businessLists);
      } else {
        setBusinessList([]); // Handle empty response
      }
    } catch (error) {
      console.error('Error fetching similar businesses:', error);
      setBusinessList([]); // Ensure it's updated even on error
    }
  };

  return (
    <div className='px-4 w-[110%]'>
      
      <BookingSection business={business}>
        <Button className='flex w-full items-center gap-2 mb-6 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500'>
        <NotebookPen className='w-[170px]'/>
        Book Appointment
      </Button>
      </BookingSection>

      <h2 className='text-lg font-bold mb-5'>Similar Businesses</h2>

      <div className='flex flex-col gap-6'>
        {businessList.length > 0 ? (
          businessList.map((business, index) => (
            <div
              key={index}
              className='w-full border border-gray-200 rounded-lg p-2 hover:shadow-lg transition-shadow duration-200 ease-in-out cursor-pointer'
            >
              <Image
                src={business?.images[0]?.url || '/default-image.jpg'}
                alt={business?.name || 'Business Image'}
                width={1080}
                height={450}
                className='w-full h-auto rounded-lg object-cover mb-4'
              />
              <div className='flex flex-col'>
                <h2 className='font-semibold text-lg text-gray-800 mb-2'>
                  {business?.name}
                </h2>
                <p className='text-sm text-blue-600 mb-1'>
                  Contact: {business?.contactPerson}
                </p>
                <p className='text-sm text-gray-500 mb-1'>
                  Address: {business?.address}
                </p>
                <p className='text-sm text-gray-500 mb-1'>
                  Category: {business?.category?.name}
                </p>
                <p className='text-sm text-gray-500'>
                  Description: {business?.description || 'No description available.'}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className='text-gray-500'>
            No similar businesses found.
          </div>
        )}
      </div>
    </div>
  );
}

export default SuggestedBusinessList;
