"use client";
import { useEffect, useState } from "react";
import CategoryList from "./_components/CategoryList";
import Hero from "./_components/Hero";
import getCategory from "./_services/GlobalApi"; // Corrected import

export default function Home() {
  const [categoryList, setCategoryList] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    getCategoryList();
  }, []);

  const getCategoryList = () => {
    getCategory()
      .then((resp) => {
        setCategoryList(resp.categories);
        setLoading(false); // Stop loading once data is fetched
      })
      .catch((error) => {
        setError('Error fetching categories'); // Set error message
        setLoading(false); // Stop loading on error
        console.error('Error fetching categories:', error);
      });
  };

  return (
    <div>
      <Hero />
      {loading && <p>Loading categories...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && <CategoryList categoryList={categoryList} />}
    </div>
  );
}
