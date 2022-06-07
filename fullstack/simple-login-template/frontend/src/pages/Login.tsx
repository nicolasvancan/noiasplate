import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Box, Flex, Heading, Stack } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Input, InputRightElement, InputGroup } from "@chakra-ui/input";
import { Text } from "@chakra-ui/layout";
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { CreateAccount, PostLogin } from "../services/AccountApi";

import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    useDisclosure,
    FormControl,
    FormErrorMessage,
    FormLabel,

} from "@chakra-ui/react";

export default function Login(props: any) {


    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const signUpResolverSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        lastName: Yup.string().required('Last name is required'),
        email: Yup.string().required('Email is required').matches(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/, { message: 'Insert a valid email' }),
        password: Yup.string().required('Passwod is required').min(6, 'Minimum length is 6'),
        repeatPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required()
    });

    const loginResolverSchema = Yup.object({
        email: Yup.string().required('Email is required').matches(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/, { message: 'Insert a valid email' }),
        password: Yup.string().required('Passwod is required')
    });

    const signupResolver = useForm({
        resolver: yupResolver(signUpResolverSchema)
    });

    const loginResolver = useForm({
        resolver: yupResolver(loginResolverSchema)
    });

    const onSignUpSubmit = async (values: any) => {
        const newAccount = await CreateAccount(values);
        console.log(newAccount)
        onSignUpClose()
    };

    const onLoginSubmit = async (values: any) => {
        const loginResponse = await PostLogin(values);
        console.log(loginResponse);
    };

    const {
        isOpen: isSignUpOpen,
        onOpen: onSignUpOpen,
        onClose: onSignUpClose
    } = useDisclosure();

    return (
        <>
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
                        <form onSubmit={loginResolver.handleSubmit(onLoginSubmit)}>
                            <Stack
                                spacing={4}
                            >
                                <FormControl>
                                    <FormLabel
                                        fontFamily={'sans-serif'}
                                        fontWeight={'bold'}
                                        color={'white'}
                                    >
                                        Email
                                    </FormLabel>
                                    <Input
                                        required
                                        {...loginResolver.register('email')}
                                        bg={'white'}
                                        boxShadow='2xl'
                                    />
                                </FormControl>

                                <FormControl>
                                    <FormLabel
                                        fontFamily={'sans-serif'}
                                        fontWeight={'bold'}
                                        color={'white'}
                                    >
                                        Password
                                    </FormLabel>
                                    <InputGroup>
                                        <Input
                                            required
                                            {...loginResolver.register('password')}
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
                                </FormControl>
                            </Stack>
                            <Stack
                                direction={'column'}
                                pt={8}
                                justifyContent={'space-evenly'}
                            >
                                <Button
                                    type='submit'
                                    height={'25px'}
                                    color={'purple.700'}
                                    isLoading={loginResolver.formState.isSubmitting}
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
                                    onClick={() => {
                                        if (isSignUpOpen) {
                                            onSignUpClose();
                                        } else {
                                            onSignUpOpen();
                                        }
                                    }}
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
                        </form>
                    </Box>

                </Stack >
            </Flex >

            <Drawer
                isOpen={isSignUpOpen}
                onClose={onSignUpClose}
                placement={'right'}
            >
                <form
                    onSubmit={signupResolver.handleSubmit(onSignUpSubmit)}
                >
                    <DrawerOverlay>
                        <DrawerContent
                            bg={'purple.600'}
                        >
                            <DrawerHeader
                                shadow={'lg'}
                                bg={'purple.800'}
                                color={'white'}
                            >
                                Sign Up
                            </DrawerHeader>

                            <DrawerBody>
                                <Stack>
                                    <FormControl isInvalid={signupResolver.formState.errors.email}>
                                        <FormLabel
                                            pt={2}
                                            pb={2}
                                            fontWeight={'bold'}
                                            color={'white'}
                                        >
                                            email
                                        </FormLabel>

                                        <Input
                                            placeholder={'noiasplate@noias.com'}
                                            bg={'white'}
                                            required
                                            {...signupResolver.register('email')}
                                        />
                                        <FormErrorMessage color={'red.300'}>
                                            {signupResolver.formState.errors.email?.message}
                                        </FormErrorMessage>
                                    </FormControl>

                                    <FormControl isInvalid={signupResolver.formState.errors.name}>
                                        <FormLabel
                                            pt={2}
                                            pb={2}
                                            fontWeight={'bold'}
                                            color={'white'}
                                        > name
                                        </FormLabel>

                                        <Input
                                            placeholder={'Your name'}
                                            bg={'white'}
                                            required
                                            {...signupResolver.register('name')}
                                        />
                                        <FormErrorMessage color={'red.300'}>
                                            {signupResolver.formState.errors.name?.message}
                                        </FormErrorMessage>
                                    </FormControl>

                                    <FormControl isInvalid={signupResolver.formState.errors.lastName}>
                                        <FormLabel
                                            pt={2}
                                            pb={2}
                                            color={'white'}
                                            fontWeight={'bold'}
                                        > last name</FormLabel>
                                        <Input
                                            placeholder={'Your Last name'}
                                            bg={'white'}
                                            required
                                            {...signupResolver.register('lastName')}
                                        />
                                        <FormErrorMessage>
                                            {signupResolver.formState.errors.lastName?.message}
                                        </FormErrorMessage>
                                    </FormControl>

                                    <FormControl isInvalid={signupResolver.formState.errors.password}>
                                        <FormLabel
                                            pt={2}
                                            pb={2}
                                            color={'white'}
                                            fontWeight={'bold'}
                                        >
                                            password
                                        </FormLabel>
                                        <Input
                                            type={'password'}
                                            bg={'white'}
                                            required
                                            {...signupResolver.register('password')}
                                        />
                                        <FormErrorMessage color={'red.300'}>
                                            {signupResolver.formState.errors.password?.message}
                                        </FormErrorMessage>
                                    </FormControl>

                                    <FormControl isInvalid={signupResolver.formState.errors.repeatPassword}>
                                        <FormLabel
                                            pt={2}
                                            pb={2}
                                            color={'white'}
                                            fontWeight={'bold'}
                                        >
                                            repeat password
                                        </FormLabel>

                                        <Input
                                            type={'password'}
                                            bg={'white'}
                                            required
                                            {...signupResolver.register('repeatPassword')}
                                        />
                                        <FormErrorMessage color={'red.300'}>
                                            {signupResolver.formState.errors.repeatPassword?.message}
                                        </FormErrorMessage>
                                    </FormControl>
                                    <Box
                                        pt={8}
                                    >

                                    </Box>

                                    <Button
                                        type='submit'
                                        colorScheme={'blackAlpha'}
                                        isLoading={signupResolver.formState.isSubmitting}
                                    >
                                        Submit
                                    </Button>

                                </Stack>
                            </DrawerBody>
                        </DrawerContent>
                    </DrawerOverlay>
                </form>
            </Drawer>
        </>
    );
}