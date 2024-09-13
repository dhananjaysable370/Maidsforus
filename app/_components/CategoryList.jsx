import Image from 'next/image'
import React from 'react'

function CategoryList({categoryList}) {
  return (
    <div>
          {categoryList.map((category,index) => {
              <div>
                  <Image
                      src={category.icon.url}
                      alt='icon'
                      width={35}
                      height={35}
                      layout="intrinsic" // or "responsive" if sizes vary significantly
                  />

          </div>
      })}
    </div>
  )
}

export default CategoryList
