//Function for filtering posts by title, community, text, or upi when user inputs text in the search bar, else all posts will be shown
export function searchItem(
  searchValue,
  posts,
  setSearchQuery,
  setFilteredResults
) {
  setSearchQuery(searchValue);
  if (searchValue !== "") {
    const filteredSearch = posts.filter((item) => {
      return (
        item.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.community.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.text.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.upi.toLowerCase().includes(searchValue.toLowerCase())
      );
    });
    setFilteredResults(filteredSearch);
  } else {
    setFilteredResults(posts);
  }
}
