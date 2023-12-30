import {
  Divider,
  Grid,
  GridItem,
  HStack,
  Text,
  Stack,
  Box,
  Flex,
  SimpleGrid
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

function Videoseries() {
  const [isLoading, setIsloding] = useState(true);

  const [seriesData, setSeriesdata] = useState([]);
  const [isError, setIsError] = useState(false);

  const getData = async () => {
    let responce = await axios
      .get(
        `https://api.acharyaprashant.org/v2/legacy/courses/series/optuser/course-series-eeb9d3`
      )
      .then((res) => {
        setSeriesdata(res.data.courses);
        setIsloding(false);
        //console.log(res.data.courses);
        return res.data;
      })
      .catch((err) => {
        setIsError(true);
        setIsloding(false);

        console.log("error", err);
      });
  };

  useEffect(() => {
    let data = getData();
  }, []);

  return (
    <div mt="9">
      {isLoading ? (
        <Text fontSize="6xl">Loading.....</Text>
      ) : isError ? (
        <Text fontSize="6xl">Somethig went wrong </Text>
      ) : (
        <>
          <Stack >
            <Text mt="6" textAlign="left" pl="9" fontSize="2xl">
              वीडियो श्रृंखलाएँ ({seriesData.length})
            </Text>
            <Divider />
            <SimpleGrid columns={{sm:1,md:2,xl:3}} p="4" pt="4"  gap={7}>
              {seriesData.map((el, index) => (
                <GridItem p="5"  key={el.id} h="100%" w="100%" bg="white" _hover={{ bg: 'gray.100' }} rounded="xl" >
                  <Box ml="0" width="15%" bg="#94a3b8" color="white">
                    भाग-{index + 1}
                  </Box>
                  <Text textAlign="left" fontSize="xl">
                    {el.title}
                  </Text>
                  <Text mt="1" textAlign="left" fontSize="l">
                    {el.subtitle}
                  </Text>
                  <Text mt="1" textAlign="left" fontSize="l">
                    {Math.floor(el.courseHours)} घंटे{" "}
                    {Math.round(
                      (el.courseHours - Math.floor(el.courseHours)) * 60
                    )}{" "}
                    मिनट
                  </Text>
                  <Text mt="1" textAlign="left" fontSize="l">
                    सहयोग राशि: ₹{el.amount} <s>₹{el.originalAmount}</s>
                  </Text>

                  <Box mt="1" ml="0" width="15%" bg="#c7e6f8" color="black">
                    {el.language=="hindi"?"हिंदी":"English"}
                  </Box>

                  <HStack mt="2" color="#ea5a0f">
                    <Text>कार्ट मे जोडे</Text>
                    <Divider
                      orientation="vertical"
                      mx="2"
                      borderColor="black"
                      borderWidth="1px"
                      height="12px"
                    />
                    <Text>एनरोल करे</Text>
                  </HStack>
                  <Divider mt="5" borderColor="black" borderWidth="1px" />
                </GridItem>
              ))}
            </SimpleGrid>
          </Stack>
        </>
      )}
    </div>
  );
}

export default Videoseries;
