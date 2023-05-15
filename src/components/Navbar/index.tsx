import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Flex } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import BasicMenu from '../Menu';



export default function NavBar() {
  return (
    <Box alignItems={'center'}>
      <AppBar style={{ background: '#FFFFFF' }} position="static">
        <Toolbar>
          <Flex>
            <Image sx={{ ml: 40 }} src='https://cdn.icon-icons.com/icons2/2845/PNG/512/nasa_logo_icon_181406.png' boxSize={'50px'} />
          </Flex>
          <Flex justifyContent={"end"} width={"100%"}>
            <BasicMenu></BasicMenu>
          </Flex>
        </Toolbar>
      </AppBar >
    </Box >
  );
}