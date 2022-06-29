import {
    Box,
    Flex,
    Image,
    Heading,
    HStack,
    Button,
    Center,
    useMediaQuery,
    Text
} from '@chakra-ui/react';

import { AiOutlineMenu } from 'react-icons/ai'

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem
} from '@chakra-ui/react';

import { Logout } from '../../services/AccountApi';

export default function SimpleNavbar(props: any) {

    const [isLargerThan980px, isLargerThan700, isBrowser] = useMediaQuery([
        '(min-width: 980px)',
        '(min-width: 700px)',
        '(display-mode: browser)'
    ]);

    const handleLogout = async () => {
        const logoutResult = await Logout(localStorage.getItem('refreshToken'));
        if (logoutResult.status === 200) {
            window.location.href = '/';
        }
    }

    return (
        <>
            {
                console.log("Is larger than 980px: ", isLargerThan980px)

            }
            {
                console.log("Is larger than 700px: ", isLargerThan700)

            }
            {isLargerThan980px &&
                <Flex
                    zIndex={99}
                    bgGradient={'linear(to-r,purple.800 ,purple.900 ,purple.900)'}
                    overflow={'auto'}
                    justifyContent={'space-between'}
                    boxShadow={'dark-lg'}
                    borderBottom={'ActiveBorder'}
                    maxH={'80px'}
                >
                    < Box
                        mt={1}
                        ml={1}
                        backgroundColor={'white'}
                        minH={'90%'}
                        minW={'95px'}
                        maxW={'95px'}
                        borderRadius={'20px 20px 20px 20px'}
                    >
                        <Image
                            ml={2}
                            mt={1}
                            mb={2}
                            src='cap.jpg'
                            maxH={'90%'}
                            maxW={'85%'}

                        ></Image>
                    </Box >
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
                        minW={'25%'}
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
                                            () => handleLogout()
                                        }
                                    >
                                        Log out
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                        </HStack>
                    </Box>

                </Flex >}
            {(isLargerThan700 && !isLargerThan980px) &&
                <Flex
                    zIndex={99}
                    bgGradient={'linear(to-r,purple.800 ,purple.900 ,purple.900)'}
                    overflow={'auto'}
                    justifyContent={'space-between'}
                    boxShadow={'dark-lg'}
                    borderBottom={'ActiveBorder'}
                    maxH={'80px'}
                >
                    < Box
                        mt={1}
                        ml={1}
                        backgroundColor={'white'}
                        minH={'90%'}
                        minW={'95px'}
                        maxW={'95px'}
                        borderRadius={'20px 20px 20px 20px'}
                    >
                        <Image
                            ml={2}
                            mt={1}
                            mb={2}
                            src='cap.jpg'
                            maxH={'90%'}
                            maxW={'85%'}

                        ></Image>
                    </Box >

                    <Box
                        backgroundColor={'inherit'}
                        minW={'25%'}
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
                                            () => handleLogout()
                                        }
                                    >
                                        Log out
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                        </HStack>
                    </Box>

                </Flex >
            }
            {(!isLargerThan700 && !isLargerThan980px) &&
                <Flex
                    zIndex={99}
                    bgGradient={'linear(to-r,purple.800 ,purple.900 ,purple.900)'}
                    overflow={'auto'}
                    justifyContent={'space-evenly'}
                    boxShadow={'dark-lg'}
                    borderBottom={'ActiveBorder'}
                    maxH={'80px'}
                >
                    < Box
                        mt={1}
                        ml={1}
                        backgroundColor={'white'}
                        minH={'90%'}
                        minW={'95px'}
                        maxW={'95px'}
                        borderRadius={'20px 20px 20px 20px'}
                    >
                        <Image
                            ml={2}
                            mt={1}
                            mb={2}
                            src='cap.jpg'
                            maxH={'90%'}
                            maxW={'85%'}

                        ></Image>
                    </Box >

                    <Box
                        backgroundColor={'inherit'}
                        minW={'200px'}
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
                                            () => handleLogout()
                                        }
                                    >
                                        Log out
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                        </HStack>
                    </Box>

                </Flex >
            }
        </>
    );
}