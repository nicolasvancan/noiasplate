import { Box, Flex, Stack, Image, Text, Heading, Center, VStack } from '@chakra-ui/react';
import { SimpleNavbar } from './components';


export default function LandingPage(props: any) {
    return (
        <VStack
            w={'100%'}
            align={'stretch'}
            spacing={'0'}
        >
            <SimpleNavbar />
            <Box
                minW={'100%'}
                minH={'100%'}
            >
                <Flex direction={'column'}
                    minW={'100%'}
                    minH={'100%'}
                >

                    <Box
                        backgroundColor={'purple.800'}
                        w={'100%'}
                        h={'inherit'}
                    >
                        <Box
                            mt={20}
                        >
                            <Heading
                                size={'4xl'}
                                color={'white'}
                            >
                                <Text
                                    align={'center'}
                                >What is this ?
                                </Text>
                            </Heading>
                        </Box>

                        <Box
                            w={'100%'}
                            h={'inherit'}
                            mt={'20'}
                        >
                            <Text
                                align={'center'}
                                fontSize={26}
                                color={'white'}
                            >
                                Just a simple login template
                            </Text>
                        </Box>



                        <Flex
                            position={'relative'}
                            left={'23%'}
                            w={'55%'}
                            h={'40%'}
                            mt={'20'}
                            bg='inherit'
                        >
                            <Text
                                ml={3}
                                mt={3}
                                mr={3}
                                mb={2}
                                fontFamily={'heading'}
                                fontSize={18}
                                backgroundColor={'inherit'}
                                color={'white'}
                            >
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I just wanted to show how to implement and use a simple login mechanism, without focusing much on the layout, nor focusing on security or other subjects.
                                <br></br>
                                <br></br>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This example is as simple as possible, but has many different features and makes use of great tools.
                                <br></br>
                                <br></br>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I hope it can be helpfull to someone, I'll try my best to improve this example as soon as I have time.
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                            </Text>


                        </Flex>
                    </Box>
                    <Box
                        style={{
                            backgroundImage: `url(${process.env.PUBLIC_URL + '/city.jpg'})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            width: '100%',
                            height: '120vw',
                            minHeight: '100%'
                        }}
                    >

                    </Box>

                </Flex>
            </Box>
        </VStack>
    );
}