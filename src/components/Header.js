import React from 'react';
import {Button} from "@chakra-ui/button";
import {useColorMode} from "@chakra-ui/color-mode";
import {Image} from "@chakra-ui/image";
import {Circle,Stack,Flex,Box,Text} from "@chakra-ui/layout";
import mypic from "../components/portf.jpg";
import{useMediaQuery} from "@chakra-ui/media-query";

const Header = () => {

const {colorMode} = useColorMode()
const isDark = colorMode === "dark";


const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");


    return (
        <Stack>
          {isNotSmallerScreen && (       
            <Circle 
            position="absolute"
            bg="blue.100"
            opacity="0.1"
            w="300px"
            h="300px"
            alignSelf="flex-end"
            />
          )}

            <Flex direction={isNotSmallerScreen ? "row" : "coloumn"}
            spacing="200px"
            p={isNotSmallerScreen ? "32" : 0}
            alignSelf= "flex-start"
            >
                <Box mt={isNotSmallerScreen?0:16} alignSelf="flex-start">
                    <Text fontSize="5xl" fontWeight= "semibold">Hi.., i am</Text>
                    <Text fontSize="7xl"
                          fontWeight="bold"
                          bgGradient="linear(to-r,cyan.400,blue.500,purple.600)"
                          bgClip="text"
                          >
                    Manikandan
                    </Text>
                    <Text color={isDark ? "gray.200" : "gray.500"}>
                        Full stack developer at Outster consultancy services, Music lover, Movie Buff, Series freak.
                    </Text>
                    <Button mt={8} colorScheme="blue">Hire Me</Button>
                </Box>
                <Image 
                    alignSelf="center"
                    borderRadius="full"
                    backgroundColor="transparent"
                    boxShadow= "lg"
                    boxSize="300px"
                    src={mypic}
                    zIndex={1}
                    mt={isNotSmallerScreen ? "0" : "12"}
                    mb={isNotSmallerScreen ? "0" : "12"}
                />
            </Flex>
        </Stack>
    );

};

export default Header
