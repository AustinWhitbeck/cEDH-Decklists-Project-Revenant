'use client'
import { Box, FormControl, OutlinedInput, IconButton, InputAdornment} from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import CancelTwoToneIcon from '@mui/icons-material/CancelTwoTone';
import { useState } from "react"
import { UseMutateFunction, useMutation } from "@tanstack/react-query";
import { getScryfallData } from "../NavigationMenu/actions";
import { Card } from "@/utils/Card";

export type SearchBarProps = {
  handleSearch: UseMutateFunction<Card, unknown, string, unknown>;
}

const SearchBar = ({ handleSearch }: SearchBarProps) => {

  const [ searchString, setSearchString ] = useState<string>('')


  return (
    <FormControl onSubmit={() => handleSearch(searchString)} variant="outlined">
      <OutlinedInput  
        value={searchString} 
        placeholder="Search a card!"
        onChange={(e) => setSearchString(e.target.value)} 
        fullWidth 
        endAdornment={
          <Box sx={{ gap: '10px', display: 'flex'}}>
                <IconButton edge="end" onClick={() => setSearchString('')}>
                  <CancelTwoToneIcon />
                </IconButton>
                <IconButton edge="end" onClick={() => handleSearch(searchString)}>
                  <SearchIcon />
                </IconButton>
          </Box>
        }
      />   
    </FormControl>
  )
}

export default SearchBar