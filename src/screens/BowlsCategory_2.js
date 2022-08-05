import React from "react";
import Chef from "../../assets/img/chef.png";
import CookingIcon from "../../assets/img/img_05.png";
import HeadICon from "../../assets/img/img_04.png";
import Icon1 from "../../assets/img/img_01.png";
import SnappyMealIMG from "../../assets/img/img_12.png";
import CStudentIMG from "../../assets/img/img_08.png";
import BFBowlIMG from "../../assets/img/img_10.png";
import BreakfastIMG from "../../assets/img/img_09.png";

import {
  Box,
  Heading,
  Image,
  View,
  Text,
  Center,
  HStack,
  VStack,
  ScrollView,
} from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function BreakfastBowls({ navigation }) {
  return (
    <View>
      <Heading mb="2" mt="1" ml="7" style={{ fontFamily: "Graphik-Medium" }}>
        Our Own Recipes
      </Heading>
      <Center mb="4">
        <Box bg={"yellow.400"} borderRadius={15} width={"80%"} height={40}>
          <Center>
            <Image source={BFBowlIMG} alt={"img"} size="xl" />
            <Text
              fontSize="20"
              fontWeight={"bold"}
              fontFamily={"Graphik-Medium"}
            >
              Breakfast Bowls
            </Text>
          </Center>
        </Box>
      </Center>

      <ScrollView>
        <VStack flex="1">
          <HStack space={10} justifyContent="center" flex="1" mb={2}>
            <TouchableOpacity onPress={() => navigation.navigate("PotatoBowl")}>
              <Box
                bg={"white"}
                width={"110%"}
                borderRadius={12}
                height={"90%"}
                mb={5}
              >
                <Text
                  fontSize="md"
                  fontWeight={"bold"}
                  fontFamily={"Graphik-Medium"}
                  ml={3}
                >
                  Potato Bowl
                </Text>
                <Center>
                  <Image source={Chef} alt={"img"} size="xl" />
                </Center>
              </Box>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Vegan Life")}>
              <Box
                bg={"white"}
                width={"110%"}
                borderRadius={15}
                height={"90%"}
                mb={5}
              >
                <Text
                  fontSize="md"
                  fontWeight={"bold"}
                  fontFamily={"Graphik-Medium"}
                  ml={3}
                >
                  Spicy Morning
                </Text>
                <Center>
                  <Image source={CookingIcon} alt={"img"} size="xl" />
                </Center>
              </Box>
            </TouchableOpacity>
          </HStack>
          <HStack space={10} justifyContent="center" flex="1" mb={2}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Snappy Meal")}
            >
              <Box
                bg={"white"}
                width={"110%"}
                borderRadius={15}
                height={"90%"}
                mb={5}
              >
                <Text
                  fontSize="md"
                  fontWeight={"bold"}
                  fontFamily={"Graphik-Medium"}
                  ml={3}
                >
                  Burrito Bowl
                </Text>
                <Center>
                  <Image source={SnappyMealIMG} alt={"img"} size="xl" />
                </Center>
              </Box>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("BreakfastBowls")}
            >
              <Box
                bg={"white"}
                width={"110%"}
                borderRadius={15}
                height={"90%"}
                mb={5}
              >
                <Text
                  fontSize="md"
                  fontWeight={"bold"}
                  fontFamily={"Graphik-Medium"}
                  ml={3}
                >
                  Protein Bowl
                </Text>
                <Center>
                  <Image source={BreakfastIMG} alt={"img"} size="xl" />
                </Center>
              </Box>
            </TouchableOpacity>
          </HStack>
          <HStack space={10} justifyContent="center">
            <TouchableOpacity onPress={console.log("click")}>
              <Box
                bg={"white"}
                width={"110%"}
                borderRadius={15}
                height={"90%"}
                mb={5}
              >
                <Text
                  fontSize="md"
                  fontWeight={"bold"}
                  fontFamily={"Graphik-Medium"}
                  ml={3}
                >
                  Fruit Love
                </Text>
                <Center>
                  <Image source={CStudentIMG} alt={"img"} size="xl" />
                </Center>
              </Box>
            </TouchableOpacity>
            <TouchableOpacity onPress={console.log("click")}>
              <Box
                bg={"white"}
                width={"110%"}
                borderRadius={15}
                height={"90%"}
                mb={5}
              >
                <Text
                  fontSize="md"
                  fontWeight={"bold"}
                  fontFamily={"Graphik-Medium"}
                  ml={3}
                >
                  Soup Bowl
                </Text>
                <Center>
                  <Image source={Icon1} alt={"img"} size="xl" />
                </Center>
              </Box>
            </TouchableOpacity>
          </HStack>
          <HStack space={10} justifyContent="center">
            <TouchableOpacity onPress={console.log("click")}>
              <Box
                bg={"white"}
                width={"110%"}
                borderRadius={15}
                height={"90%"}
                mb={5}
              >
                <Text
                  fontSize="md"
                  fontWeight={"bold"}
                  fontFamily={"Graphik-Medium"}
                  ml={3}
                >
                  For Students
                </Text>
                <Image source={Icon1} alt={"img"} size="xl" />
              </Box>
            </TouchableOpacity>
            <TouchableOpacity onPress={console.log("click")}>
              <Box
                bg={"white"}
                width={"110%"}
                borderRadius={15}
                height={"90%"}
                mb={5}
              >
                <Text
                  fontSize="md"
                  fontWeight={"bold"}
                  fontFamily={"Graphik-Medium"}
                  ml={3}
                >
                  Dips
                </Text>
                <Image source={Icon1} alt={"img"} size="xl" />
              </Box>
            </TouchableOpacity>
          </HStack>
        </VStack>
      </ScrollView>
    </View>
  );
}
