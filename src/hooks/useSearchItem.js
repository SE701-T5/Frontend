import { useState, useEffect } from "react";

export const useSearchItem = (posts) => {
  const [filteredResults, setFilteredResults] = useState(posts);

  //creating a state for search query in searchbar
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (searchQuery !== "") {
      setFilteredResults(() =>
        posts.filter(
          (item) =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.community.name
              .toLowerCase()
              .includes(searchQuery.toLowerCase()) ||
            item.bodyText.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setFilteredResults(posts);
    }
  }, [searchQuery]);

  return { filteredResults, searchQuery, setSearchQuery };
};
