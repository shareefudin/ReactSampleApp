import React from "react";
import { WebPage } from "../models/SearchResponse";
import SearchItem from "./SearchItem";

interface Pages {
  webpages: WebPage[];
}

const SearchItems: React.FC<Pages> = ({ webpages }) => {
  return (
    webpages &&
    webpages.map((page, index) => (
      <SearchItem key={index} webpage={page} />
    ))
  );
};

export default SearchItems;
