import { Card } from "@/utils/Card";

const SCRYFALL_API_BASE_URL = 'https://api.scryfall.com';

export async function getPartialCardNames(partialName: string): Promise<string[]> {
  try {
    const response = await fetch(`${SCRYFALL_API_BASE_URL}/cards/autocomplete?q=${partialName}`);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data.data; // The `data` field contains the list of partial card names.
  } catch (error) {
    console.error('Error fetching partial card names:', error);
    throw error;
  }
}

  export const getFuzzyCardSearch = async ( searchString: string): Promise<Card> => {
  const res = await fetch(`${SCRYFALL_API_BASE_URL}/cards/named?fuzzy=${searchString}`);
  console.log('res', res);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  // Recommendation: handle errors
    if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  const data = await res.json();
  console.log('data', data);
  return data;
}
