// import React, { useState } from "react";

// const SearchBar = ({ setFilter, products }) => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleSearch = async (e) => {
//     const term = e.target.value;
//     setSearchTerm(term);

//     if (!setFilter || typeof setFilter !== "function") {
//       console.error("setFilter is not a function");
//       return;
//     }
//     if (term === "") {
//       setFilter(products); // ✅ Now correctly resets products when input is cleared
//       return;
//     }

//     setLoading(true);
//     setError("");

//     try {
//       const response = await fetch(
//         "https://staging-be-ecom.techserve4u.com/api/product/filter",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ query: term }),
//         }
//       );

//       if (!response.ok) throw new Error("Failed to fetch filtered products");

//       const data = await response.json();
//       setFilter(data.products); // Update state with filtered results
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search Products"
//         value={searchTerm}
//         onChange={handleSearch}
//         className="flex flex-col items-center justify-center w-40 p-2 mb-4 border border-gray-700 rounded-md"
//       />
//       {loading && <p>Loading...</p>}
//       {error && <p className="text-red-500">{error}</p>}
//     </div>
//   );
// };

// export default SearchBar;
import React, { useState } from "react";

const SearchBar = ({ setFilter, products }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (!setFilter || typeof setFilter !== "function") {
      console.error("setFilter is not a function"); // ✅ Debugging check
      return;
    }

    // ✅ Reset product list if search is cleared
    if (term.trim() === "") {
      setFilter(products);
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
      console.log("API Response:", data.products); // ✅ Debugging API response

      setFilter(data?.products || []); // ✅ Prevents undefined state update
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
