import React from "react";
import { GoSearch } from "react-icons/go";
interface SearchInputProps {
  className?: string;
  placeholder?: string;
  onChange: (value: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  className = "",
  placeholder = "Search items",
  onChange,
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className="search-container">
      <GoSearch className="icon" />
      <input
        type="text"
        className={`search-input ${className}`}
        placeholder={placeholder}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchInput;
