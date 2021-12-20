import React from 'react';
import {VStack,Flex,Heading,Spacer} from "@chakra-ui/layout";
import {IconButton} from "@chakra-ui/button";
import {useColorMode} from "@chakra-ui/color-mode";
import Header from "./components/Header";
import Social from './components/Social';
import Profile from './components/Profile';
import {
  FaSun,
  FaMoon,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";



const App = () => {


const {colorMode,toggleColorMode} = useColorMode();

const isDark = colorMode==="dark";

  return (
    
      <VStack p="5">
        <Flex w="100%">
          <Heading ml="8" size="md" fontWeight="semibold" color="cyan.400">Mani Kandan A
          </Heading>
          <Spacer/>
          <IconButton 
          icon={<FaLinkedin/>} 
          isRound="true" 
          onClick={()=>window.open("https://www.linkedin.com/in/mani-kandan-a-ba792020b/")
          }
          />
            <IconButton 
            ml={2}
          icon={<FaInstagram/>} 
          isRound="true" 
          onClick={()=>window.open("https://www.instagram.com/_.mani_wilder._/")
          }
          />
            <IconButton 
            ml={2}
          icon={<FaGithub/>} 
          isRound="true" 
          onClick={()=>window.open("https://github.com/maniwilder")
          }
          />
            <IconButton 
            ml={8}
          icon={isDark ? <FaSun/> : <FaMoon/>} 
          isRound="true" 
          onClick={toggleColorMode}
          />
          
        </Flex>
        <Header />
        <Social />
        <Profile />
      </VStack>
    
  )
}

export default App;
