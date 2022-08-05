import React from "react";
import CocoIMG from "../../assets/img/img_50.png";
import UnionIMG from "../../assets/img/Union.png";
import SpicyIMG from "../../assets/img/img_51.png";
import PotatoIMG from "../../assets/img/img_59.png";
import BurritoIMG from "../../assets/img/img_52.png";
import FruitIMG from "../../assets/img/img_54.png";

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

export default function BreakfastBowls({
  navigation,
  bowls = [
    {
      name: "Coconut Delight",
      time: 5,
      image: CocoIMG,
      image_2: UnionIMG,
      color: "#7ED6DC",
    },
    {
      name: "Spicy Morning",
      time: 10,
      image: SpicyIMG,
      image_2: UnionIMG,
      color: "#7ED6DC",
    },
    {
      name: "Potato Bowl",
      time: 10,
      image: PotatoIMG,
      image_2: UnionIMG,
      color: "#7ED6DC",
    },
    {
      name: "Protein Bowl",
      time: 10,
      image: BurritoIMG,
      image_2: UnionIMG,
      color: "#7ED6DC",
    },
    {
      name: "Fruit Love",
      time: 10,
      image: FruitIMG,
      image_2: UnionIMG,
      color: "#7ED6DC",
    },
  ],
}) {
  return (
    <ScrollView mt={10}>
      <Center mt={3}>
        <Heading fontFamily={"Graphik-Medium"}>BreakFast Bowls</Heading>
      </Center>
      {bowls.map((bowl) => (
        <Bowls
          name={bowl.name}
          time={bowl.time}
          color={bowl.color}
          image={bowl.image}
          image_2={bowl.image_2}
          navigation={navigation}
        />
      ))}
    </ScrollView>
  );
}
function Bowls({
  name,
  time = 5,
  image,
  image_2,
  color,
  navigation,
  screenName = "PotatoBowl",
}) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(screenName)}>
      <Box ml={5} mr={5} padding={2} pr={0} mt={5} bg={color} borderRadius={15}>
        <VStack>
          <HStack>
            <Text
              fontWeight={"bold"}
              fontFamily={"Graphik-Medium"}
              color="white"
              fontSize={"md"}
              padding={1}
            >
              {name}
            </Text>
            <Image
              position="absolute"
              top={1}
              right={10}
              source={image}
              alt="img"
              size="sm"
            />
            <Image
              position="absolute"
              top={0.1}
              right={1}
              source={image_2}
              alt="img"
              size="sm"
            />
          </HStack>
          <Text
            fontWeight={"bold"}
            fontFamily={"Graphik-Medium"}
            color="white"
            fontSize={"md"}
            padding={1}
          >
            {`${time} - ${time + 5} min`}
          </Text>
        </VStack>
      </Box>
    </TouchableOpacity>
  );
}

/* 
Snap Chop Stack
CategoryScreen
RecipeScreen





*/
