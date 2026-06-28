export interface FeatureCollection {
  type: "FeatureCollection";
  features: Feature[];
}

export interface Feature {
  type: "Feature";
  properties: FeatureProperties;
  geometry: Geometry;
}

export interface Geometry {
  type: "Point" | string;
  coordinates: [number, number];
}

export interface FeatureProperties {
  name: string;
  country: string;
  country_code: string;
  state: string;
  county: string;
  city: string;
  postcode: string;
  district: string;
  suburb: string;
  street: string;
  iso3166_2: string;
  lon: number;
  lat: number;
  formatted: string;
  address_line1: string;
  address_line2: string;
  categories: string[];
  details: string[];
  datasource: Datasource;
  brand: string;
  brand_details: BrandDetails;
  name_international: NameInternational;
  commercial: Commercial;
  place_id: string;
}

export interface Datasource {
  sourcename: string;
  attribution: string;
  license: string;
  url: string;
  raw: RawDatasource;
}

export interface RawDatasource {
  lat: number;
  lon: number;
  name: string;
  shop: string;
  brand: string;
  osm_id: number;
  "name:es"?: string; // Clave con formato string literal por contener caracteres especiales
  building: string;
  osm_type: string;
  "brand:wikidata"?: string;
}

export interface BrandDetails {
  wikidata: string;
}

export interface NameInternational {
  es?: string;
  [key: string]: string | undefined; // Permite añadir otros códigos de idioma dinámicamente si es necesario
}

export interface Commercial {
  type: string;
}