import React from 'react'

const SearchCardSubMenu = () => {
  return (
                <Typography>Found card {cardSearchData?.name} </Typography>
            <Image src={cardSearchData?.image_uris?.normal} alt="Card Image" width={240} height={300} style={{ borderRadius: '10px'}} />
  )
}

export default SearchCardSubMenu