import React, { useState } from "react";
import { useAPI } from "../context/apiContext";
import MachineList from "./MachineList";

import "../scss/search.scss";
import "../scss/dropdown.scss";

export default function SearchFilter() {
  // Load in global state
  const { data, isLoading } = useAPI();

  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // SEARCH BAR - filter based on model
  const filteredSearch = ({ model }) => {
    return model.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0;
  };

  // DROPDOWN - filter based on category
  const filteredCategories = data.filter(
    (machine) =>
      machine.category.toLowerCase() === selectedCategory.toLowerCase()
  );

  return (
    <>
      <div className="row">
        <div className="col-lg-9">
          {/* Search */}
          <input
            className="search"
            type="text"
            placeholder="Search by model..."
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
          />
        </div>
        <div className="col-lg-3">
          {/* Dropdown */}
          <div className="options">
            {!isLoading ? (
              <>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="product-dropdown"
                  name="product-dropdown"
                >
                  <option value="">All</option>
                  {data.map((item) => (
                    <option value={item.category}>{item.category}</option>
                  ))}
                </select>
              </>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>
      {/* List of machines */}
      {!isLoading ? (
        <MachineList
          filteredSearch={filteredSearch}
          filteredCategories={filteredCategories}
        />
      ) : (
        "Loading..."
      )}
    </>
  );
}
