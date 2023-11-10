'use client';
import { useState, ChangeEvent } from 'react';
import { getFuzzyCardSearch, getPartialCardNames } from './actions';
import { Box, Button, IconButton, OutlinedInput, Stack, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CancelTwoToneIcon from '@mui/icons-material/CancelTwoTone';
import Image from 'next/image';
import { useMutation } from '@tanstack/react-query';

function CardSearch() {
  const [partialName, setPartialName] = useState<string>('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [chosenCard, setChosenCard] = useState<string>('');

  const handleInputChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    setPartialName(input);

    if (input.trim() === '') {
      setSuggestions([]);
    } else {
      try {
        const partialNames = await getPartialCardNames(input);
        setSuggestions(partialNames);
      } catch (error) {
        // Handle the error, e.g., display an error message to the user.
        console.error('Error fetching partial card names:', error);
      }
    }
  };

    const { mutate: findFuzzyMatch, data: cardSearchData } = useMutation({
    mutationFn: async (searchValue: string) => {
      return getFuzzyCardSearch(searchValue);
    },
    onSuccess: (data) => {
      console.log('data', data);
    },
    onError: (error) => {
      console.log('error', error);
    }
  })

  const renderFoundCardResult = () => {
    if(!cardSearchData) {
      return <Typography>Search for a card!</Typography>
    }
    return (
      <>
        <Typography>Found card {cardSearchData?.name} </Typography>
        <Image src={cardSearchData?.image_uris?.normal} alt="Card Image" width={240} height={300} style={{ borderRadius: '10px'}} />
      </>
    )
  }

  return (
    <Box>
        <OutlinedInput
            value={partialName} 
            placeholder="Search a card!"
            onChange={handleInputChange} 
            fullWidth 
            endAdornment={
            <Box sx={{ gap: '10px', display: 'flex'}}>
                <IconButton edge="end" onClick={() => {
                    setPartialName('');
                    setSuggestions([]);
                    setChosenCard('');
                    }}>
                <CancelTwoToneIcon />
                </IconButton>
            </Box>
            }
        />
        <Typography>Chosen Card: {chosenCard}</Typography>   
        <Stack sx={{ maxHeight: '200px', overflowY: 'scroll'}}>
            {suggestions.map((name, index) => (
            <Button key={index} onClick={() => {
                setChosenCard(name);
                findFuzzyMatch(name);
            }}>{name}</Button>
            ))}
        </Stack>
        <Stack>
            {renderFoundCardResult()}
        </Stack>
    </Box>
  );
}

export default CardSearch;
