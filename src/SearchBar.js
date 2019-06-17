import React from "react";

export default function SearchBar() {
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
