interface QueryContext {
  originalQuery: string;
}

interface WebPage {
  id: string;
  name: string;
  url: string;
  datePublished: string;
  datePublishedFreshnessText: string;
  isFamilyFriendly: boolean;
  displayUrl: string;
  snippet: string;
  dateLastCrawled: string;
  cachedPageUrl: string;
  language: string;
  isNavigational: boolean;
}

interface WebPages {
  webSearchUrl: string;
  totalEstimatedMatches: number;
  value: WebPage[];
}

interface SearchResponse {
  _type: string;
  queryContext: QueryContext;
  webPages: WebPages;
}

export { QueryContext, WebPage, WebPages, SearchResponse };
