import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useSearch from "../utilities/useSearch";
import { SearchResponse } from "../models/SearchResponse";
import SearchItems from "./SearchItems";


const SearchResults = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get('key');
  const { getResponse } = useSearch();
  const [results, setResults] = useState<SearchResponse>();

  const getSearchResults = async () => {
    const response = await getResponse(searchTerm as string);
    if (response) {
      setResults(response);
    }
  }
  useEffect(() => {

  }, []);
  return results && <>
    <SearchItems webpages={results.webPages.value} />
  </>
}

export default SearchResults;