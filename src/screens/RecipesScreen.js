import React from "react";
import Chef from "../../assets/img/chef.png";
import CookingIcon from "../../assets/img/img_05.png";
import HeadICon from "../../assets/img/img_04.png";
import Icon1 from "../../assets/img/img_01.png";
import SnappyMealIMG from "../../assets/img/img_12.png";
import CStudentIMG from "../../assets/img/img_08.png";
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

export default function RecipesScreen({ navigation }) {
  return (
    <View>
      {/* <Heading mb="2" mt="1" ml="7" style={{ fontFamily: "Graphik-Medium" }}>
        Our Own Recipes
      </Heading> */}
      {/* <Center mb="4">
        <Image source={HeadICon} alt={"img"} size="xl" />
      </Center> */}
      <ScrollView>
        {/* <Heading mb="2" mt="1" ml="7" style={{ fontFamily: "Graphik-Medium" }}>
          Our Own Recipes
        </Heading> */}
        {/* <Center mb="4">
          <Image source={Chef} alt={"img"} size="xl" />
        </Center> */}
        <VStack flex="1">
          <HStack space={10} justifyContent="center" flex="1" mb={2}>
            <TouchableOpacity onPress={() => navigation.navigate("BakedGoods")}>
              <Box
                bg={"#7ED6DC"}
                width={"110%"}
                borderRadius={12}
                height={"90%"}
                mb={5}
                shadow={2}
              >
                <Text
                  fontSize="md"
                  fontWeight={"bold"}
                  fontFamily={"Graphik-Medium"}
                  ml={3}
                  color={"#FFFFFF"}
                >
                  Baked Goods
                </Text>
                <Center>
                  <Image source={Chef} alt={"img"} size="xl" />
                </Center>
              </Box>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Vegan Life")}>
              <Box
                bg={"#91E68D"}
                width={"110%"}
                borderRadius={15}
                height={"90%"}
                mb={5}
                shadow={2}
              >
                <Text
                  fontSize="md"
                  fontWeight={"bold"}
                  fontFamily={"Graphik-Medium"}
                  ml={3}
                  color={"#FFFFFF"}
                >
                  Vegan Life
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
                bg={"#FE8CA3"}
                width={"110%"}
                borderRadius={15}
                height={"90%"}
                mb={5}
                shadow={2}
              >
                <Text
                  fontSize="md"
                  fontWeight={"bold"}
                  fontFamily={"Graphik-Medium"}
                  ml={3}
                  color={"#FFFFFF"}
                >
                  Snappy Meals
                </Text>
                <Center>
                  <Image source={SnappyMealIMG} alt={"img"} size="xl" />
                </Center>
              </Box>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("RecipeScreen")}
            >
              <Box
                bg={"#E7B6FE"}
                width={"110%"}
                borderRadius={15}
                height={"90%"}
                mb={5}
                shadow={2}
              >
                <Text
                  fontSize="md"
                  fontWeight={"bold"}
                  fontFamily={"Graphik-Medium"}
                  ml={3}
                  color={"#FFFFFF"}
                >
                  Breakfast Bowls
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
                bg={"#91E68D"}
                width={"110%"}
                borderRadius={15}
                height={"90%"}
                mb={5}
                shadow={2}
              >
                <Text
                  fontSize="md"
                  fontWeight={"bold"}
                  fontFamily={"Graphik-Medium"}
                  ml={3}
                  color={"#FFFFFF"}
                >
                  For Students
                </Text>
                <Center>
                  <Image source={CStudentIMG} alt={"img"} size="xl" />
                </Center>
              </Box>
            </TouchableOpacity>
            <TouchableOpacity onPress={console.log("click")}>
              <Box
                bg={"#FE8CA3"}
                width={"110%"}
                borderRadius={15}
                height={"90%"}
                mb={5}
                shadow={2}
              >
                <Text
                  fontSize="md"
                  fontWeight={"bold"}
                  fontFamily={"Graphik-Medium"}
                  ml={3}
                  color={"#FFFFFF"}
                >
                  Salsa Dips
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
                shadow={2}
              >
                <Text
                  fontSize="md"
                  fontWeight={"bold"}
                  fontFamily={"Graphik-Medium"}
                  ml={3}
                  color={"#FFFFFF"}
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
                  color={"#FFFFFF"}
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

function CategoryButton({ navigation, imageSource, title, screenName }) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(screenName)}>
      <Box bg={"white"} width={"110%"} borderRadius={12} height={"90%"} mb={5}>
        <Text
          fontSize="md"
          fontWeight={"bold"}
          fontFamily={"Graphik-Medium"}
          ml={3}
        >
          {title}
        </Text>
        <Center>
          <Image source={imageSource} alt={"img"} size="xl" />
        </Center>
      </Box>
    </TouchableOpacity>
  );
}
