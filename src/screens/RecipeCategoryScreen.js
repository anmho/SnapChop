import React from "react";
import CocoIMG from "../../assets/img/img_50.png";
import UnionIMG from "../../assets/img/Union.png";
import SpicyIMG from "../../assets/img/img_51.png";
import PotatoIMG from "../../assets/img/img_59.png";
import BurritoIMG from "../../assets/img/img_52.png";
import FruitIMG from "../../assets/img/img_54.png";
import SoupBowl from "../../assets/img/SoupBowl.png";
import VeggieBowl from "../../assets/img/VeggieBowl.png";
import ProteinBowl from "../../assets/img/ProteinBowl.png";

import { Box, Heading, Image, Text, Center, ScrollView } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
import SnapChopHeading from "../components/SnapChopHeading";

export default function RecipeCategoryScreen({
  navigation,
  recipes = [
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
      name: "Burrito Bowl",
      time: 10,
      image: BurritoIMG,
      image_2: UnionIMG,
      color: "#7ED6DC",
    },
    {
      name: "Protein Bowl",
      time: 10,
      image: ProteinBowl,
      image_2: UnionIMG,
      color: "#7ED6DC",
    },
    {
      name: "Veggie Love",
      time: 10,
      image: VeggieBowl,
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
    {
      name: "Soup Bowl",
      time: 10,
      image: SoupBowl,
      image_2: UnionIMG,
      color: "#7ED6DC",
    },
  ],
  title = "Breakfast Bowls",
}) {
  return (
    <ScrollView
      backgroundColor={"white"}
      contentContainerStyle={{ paddingHorizontal: 20 }}
    >
      <SnapChopHeading navigation={navigation} title={title} />
      {/* <Center mt={3}>
        <Heading fontFamily={"Graphik-Medium"}>Breakfast Bowls</Heading>
      </Center> */}

      {recipes.map((recipe, i) => (
        <RecipeButton
          id={i}
          recipe={recipe}
          name={recipe.name}
          time={recipe.time}
          color={recipe.color}
          image={recipe.image}
          image_2={recipe.image_2}
          navigation={navigation}
        />
      ))}
    </ScrollView>
  );
}
function RecipeButton({
  name,
  time = 5,
  image,
  image_2,
  color,
  navigation,
  id,
  screenName = "RecipeScreen",
}) {
  return (
    <TouchableOpacity
      key={id}
      style={{ marginVertical: 12 }}
      onPress={() => navigation.navigate(screenName)}
    >
      <Box height={100} bg={color} borderRadius={15} shadow={2}>
        <Box
          flexDir={"row"}
          height="100%"
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          {/* Title and Description */}
          <Box
            height="100%"
            p={3}
            justifyContent={"space-between"}
            alignItems={"flex-start"}
          >
            <Box>
              <Text
                fontWeight={"bold"}
                fontFamily={"Graphik-Medium"}
                color="white"
                fontSize={18}
              >
                {name}
              </Text>
            </Box>
            <Box>
              <Text
                fontWeight={"400"}
                fontFamily={"Graphik-Medium"}
                color="white"
                fontSize={"md"}
                padding={1}
              >
                {`${time} - ${time + 5} min`}
              </Text>
            </Box>
          </Box>

          {/* Images */}
          <Box
            flexDir={"row"}
            width={"50%"}
            height={"100%"}
            justifyContent="center"
            alignItems={"center"}
          >
            <Image
              top={1}
              right={1}
              source={image}
              alt="img"
              resizeMode="contain"
            />
            <Image
              position="absolute"
              top={-10}
              right={-10}
              // bg="amber.200"
              source={image_2}
              alt="img"
              size="sm"
            />
          </Box>
        </Box>
      </Box>
    </TouchableOpacity>
  );
}

/* 
Snap Chop Stack
CategoryScreen
RecipeScreen





*/
