import React, { useState } from "react";
import { Box, Flex, Heading, Stack } from "@chakra-ui/layout";
import { Button, IconButton } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Input, InputRightElement, InputGroup } from "@chakra-ui/input";
import { Text } from "@chakra-ui/layout";
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

export default function Login(props: any) {

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [tempEmail, setTempEmail] = useState('');
    const [tempPassword, setTempPassword] = useState('');

    return (
        <Flex
            justify={'center'}
            minH={'100vh'}
            bgGradient={'linear(to-br, green.600, purple.600, black)'}

        >
            <Stack spacing={4}
                p={8}
                mx={'auto'}
                px={5}
                py={5}
                align={'center'}
            >
                <Stack
                    align={'center'}
                >
                    <Box
                        minH={'100px'}
                        maxH={'100px'}
                    >
                        <Image alt={'Bang'}
                            src={'cap.jpg'}
                            boxSize={'100%'}
                        />
                    </Box>

                </Stack>
                <Box
                    minH={'500'}
                    minW={'400px'}
                    border={'1px solid'}
                    shadow={'2xl'}
                    borderRadius={'20px 20px 20px 20px'}
                    bgGradient={'linear(to-br, green.300, purple.600, purple.900)'}

                    p={8}
                >
                    <Heading
                        position={'relative'}
                        left={'20%'}
                        alignItems={'center'}
                        as={'h2'}
                        fontFamily={'sans-serif'}
                        color={'white'}
                        pb={4}
                    >
                        noiasplate
                    </Heading>
                    <Stack
                        spacing={4}
                    >
                        <Text
                            fontFamily={'sans-serif'}
                            fontWeight={'bold'}
                            color={'white'}
                        >
                            Email
                        </Text>
                        <Input
                            bg={'white'}
                            boxShadow='2xl'
                        />


                        <Text
                            fontFamily={'sans-serif'}
                            fontWeight={'bold'}
                            color={'white'}
                        >
                            Password
                        </Text>
                        <InputGroup>
                            <Input
                                type={isPasswordVisible ? 'text' : 'password'}
                                id={'password'}
                                bg={'white'}
                                onChange={() => {

                                }}
                            />
                            <InputRightElement>
                                <Button
                                    onClick={() => {
                                        setIsPasswordVisible(!isPasswordVisible);
                                    }}
                                >
                                    {isPasswordVisible ? <ViewOffIcon></ViewOffIcon> : <ViewIcon></ViewIcon>}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                    </Stack>
                    <Stack
                        direction={'column'}
                        pt={8}
                        justifyContent={'space-evenly'}
                    >
                        <Button
                            height={'25px'}
                            color={'purple.700'}
                        >
                            Sign in
                        </Button>
                        <Text
                            pt={2}
                            pb={2}
                            color={'white'}
                        >
                            Not registered? Sign up
                        </Text>
                        <Button
                            height={'25px'}
                            color={'purple.700'}
                        >
                            Sign up
                        </Button>
                    </Stack>
                    <Stack
                        pt={8}
                        direction={'row'}
                        justifyContent={'space-around'}
                    >
                        <Box
                            w={'70px'}
                            h={'70px'}

                        >
                            <Image
                                src="fb-icon.png"
                                w={'inherit'}
                                h={'inherit'}
                            >
                            </Image>
                        </Box>
                        <Box
                            w={'80px'}
                            h={'80px'}
                        >
                            <Image
                                src="gmail.png"
                                w={'inherit'}
                                h={'inherit'}
                            ></Image>
                        </Box>
                    </Stack>
                </Box>

            </Stack >

        </Flex >
    );
}