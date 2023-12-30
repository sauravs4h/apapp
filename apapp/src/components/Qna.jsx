import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Spacer,
  HStack,
  Image,
  Text,
  Select,
  Container,
  Button,
  Input,
  Stack,
  Center,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Divider,
} from "@chakra-ui/react";
import {
  PhoneIcon,
  AddIcon,
  WarningIcon,
  HamburgerIcon,
  SearchIcon,
} from "@chakra-ui/icons";

import axios from "axios";

function Qna() {
  const [isLoading, setIsloding] = useState(true);

  const [qnaData, setQnadata] = useState([]);
  const [isError, setIsError] = useState(false);

  const getData = async () => {
    let responce = await axios
      .get(
        `https://api.acharyaprashant.org/v2/legacy/courses/faqs?language=english`
      )
      .then((res) => {
        setQnadata(res.data);
        setIsloding(false);
        console.log(res.data);
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

  console.log("...........", qnaData);

  return (
    <Flex bg="#fbfcfd" p="20" gap="20">
      <Stack textAlign="left" w="26%">
        <Text fontSize="xl">अक्सर पूछे जाने वाले प्रश्न</Text>
        <Text fontSize="l">
          आप जिस उत्तर की तलाश कर रहे हैं वह नहीं मिल रहा है? कृपया हमारी सपोर्ट
          टीम से संपर्क करें।
        </Text>
      </Stack>

      <Stack w="70%">
        <Accordion
          w="100%"
          allowMultiple
          border="0px"
          boxShadow="none"
        >
          {qnaData.map((el,index) => (
            <>
              <AccordionItem key={index} border="0px">
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      {el.question}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel textAlign={"justify"} pb={4}>
                  {/* {el.answer} */}
                  {el.answer.replace(/<\/?p>/g, '')}
                </AccordionPanel>
              </AccordionItem>

              <Divider mt="4" />
            </>
          ))}
        </Accordion>
      </Stack>
    </Flex>
  );
}

export default Qna;
