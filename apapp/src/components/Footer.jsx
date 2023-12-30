import {
  Flex,
  HStack,
  Stack,
  Table,
  Text,
  Grid,
  Image,
  Divider,
} from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

import React from "react";

function Footer() {
  return (
    <Stack pb="20" bg="#0f172a" color="white">
      <Grid templateColumns="repeat(6, 1fr)" padding="9" gap="10">
        <Stack>
          <Text>सजीव सत्र</Text>
          <Text>श्रीमद् भगवद् गीता</Text>
          <Text>संत सरिता</Text>
          <Text>वेदांत संहिता</Text>
          <Text>बोध प्रत्यूषा</Text>
        </Stack>

        <Stack>
          <Text>बोध साहित्य</Text>
          <Text>वीडियो श्रृंखलाएँ</Text>
          <Text>पुस्तकें</Text>
          <Text>लेख</Text>
          <Text>ए.पी. सर्किल</Text>
        </Stack>

        <Stack>
          <Text>अधिक जाने</Text>
          <Text>आचार्य प्रशांत के बारे में</Text>
          <Text>उनको आमंत्रित करें</Text>
          <Text>उनके संग साक्षात्कार</Text>
          <Text>घर घर उपनिषद</Text>
          <Text>मीडिया व प्रेस प्रकाशनी</Text>
        </Stack>

        <Stack>
          <Text>सोशल मीडिया</Text>
          <Flex ml="8" gap={"2"}>
            <FaYoutube />
            <FaTwitter />
            <FaInstagram />
            <FaFacebook />
          </Flex>
        </Stack>

        <Stack>
          <Text>डाउनलोड ऐप</Text>
          <Flex gap="3" ml="5">
            <Image
              borderRadius="full"
              boxSize="24px"
              src="https://acharyaprashant.org/images/ic_favicon.png"
              alt="Dan Abramov"
            />{" "}
            आचार्य प्रशांत
          </Flex>
        </Stack>

        <Stack>
          <Text>सम्पर्क करें</Text>
          <Text>support@advait.org.in</Text>
          <Flex gap={"2"}>
            <FaWhatsapp />
            <Text mt="-6px">+91 9650585100</Text>
          </Flex>
          <Flex gap={"2"}>
            <FaPhoneAlt />
            {/* <FaWhatsapp mt="10" /> */}
            <Text mt="-6px">+91 9650585100</Text>
          </Flex>
        </Stack>
      </Grid>

      <Divider />

      <Flex mt="5" justifyContent={"center"} gap="20">
        <Text>कॉपीराइट © 2022 प्रशांतअद्वैत फाउंडेशन</Text>

        <Flex>
          <Text>नियम एवं शर्तें</Text>
          <Divider
            orientation="vertical"
            mx="2"
            borderColor="white"
            borderWidth="1px"
            height="12px"
          />
          <Text>गोपनीयता नीति</Text>
          <Divider
            orientation="vertical"
            mx="2"
            borderColor="white"
            borderWidth="1px"
            height="12px"
          />
          <Text>अंडरटेकिंग</Text>
        </Flex>
      </Flex>
    </Stack>
  );
}

export default Footer;
