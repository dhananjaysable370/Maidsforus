import Image from 'next/image';
import Link from 'next/link';

function CategoryList({ categoryList }) {
  return (
    <div className='mx-4 md:mx-22 lg:mx-52 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 cursor-pointer'>
      {categoryList.length > 0 ? (
        categoryList.map((category,index) => (
          <Link
            key={index}
            href={`/search/`+category.name}
            className="flex flex-col items-center justify-center gap-2 p-5 rounded-xl hover:scale-110 transition-all ease-in-out"
            style={{ backgroundColor: category.bgcolor.hex }} // Apply the background color here
          >
            <Image 
              src={category.icon.url}
              alt='icon'
              width={35}
              height={35}
            />
            <h2 className='text-sm'>{category.name}</h2>
          </Link>
        ))
      ) : (
        [1, 2, 3, 4, 5, 6].map((item, index) => (
          <div 
            key={index} 
            className='h-[120px] w-full bg-slate-200 animate-pulse rounded-xl'
          ></div>
        ))
      )}
    </div>
  );
}

export default CategoryList;
