import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Center, Container, Flex, Heading, Spacer, Stack, Wrap, WrapItem } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react'
import { Button, Typography } from '@mui/material';
import { createBreakpoints } from "@chakra-ui/theme-tools"
export default function Conteudo() {
    const breakpoints = createBreakpoints({
        sm: "320px",
        md: "768px",
        lg: "960px",
        xl: "1200px",
      })
    return (
        <Flex justifyContent={'space-evenly'} bgImage={'assets/fundo-conteudo.png'} width={'100%'}>
            <Box width={'45%'} maxHeight={'20%'} display={'block'}>
            <Center>
                <Image ml={30} mt={30} src='https://cdn-icons-png.flaticon.com/512/1406/1406240.png' width={'70%'} alt="" />
                </Center>
            </Box>
            <Flex width={'45%'} maxHeight={'20%'} mb={20} justifyContent={'unset'} >
                <Center>
                    <Box >
                        <Image src='https://cdn.icon-icons.com/icons2/548/PNG/512/1455554774_line-86_icon-icons.com_53363.png' boxSize={'40%'} />
                        <Box>
                            <Heading color={'white'} as='h1'  >O UNIVERSO EM <br /> CONSTANTE EXPANSÃO</Heading>
                            <Heading color={'white'} as='h3'  >O universo teve início em um estado extremamente denso e quente há aproximadamente 13,8 bilhões de anos, em um evento conhecido como Big Bang. Após o Big Bang, o universo começou a expandir-se rapidamente, e continua a fazê-lo até os dias de hoje.</Heading>
                            <Heading color={'white'} as='h3' > Imagem de <u> <a href="https://www.flaticon.com/br/" style={{ color: 'white' }}>FlatIcon </a></u></Heading>
                            <Button style={{ borderColor: 'white', borderRadius: '10rem', color: 'white', borderWidth: 1, width: '60%' }}
                                variant="outlined"><Heading color={'white'}> Consulte mais informações </Heading></Button>
                        </Box>
                    </Box>
                </Center>
            </Flex>
        </Flex>
    );
}