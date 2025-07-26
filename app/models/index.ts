export interface MarvelApiResponse<T> {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: MarvelApiDataContainer<T>;
}
export interface MarvelApiDataContainer<T> {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: T[];
}

export interface Character {
  id: number;
  name: string;
  description: string;
  modified: string;
  resourceURI: string;
  urls: Url[];
  thumbnail: Image;
  comics: ResourceList;
  stories: ResourceList;
  events: ResourceList;
  series: ResourceList;
}
export interface Url {
  type: string; // e.g., "detail", "wiki", "comiclink"
  url: string;
}

export interface Image {
  path: string; // e.g., "http://example.com/image"
  extension: string; // e.g., "jpg"
}

export interface ResourceList {
  available: number;
  collectionURI: string;
  items: ResourceItem[];
  returned: number;
}

export interface ResourceItem {
  resourceURI: string;
  name: string;
  type?: string; // Only for stories
}
