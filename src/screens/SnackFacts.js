import React from "react";
import {
  Center,
  Heading,
  Box,
  View,
  Text,
  Image,
  HStack,
  VStack,
} from "native-base";
import OnionIMG from "../../assets/img/img_60.png";
import Icon from "../../assets/img/img_61.png";
export default function SnackFacts() {
  return (
    <View bg={"white"} height={"100%"} p={5}>
      <Center>
        <Heading>Snack Facts</Heading>
        <Image source={OnionIMG} alt="img" size="2xl" mt={5} />
        <Text
          mt={3}
          bold
          fontFamily={"Graphik-Medium"}
          fontSize="3xl"
          fontStyle={"upperCase"}
        >
          RED ONION
        </Text>
        <Text
          bold
          fontFamily={"Graphik-Medium"}
          fontSize="xl"
          fontStyle={"upperCase"}
        >
          45 calories
        </Text>
        <Box>
          <HStack justifyContent={"center"} alignItems="center">
            <Image source={Icon} alt="image" size={"5"} mr={2} />
            <Text
              fontFamily={"Graphik-Light"}
              fontSize={18}
              fontStyle={"upperCase"}
            >
              Red onions are more effective natural blood thinners than white
              onions
            </Text>
          </HStack>
        </Box>

        <Box mt={5}>
          <HStack justifyContent={"center"} alignItems="center">
            <Image source={Icon} alt="image" size={"5"} mr={2} />
            <Text
              fontFamily={"Graphik-Light"}
              fontSize={18}
              fontStyle={"upperCase"}
            >
              Red onions contain at least 25 different anthocyanins.
            </Text>
          </HStack>
        </Box>
      </Center>
    </View>
  );
}
