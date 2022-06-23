import React from 'react';
import {
    Box,
    Flex,
    Image,
    Text,
    Spacer,
    Heading,
    HStack,
    Button,
    Center,
} from '@chakra-ui/react';

import { AiOutlineMenu } from 'react-icons/ai'

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem
} from '@chakra-ui/react';

export default function SimpleNavbar(props: any) {
    return (
        <Flex
            maxW={'inherit'}
            minH={'70px'}
            scrollBehavior={'unset'}
            overflowX='hidden'
            bgGradient={'linear(to-r,purple.800 ,purple.900 ,purple.900)'}
            overflow={'auto'}
            justifyContent={'space-between'}
            boxShadow={'dark-lg'}
            borderBottom={'ActiveBorder'}
        >
            <Box
                mt={1}
                ml={1}
                backgroundColor={'white'}
                h={'90%'}
                w={'95px'}
                borderRadius={'20px 20px 20px 20px'}
            >
                <Image
                    ml={2}
                    mt={1}
                    mb={2}
                    src='cap.jpg'
                    w={'80px'}

                ></Image>
            </Box>
            <Box
                overflow={'auto'}
                justifyContent={'right'}
                minW={'550px'}
            >
                <Center>
                    <Heading
                        pt={4}
                        pl={2}
                        ml={60}
                        float={'right'}
                        fontSize={30}
                        color={'white'}
                        size={'md'}
                    >
                        noiasplate
                    </Heading>
                </Center>
            </Box>
            <Box
                backgroundColor={'inherit'}
                w={'25%'}
                h={'inherit'}
                float={'right'}
                alignItems={'center'}
            >
                <HStack
                    minH={'100%'}
                    backgroundColor={'inherit'}
                    verticalAlign={'center'}
                    spacing={24}
                    alignContent={'center'}
                >
                    <Button
                        variant={'nav'}
                        color={'white'}
                    >
                        About us
                    </Button>
                    <Button
                        variant={'nav'}

                        color={'white'}
                    >
                        Products
                    </Button>
                    <Menu>
                        <MenuButton
                            as={Button}
                        >
                            <AiOutlineMenu />
                        </MenuButton>
                        <MenuList>
                            <MenuItem>
                                Profile
                            </MenuItem>
                            <MenuItem
                                onClick={
                                    () => console.log("Logout")
                                }
                            >
                                Log out
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </HStack>
            </Box>

        </Flex >
    );
}