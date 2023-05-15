import { Box, Center, Flex } from "@chakra-ui/react";
import { Container, Typography } from "@mui/material";

export default function Highlander() {
  return (
    <Flex justifyContent={'center'} w={'100%'} height={50} bgColor={'#8a8987'} color={'#FFFFFF'}>
      <Center>
      <Box>
          <Typography style={{fontSize: '1rem'}} > © Sorry For My Bad English, 2023</Typography>
      </Box>
      </Center>
    </Flex>
  )
}