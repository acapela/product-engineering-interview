export type UnicodeString = string;

export interface Emoji {
  name: string;
  unicode: UnicodeString;
  short_name: string;
  short_names: string[];
  category: string;
  subcategory: string;
  skin_variations: SkinVariations;
}

export type SkinVariations = Record<string, { unicode: UnicodeString }>;
