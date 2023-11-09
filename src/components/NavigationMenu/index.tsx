'use client'
import { Box, Collapse, IconButton, List, ListItem, ListItemIcon, ListItemText, Stack, Typography } from "@mui/material"
import  RevenantImage from '../../images/RevenantImage.jpg';
import Image from "next/image";
import { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import DownloadIcon from '@mui/icons-material/Download';
import SearchBar from "../SearchBar";
import CloseIcon from '@mui/icons-material/Close';
import { getScryfallData } from "./actions";
import { useMutation } from "@tanstack/react-query";





const NavigationMenu = () => {

  const [selectedIcon, setSelectedIcon] = useState<null | number>(null);

    const handleIconDrawerToggle = (index: number) => {
    if (index === selectedIcon) {
      return setSelectedIcon(null);
    };
    return setSelectedIcon(index);
  };

  const { mutate: fuzzyCardSearch, data: cardSearchData, isPending, isError } = useMutation({
    mutationFn: async (searchValue: string) => {
      return getScryfallData(searchValue);
    },
    onSuccess: (data) => {
      console.log('data', data);
    },
    onError: (error) => {
      console.log('error', error);
    }
  })

  console.log('cardSearchData', cardSearchData);

  const SearchContent = () => {

    const renderResult = () => {
      if (isPending) {
        return <Typography>Loading...</Typography>
      }
      if (isError) {
        return <Typography>We did not find a card with that search</Typography>
      }
      if (cardSearchData) {
        return (
          <>
            <Typography>Found card {cardSearchData?.name} </Typography>
            <Image src={cardSearchData?.image_uris?.normal} alt="Card Image" width={240} height={300} style={{ borderRadius: '10px'}} />
          </>
        )
      }
      return <Typography>Search for a card!</Typography>
    }
    return(
      <Stack>
        <SearchBar handleSearch={fuzzyCardSearch}/>
        {renderResult()}
      </Stack>
    )
  }


  const drawerIcons = [
    { text: 'Search', icon: <SearchIcon sx={{ color: 'secondary.main' }} />, content: <SearchContent /> },
    { text: 'Download', icon: <DownloadIcon sx={{ color: 'secondary.main' }} />, content: 'Download your list' },
  ];
  return (
    <Box sx={{ display: 'flex'}}>
      <Stack 
        sx={{  
                  height: '100vh', 
                  padding: '10px', 
                  backgroundColor: 'primary.dark',
                  borderRight: '5px solid',
                  borderRightColor: 'secondary.light',
                  [`@media screen and (max-width: 650px)`]: { 
                    display: 'none', 
                  }, 
            }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px'}}>
          <Image src={RevenantImage} alt="Revenant Icon" style={{ borderRadius: '50%', border: 'solid 2px black', height: '100px', width: '100px'}} />
        </Box>
        <List>
          {drawerIcons.map((item, index) => (
            <ListItem  key={item.text} onClick={() => handleIconDrawerToggle(index)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} sx={{ color: 'secondary.dark'}} />
            </ListItem>
          ))}
        </List>
      </Stack>
      <Stack sx={{backgroundColor: 'secondary.light', display: selectedIcon !== null ? 'flex' : 'none' }}>
        <Collapse in={selectedIcon !== null ? true : false} orientation="horizontal">
          <Box sx={{ textAlign: 'right', padding: '10px'}}>
            <IconButton onClick={() => setSelectedIcon(null)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Stack sx={{ padding: '20px'}}>
            {selectedIcon !== null && (
              <Typography variant="body1">{drawerIcons[selectedIcon].content}</Typography>
            )}
          </Stack>
        </Collapse>
      </Stack>
    </Box>
  )
}

export default NavigationMenu

