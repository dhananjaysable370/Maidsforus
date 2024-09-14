"use client"
import { useEffect, useState } from "react";
import BusinessList from "./_components/BusinessList";
import CategoryList from "./_components/CategoryList";
import Hero from "./_components/Hero";
import GlobalApi from "./_services/GlobalApi"; // Correct import path

export default function Home() {
  const [categoryList, setCategoryList] = useState([]);
  const [businessList, setBusinessList] = useState([]);
  /**
  * Used to get all Category list
  */
  useEffect(() => {
    getCategoryList();
    getAllBusinessList();
  }, []);
  const getCategoryList = () => {
    GlobalApi.getCategory().then(resp => {
      setCategoryList(resp.categories);
    })
  }

  /**
   * Used to get all business list
   */
  const getAllBusinessList = () => {
    GlobalApi.getAllBusinessList().then(resp => {
      setBusinessList(resp.businessLists);
    });
  }
  return (
    <div>
      <Hero />
      <CategoryList categoryList={categoryList} />
      <BusinessList businessList={businessList} title={'Popular Business'} />
    </div>
  );
}
