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
import SnapChopHeading from "../components/SnapChopHeading";
import { ScrollView } from "native-base";
export default function SnackFactsScreen({
  navigation,
  ingredient = { name: "Red Onion" },
  route,
}) {
  return (
    <ScrollView bg="white">
      <SnapChopHeading navigation={navigation} title={"Snack Facts"} />
      <View bg={"white"} height={"100%"} px={5}>
        <Center>
          <Image source={OnionIMG} alt="img" size="2xl" mt={5} />
          <Text
            mt={3}
            bold
            fontFamily={"Graphik-Medium"}
            fontSize="3xl"
            fontStyle={"upperCase"}
          >
            {ingredient.name.toUpperCase()}
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
    </ScrollView>
  );
}
