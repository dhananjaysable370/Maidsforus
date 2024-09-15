'use client'
import GlobalApi from '@/app/_services/GlobalApi';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { useState, useEffect } from 'react';
function CategorySidebar() {
    const [categoryList, setCategoryList] = useState([]);

  /**
   * Fetch Category List
   */
  useEffect(() => {
    async function fetchData() {
      try {
        const categoryResp = await GlobalApi.getCategory();
        setCategoryList(categoryResp.categories);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);
    
  return (
    <div>
          <h1 className='font-bold mb-3 text-lg text-primary'>Categories</h1>
          <div>
              {categoryList.map((category, index) => (
                  <Link href={`/search/`+category.name} key={index} className='flex items-center gap-2 p-3 border rounded-lg mb-3 md:mr-10 cursor-pointer hover:bg-purple-50 hover:text-primary hover:border-primary'>
                      <Image src={category.icon.url} alt={category.name} width={30} height={30}/>
                      <h2>{category.name}</h2>
                      
                  </Link>
              ))}
          </div>
    </div>
  )
}

export default CategorySidebar
