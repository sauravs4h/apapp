import React, { useEffect, useState } from 'react'
import {Box, Flex, Spacer,HStack,Image,Text,Select,Container,Button,Input,Stack, Center } from '@chakra-ui/react'
import { PhoneIcon, AddIcon, WarningIcon,HamburgerIcon,SearchIcon } from '@chakra-ui/icons'

import axios from "axios"




function Hero() {

    const [isLoading,setIsloding]=useState(true);

    const [heroData,setHerodata]=useState({});
    const [isError,setIsError]=useState(false);

    const getData=async()=>{

        let responce=await axios.get(`https://api.acharyaprashant.org/v2/legacy/courses/series/optuser/course-series-eeb9d3`)
                .then((res)=>{
                    setHerodata(res.data.details);
                    setIsloding(false)
                    //console.log(res.data.details);
                    return res.data
                })
                .catch((err)=>{
                    setIsError(true);
                    setIsloding(false);

                    console.log("error",err);

                })
    
        
    
    }

    useEffect(()=>{

        let data= getData();
        

    },[])

  return (
    <div>
        {isLoading? <Text fontSize='6xl'>Loading.....</Text>: isError? <Text fontSize='6xl'>Somethig went wrong </Text>:
        
        <>
        <Text mt="6" textAlign='left' pl="9"  fontSize='2xl'>{heroData.title}</Text>
        <Flex mt="6" pl="9" gap="2" pr="9">
            <Image src="https://cimg.acharyaprashant.org/images/img-4337ee73-d8a3-4c8b-951b-d09a5a6468d3/20/image.jpg" w="480px" h="300px" alt='Dan Abramov' />

            <Stack>
                <Text ml="3" textAlign='left'  fontSize='xl'>{heroData.subtitle}</Text>
                <Container textAlign={"justify"} maxW='800px' fontSize="md">{heroData.description}</Container>

            </Stack>
            

        </Flex>

        <Text mt="6" pl="9" textAlign='left'  fontSize='x' >Share this series:</Text>
        <HStack pl="9" mt="3">
        <Image
                borderRadius='full'
                boxSize='31px'
                src='https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png'
                alt='facebook'
                />
                <Image
                borderRadius='full'
                boxSize='31px'
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png'
                alt='Dan Abramov'
                /><Image
                borderRadius='full'
                boxSize='31px'
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png'
                alt='Dan Abramov'
                />
        </HStack>
        </>

        }

    </div>
  )
}

export default Hero