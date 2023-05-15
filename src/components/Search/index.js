import React, { useState } from "react";
import "./styles/search.css";

export default function Search({onSearch}){
    let [searchQuery, setSearchQuery] = useState("");

    let handleInputChange = (e) => {
      setSearchQuery(e.target.value);
      onSearch(e.target.value);
    };

    return (
        <>
          <div className="search-container">
            <div className="search-input-div">
              <input
                type="text"
                className="search-input"
                name="search"
                placeholder="Search actors or characters"
                value={searchQuery}
                onChange={handleInputChange}
              />
            </div>
            <div className="searh-hp">Search</div>
        </div>
        </>
    )
}
