"use client";

import BusinessList from '@/app/_components/BusinessList';
import GlobalApi from '@/app/_services/GlobalApi';
import React, { useEffect, useState } from 'react';



function BusinessByCategory({ params }) {
  const [businessList, setBusinessList] = useState([]); // Specify the type if known

  useEffect(() => {
    if (params && params.category) {
      getBusinessList();
    }
  }, [params]);

  const getBusinessList = async () => {
    try {
      const res = await GlobalApi.getBusinessByCategory(params.category);
      setBusinessList(res?.businessLists || []);
    } catch (error) {
      console.error("Failed to fetch business list", error);
    }
  };

  return (
    <div>
      <BusinessList title={params.category} businessList={businessList} />
    </div>
  );
}

export default BusinessByCategory;
