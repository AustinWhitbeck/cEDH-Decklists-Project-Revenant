enum MagicColors {
  W = "W",
  U = "U",
  B = "B",
  R = "R",
  G = "G",
}

export enum Rarity {
  common,
  uncommon,
  rare,
  special,
  mythic,
  bonus,
}

export enum CardFinish {
  foil,
  nonfoil,
  etched,
  glossy,
}

export enum Game {
  paper,
  arena,
  mtgo,
}

export enum Legality {
  legal,
  not_legal,
  restricted,
  banned,
}

export enum Format {
  standard,
  future,
  historic,
  pioneer,
  modern,
  legacy,
  pauper,
  vintage,
  penny,
  commander,
  brawl,
  duel,
  oldschool,
}

export enum Border {
  black,
  borderless,
  gold,
  silver,
  white,
}

export const CardFrame = {
  "1993": 0,
  "1997": 1,
  "2003": 2,
  "2015": 3,
  Future: 4,
};

export interface Prices {
  usd?: string | null;
  usd_foil?: string | null;
  usd_etched?: string | null;
  eur?: string | null;
  eur_foil?: string | null;
  tix?: string | null;
}

export type Legalities = {
  [key in keyof typeof Format]: keyof typeof Legality;
};

export interface RelatedUris {
  gatherer?: string | null;
  tcgplayer_decks?: string | null;
  tcgplayer_infinite_decks?: string | null;
  tcgplayer_infinite_articles?: string | null;
  edhrec?: string | null;
  mtgtop8?: string | null;
  [key: string]: string | null | undefined;
}

export interface PurchaseUris {
  tcgplayer?: string | null;
  cardmarket?: string | null;
  cardhoarder?: string | null;
  [key: string]: string | null | undefined;
}

export interface Card {
  object: string;
  id: string;
  oracle_id: string;
  multiverse_ids: string[];
  name: string;
  lang: string;
  released_at: string;
  uri: string;
  scryfall_uri: string;
  layout: string;
  highres_image: boolean;
  image_status: string;
  image_uris: {
    small: string;
    normal: string;
    large: string;
    png: string;
    art_crop: string;
    border_crop: string;
  };
  mana_cost: string;
  cmc: number;
  type_line: string;
  oracle_text: string;
  power: string;
  toughness: string;
  colors: MagicColors[];
  color_identity: MagicColors[];
  keywords: string[];
  legalities: Legalities;
  games: (keyof typeof Game)[];
  reserved: boolean;
  foil: boolean;
  nonfoil: boolean;
  finishes: (keyof typeof CardFinish)[];
  oversized: boolean;
  promo: boolean;
  reprint: boolean;
  variation: boolean;
  set_id: string;
  set: string;
  set_name: string;
  set_type: string;
  set_uri: string;
  set_search_uri: string;
  scryfall_set_uri: string;
  rulings_uri: string;
  prints_search_uri: string;
  collector_number: string;
  digital: boolean;
  rarity: Rarity;
  card_back_id: string;
  artist: string;
  artist_ids: string[];
  border_color: keyof typeof Border;
  frame: keyof typeof CardFrame;
  full_art: boolean;
  textless: boolean;
  booster: boolean;
  story_spotlight: boolean;
  prices: Prices;
  related_uris: RelatedUris;
  purchase_uris: {
    tcgplayer: "https://www.tcgplayer.com/search/magic/product?productLineName=magic&q=Avacyn&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall&view=grid";
    cardmarket: "https://www.cardmarket.com/en/Magic/Products/Search?referrer=scryfall&searchString=Avacyn&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall";
    cardhoarder: "https://www.cardhoarder.com/cards?affiliate_id=scryfall&data%5Bsearch%5D=Avacyn&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall";
  };
}
