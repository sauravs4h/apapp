import React from 'react';
import {Box, Flex, Spacer,HStack,Image,Text,Select,Container,Button,Input } from '@chakra-ui/react'
import { PhoneIcon, AddIcon, WarningIcon,HamburgerIcon,SearchIcon } from '@chakra-ui/icons'

function Navbar() {
  return (
    <div>
        <Flex h="47px" pl="7" pr="5" bg="#d24115" color="white">
        
            <HStack spacing='24px'>
                <Image
                borderRadius='full'
                boxSize='31px'
                src='https://acharyaprashant.org/images/ic_favicon.png'
                alt='Dan Abramov'
                />
                <Text fontSize='15px'>Home</Text>
                <Text fontSize='15px'>Live Session</Text>
                <Text fontSize='15px'>Video Series</Text>
                <Text fontSize='15px'>AP Books</Text>
                <Text fontSize='15px'>AP Articles</Text>
                <Text fontSize='15px'>Invite</Text>
                <Text fontSize='15px'>IN Media</Text>
                <Text fontSize='15px'>Careers</Text>
                <Text fontSize='15px'>Donate</Text>

            </HStack>
            <Spacer />
            <HStack>
                <Select  size='sm'>
                    <option value="HI" style={{ color: 'black' }}>Hindi</option>
                    <option value="ENG" style={{ color: 'black' }}>English</option>
                </Select>
                <PhoneIcon />
                <HamburgerIcon/>
            </HStack>
        
        </Flex>

        {/* mid- Navbar */}

        <Flex h="60px" gap="5"  bg="#1e293b" color="white" alignItems="center" justifyContent="center">
            <Text fontSize='xl'>Get access to all 350+ video series at once!</Text>

            <Button colorScheme='white' variant='outline' h="6">
                Click Here
            </Button>
        </Flex>

    {/* search baar */}
        <Flex h="47px" pl="7" pr="10" bg="white" color="black">
        
            <HStack spacing='24px'>
                <Image
                
                w="100px"
                src='https://acharyaprashant.org/images/ic_videoseries.png'
                alt='Dan Abramov'
                />
                <Select  size='md'>
                        <option value="All" style={{ color: 'black' }}>All</option>                        
                </Select>
                <Flex >
                    
                    <Input width="400px" placeholder='Search for video series' />
                    <Button bg="#fed7aa"><SearchIcon></SearchIcon></Button>
                </Flex>

            </HStack>
            <Spacer />
            <HStack>
                <Button h="7" color="white" bg="#d24115">Login</Button>
            </HStack>
        
        </Flex>
    </div>
    

  )
}

export default Navbar