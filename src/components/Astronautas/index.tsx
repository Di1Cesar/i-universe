import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Center, Flex, Heading } from '@chakra-ui/react';
import { Box, Container } from '@mui/material';

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function RecipeReviewCard() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <>
            <Flex display={'block'} bgImage={'https://img.freepik.com/fotos-gratis/astronauta-caminhando-na-lua-em-tons-de-preto-e-branco_53876-126902.jpg?size=626&ext=jpg&ga=GA1.1.59850136.1683650122&semt=ais'} > 
                <Flex >
                    <Container>
                        <Center>
                            <Box>
                                <Heading color={'white'}>ASTRONAUTAS</Heading>
                            </Box>
                        </Center>
                    </Container>
                </Flex>
                <Flex justifyContent={'center'}  >
                    
                        <Card sx={{ maxWidth: 400, margin: 1}}>
                            <CardMedia
                            
                                component="img"
                                height="400"
                                image="data:image/jpeg;base64,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"
                                alt="Buzz Aldrin"
                            />
                            <CardContent>
                            <Typography textAlign={'center'} variant="body1" fontWeight={'bold'} color="text.primary">
                                    Buzz Aldrin
                                </Typography>
                                <Typography variant="body2" color="text.primary">
                                    This impressive paella is a perfect party dish and a fun meal to cook
                                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                                    if you like.
                                </Typography>
                            </CardContent>
                        </Card>

                        <Card sx={{ maxWidth: 400, margin: 1 }}>
                            <CardMedia
                                component="img"
                                height="400"
                                image="https://midias.jb.com.br/_midias/jpg/2022/01/13/peixonauta-656296.jpg"
                                alt="Paella dish"
                            />
                            <CardContent>
                            <Typography textAlign={'center'} variant="body1" fontWeight={'bold'} color="text.primary">
                                    Peixonauta
                                </Typography>
                                <Typography variant="body2" color="text.primary">
                                    This impressive paella is a perfect party dish and a fun meal to cook
                                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                                    if you like.
                                </Typography>
                            </CardContent>
                        </Card>

                        <Card sx={{ maxWidth: 400, margin: 1 }}>
                            <CardMedia
                                component="img"
                                height="400"
                                image="https://karsh.org/wordpress/wp-content/uploads/2019/04/Yousuf-Karsh-Yuri-Gagarin-1963.jpg"
                                alt="Paella dish"
                            />
                            <CardContent>
                            <Typography textAlign={'center'} variant="body1" fontWeight={'bold'} color="text.primary">
                                    Diego Gagarin
                                </Typography>
                                <Typography variant="body2" color="text.primary">
                                    This impressive paella is a perfect party dish and a fun meal to cook
                                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                                    if you like.
                                </Typography>
                            </CardContent>
                        </Card>

                  
                </Flex>
            </Flex>
        </>
    );
}
