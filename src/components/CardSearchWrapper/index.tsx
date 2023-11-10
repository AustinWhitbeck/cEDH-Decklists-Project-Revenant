
'use client'
import { Card } from "@/utils/Card";
import SearchBar from "../SearchBar"


export async function getScryfallData( searchString: string): Promise<Card> {
  const res = await fetch(`https://api.scryfall.com/cards/named?fuzzy=${searchString}`);
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

const CardSearchWrapper = () => {
  return (
    <div>



      
              <SearchBar handleSearch={getScryfallData}/>
              
    </div>
  )
}

export default CardSearchWrapper