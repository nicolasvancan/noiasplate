import React from "react";
import { Box, Flex, Stack } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";

export default function Login(props: any) {
    return (
        <Flex
            justify={'center'}
            bg={'#000000'}
            minH={'300px'}
        >
            <Stack bg={'blue'}
            >
                <Button
                >
                    Papis
                </Button>
            </Stack>
        </Flex>
    );
}