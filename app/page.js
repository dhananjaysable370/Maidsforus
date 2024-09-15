"use client";

import { useEffect, useState } from "react";
import BusinessList from "./_components/BusinessList";
import CategoryList from "./_components/CategoryList";
import Hero from "./_components/Hero";
import GlobalApi from "./_services/GlobalApi";

export default function Home() {
  const [categoryList, setCategoryList] = useState([]);
  const [businessList, setBusinessList] = useState([]);

  /**
   * Fetch Category List and Business List
   */
  useEffect(() => {
    async function fetchData() {
      try {
        const categoryResp = await GlobalApi.getCategory();
        setCategoryList(categoryResp.categories);
        const businessResp = await GlobalApi.getAllBusinessList();
        setBusinessList(businessResp.businessLists);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <Hero />
      <CategoryList categoryList={categoryList} />
      <BusinessList businessList={businessList} title={"Popular Business"} />
    </div>
  );
}
