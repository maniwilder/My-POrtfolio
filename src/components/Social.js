import React from 'react';
import {Icon} from "@chakra-ui/icon";
import {HStack} from "@chakra-ui/layout";
import {FaFacebook, FaInstagram, FaPinterest, FaTwitter} from "react-icons/fa";

const Social = () => {
    return (
       <HStack spacing={24}>
            <Icon as={FaFacebook} boxSize={50} />
            <Icon as={FaPinterest} boxSize={50} />
            <Icon as={FaInstagram} boxSize={50} />
            <Icon as={FaTwitter} boxSize={50} />
       </HStack>
    )
}

export default Social;
