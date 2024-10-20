"use client";

import { MdSearch } from "react-icons/md";
import styles from "./search.module.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { useState, useEffect } from "react";

const Search = ({ placeholder }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  // Get the search term from the URL, if it exists
  const initialSearchTerm = searchParams.get("q") || "";

  const [searchValue, setSearchValue] = useState(initialSearchTerm);

  // Sync input field with the search term from URL
  useEffect(() => {
    setSearchValue(initialSearchTerm);
  }, [initialSearchTerm]);

  // Handle search input change
  const handleSearch = useDebouncedCallback((e) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", 1); // Reset to page 1 when search changes

    if (e.target.value) {
      e.target.value.length > 2 && params.set("q", e.target.value); // Only set if more than 2 chars
    } else {
      params.delete("q"); // Clear search term if input is empty
    }

    replace(`${pathname}?${params}`);
  }, 300);

  // Handle manual input change to sync search input value with URL
  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
    handleSearch(e);
  };

  return (
    <div className={styles.container}>
      <MdSearch />
      <input type="text" placeholder={placeholder} className={styles.input} value={searchValue} onChange={handleInputChange} />
    </div>
  );
};

export default Search;
