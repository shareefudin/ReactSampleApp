import React from "react";
import { WebPage } from "../models/SearchResponse";

interface Page {
  webpage: WebPage;
}

const SearchItem: React.FC<Page> = ({ webpage }) => {
  return (
    webpage && (
      <div>
        <h2>{webpage.name}</h2>
        <p>{webpage.snippet}</p>
        <p>URL: <a href={webpage.url}>{webpage.url}</a></p>
      </div>
    )
  );
};

export default SearchItem;
