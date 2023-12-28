import React, { useEffect, useState } from 'react'
import {Box, Flex, Spacer,HStack,Image,Text,Select,Container,Button,Input,Stack, Center } from '@chakra-ui/react'
import { PhoneIcon, AddIcon, WarningIcon,HamburgerIcon,SearchIcon } from '@chakra-ui/icons'

import axios from "axios"

const apiCall=async()=>{

    let res=await axios.get(`https://api.acharyaprashant.org/v2/legacy/courses/series/optuser/course-series-eeb9d3`);

    return res

}


function Hero() {

    const [isLoading,setIsloding]=useState(true);

    const [apiData,setApidata]=useState({})

    useEffect(()=>{

        let data= apiCall();
        

    },[])

  return (
    <div>
        <Text mt="6" textAlign='left' pl="9"  fontSize='2xl'>santwani</Text>
        <Flex mt="6" pl="9" gap="2" pr="9">
            <Image src='https://bit.ly/dan-abramov' w="480px" h="300px" alt='Dan Abramov' />

            <Stack>
                <Text ml="3" textAlign='left'  fontSize='xl'>second santwani</Text>
                <Container textAlign={"justify"} maxW='800px' fontSize="md">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</Container>

            </Stack>
            

        </Flex>

    </div>
  )
}

export default Hero