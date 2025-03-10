import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [data, setData] = useState([]); // Store API content

  // Fetch all searchable content from API
  // useEffect(() => {
  //   fetch("https://your-api.com/content") // 🔹 Replace with your actual API URL
  //     .then((response) => response.json())
  //     .then((fetchedData) => {
  //       setData(fetchedData); // Store data from API
  //     })
  //     .catch((error) => console.error("Error fetching data:", error));
  // }, []);

  // Search through fetched API data
  const handleSearch = (input) => {
    setQuery(input);
    if (input.trim() === "") {
      setResults([]);
      return;
    }

    const filteredResults = data
      .map((page) => ({
        ...page,
        matches: [
          page.title,
          page.description,
          page.content,
          page.footer,
        ]
          .join(" ")
          .toLowerCase()
          .includes(input.toLowerCase()),
      }))
      .filter((page) => page.matches);

    setResults(filteredResults);
  };

  return (
    <div className="relative w-full max-w-lg">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
      />
      {results.length > 0 && (
        <div className="absolute left-0 w-full bg-white border shadow-md mt-1 z-50">
          {results.map((item, index) => (
            <Link
              key={index}
              to={item.path} // 🔹 Ensure API provides a path or unique identifier
              className="block px-4 py-2 hover:bg-gray-200"
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
