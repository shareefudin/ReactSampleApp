import React from "react";
import { SearchResponse, WebPage, WebPages } from "../models/SearchResponse";
import { WebSearchClient } from "azure-cognitiveservices-websearch";
import { CognitiveServicesCredentials } from "ms-rest-azure";

const useSearch = () => {
  const getResponse = async (
    searchTerm: string
  ): Promise<SearchResponse | null> => {
    try {
      const subscriptionKey = "SUBSCRIPTION_KEY";
      const credentials = new CognitiveServicesCredentials(subscriptionKey);
      const client = new WebSearchClient(credentials);
      const searchResults = await client.web.search(searchTerm);
      console.log("Search Results:", searchResults);

      if (searchResults) {
        const webPages: WebPages = {
          webSearchUrl: searchResults.webSearchUrl ?? "",
          totalEstimatedMatches: searchResults.totalEstimatedMatches,
          value: searchResults?.value?.map(
            (result): WebPage => ({
              id: result.id,
              name: result.name,
              url: result.url,
              datePublished: result.datePublished,
              datePublishedFreshnessText: result.datePublishedFreshnessText,
              isFamilyFriendly: result.isFamilyFriendly,
              displayUrl: result.displayUrl,
              snippet: result.snippet,
              dateLastCrawled: result.dateLastCrawled,
              cachedPageUrl: result.cachedPageUrl,
              language: result.language,
              isNavigational: result.isNavigational,
            })
          ),
        };

        const searchResponse: SearchResponse = {
          _type: "SearchResponse",
          queryContext: {
            originalQuery: searchTerm,
          },
          webPages: webPages,
        };

        return searchResponse;
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
    }

    return null;
  };

  return { getResponse };
};

export default useSearch;
