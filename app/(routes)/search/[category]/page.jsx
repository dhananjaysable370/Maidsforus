"use client";

import BusinessList from '@/app/_components/BusinessList';
import GlobalApi from '@/app/_services/GlobalApi';
import React, { useEffect, useState } from 'react';

function BusinessByCategory({ params }) {
  const [businessList, setBusinessList] = useState([]); // Specify the type if known
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (params && params.category) {
      getBusinessList();
    }
  }, [params]);

  const getBusinessList = async () => {
    setLoading(true);
    try {
      const res = await GlobalApi.getBusinessByCategory(params.category);
      setBusinessList(res?.businessLists || []);
      setError(null);
    } catch (error) {
      console.error("Failed to fetch business list", error);
      setError("Failed to load data.");
      setBusinessList([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && businessList.length === 0 ? (
        <p>No data available for the category &quot;{params.category}&quot;.</p>
      ) : (
        <BusinessList title={params.category} businessList={businessList} />
      )}
    </div>
  );
}

export default BusinessByCategory;
