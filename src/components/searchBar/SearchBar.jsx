import React, { useState } from "react";

const SearchBar = ({ setFilteredProducts, products }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (term === "") {
      setFilteredProducts(products); // Clear filtered products when search is empty
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        "https://staging-be-ecom.techserve4u.com/api/product/filter",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ query: term }),
        }
      );

      if (!response.ok) throw new Error("Failed to fetch filtered products");

      const data = await response.json();
      setFilteredProducts(data.products); // Update state with filtered results
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search Products"
        value={searchTerm}
        onChange={handleSearch}
        className="flex flex-col items-center justify-center w-40 p-2 mb-4 border border-gray-700 rounded-md"
      />
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default SearchBar;
