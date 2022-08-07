import React from "react";
import { View, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import { Box, Text, Image, Center } from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import { ImageBackground } from "react-native";
import PotatoIMG from "../../assets/img/img_30.png";
import Onion from "../../assets/img/img_31.png";
import Avocado from "../../assets/img/img_32.png";
import BellPepper from "../../assets/img/img_33.png";
import MapIng from "../../assets/img/img_29.png";
import PotatoBowlIMG from "../../assets/img/img_20.png";
import Video1 from "../../assets/img/Video1.png";
import Video2 from "../../assets/img/Video2.png";
import Video3 from "../../assets/img/Video3.png";

export default function RecipeScreen({
  recipe = {
    servings: 5,
    calories: 500,
    tags: [],
    name: "The Potato Bowl",
    ingredients: [
      {
        name: "Potatoes",
        amount: 6,
        image: PotatoIMG,
        color: "#7ED6DC",
      },
      {
        name: "Avocadoes",
        amount: 4,
        image: Onion,
        color: "#91E68D",
      },
      {
        name: "Red Onion",
        amount: 1,
        image: Avocado,
        color: "#E7B6FE",
      },
      {
        name: "Bell Peppers",
        amount: 3,
        image: BellPepper,
        color: "#FE8CA3",
      },
    ],
    steps: [
      "Dice onion, bell peppers, and potatoes",
      "Add olive oil to a large pot and saute until the onions are soft ",
      "Then add veg stock, simmer on med heat until liquid evaporates and potatoes are soft",
      "Add eggs to the same pot, with dry seasonings scramble egg and potatoes together ",
      "Then add to bowl, top with avocado slices",
    ],
  },
  category = "Breakfast Bowls",
}) {
  return (
    <>
      {/* <StatBar navigation={navigation} screen={"Recipe"} /> */}
      {/* <SafeAreaView> */}
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        {/* Heading */}
        <Box alignItems={"center"} marginTop={70}>
          <Text>{category}</Text>

          {/* Recipe Image */}
          <Image source={PotatoBowlIMG} alt={"img"} />
          {/* <View
            style={{
              width: "100%",
              aspectRatio: 1 / 1,
              backgroundColor: "red",
              borderRadius: 20,
            }}
          ></View> */}
        </Box>

        {/* Tags */}
        <View style={styles.ingredients}>
          <Tag name={`Servings: ${recipe.servings}`} />
          <Tag name={`Calories: ${recipe.calories}`} />
          {recipe.tags.map((tag) =>
            tag ? <Tag name={tag[0].toUpperCase + tag.slice(1)} /> : null
          )}
        </View>
        {/* Recipe Name */}
        <Box px={2}>
          <Text fontSize={"2xl"} fontWeight={"bold"}>
            {recipe.name.toUpperCase()}
          </Text>
        </Box>

        {/* Ingredients */}
        <ScrollView horizontal={true}>
          {recipe.ingredients.map((ingredient) => (
            <Ingredient
              name={ingredient.name}
              image={ingredient.image}
              amount={ingredient.amount}
              color={ingredient.color}
            />
          ))}
        </ScrollView>

        {/* Find Ingredients/Map Preview */}
        <MapPreview />
        {/* Ingredients */}
        <Box p={5} borderRadius="md" bg="white" shadow={1}>
          <Text
            fontSize={"2xl"}
            fontWeight={"bold"}
            fontFamily={"Graphik-Medium"}
          >
            INSTRUCTIONS
          </Text>
          {recipe.steps.map((step, i) => (
            <Box pb={2}>
              <Text
                fontFamily={"Graphik-Medium"}
                fontSize={"md"}
                fontWeight="bold"
              >{`Step ${i + 1}.`}</Text>
              <Text fontFamily={"Graphik-Light"}>{`${step}`}</Text>
            </Box>
          ))}
        </Box>

        {/* How To Content*/}
        <Box px={2} pt={2}>
          <Text fontSize={"md"} fontWeight={"bold"}>
            {"HOW TO"}
          </Text>
        </Box>
        <ScrollView horizontal={true}>
          <Content image={Video1} />
          <Content image={Video2} />
          <Content image={Video3} />
        </ScrollView>
      </ScrollView>
    </>
  );
}

function Content({ image, videoUrl }) {
  return (
    <Box
      display="flex"
      justifyContent={"center"}
      alignItems={"center"}
      margin={2}
    >
      <Box
        backgroundColor={"gray.500"}
        borderRadius={10}
        width={100}
        aspectRatio={10 / 16}
        shadow={2}
      ></Box>
      <Box marginTop={2}>
        {/* <Text fontSize={"md"}>{`${amount} ${name}`}</Text> */}
      </Box>
    </Box>
  );
}

function Tag({ name }) {
  return (
    <Box
      bg={"white"}
      height={8}
      shadow={2}
      paddingX={2}
      borderRadius={10}
      marginBottom={5}
      justifyContent={"center"}
      alignItems={"center"}
      margin={1}
    >
      <Text fontFamily={"Graphik-Medium"}>{name}</Text>
    </Box>
  );
}

function Ingredient({
  image,
  name = "aspargus",
  amount = 1,
  color = "gray.500",
}) {
  return (
    <Box
      display="flex"
      justifyContent={"center"}
      alignItems={"center"}
      margin={1}
    >
      <Box
        backgroundColor={color}
        borderRadius={10}
        width={100}
        aspectRatio={1 / 1}
        shadow={2}
      >
        <Center mt={8}>
          <Image source={image} alt={"img"} />
        </Center>
      </Box>
      <Box marginTop={2}>
        <Text fontFamily={"Graphik-Medium"} fontSize={"md"}>
          {`${amount} ${name}`}{" "}
        </Text>
      </Box>
    </Box>
  );
}

function MapPreview() {
  return (
    <Box
      // width={"100%"}
      px={1}
      py={5}
      // aspectRatio={4 / 2}
      // bg={"green.500"}
      borderRadius={10}
    >
      <Text fontSize={"xl"} fontWeight={"bold"} fontFamily={"Graphik-Medium"}>
        Find Ingredients
      </Text>
      <TouchableOpacity>
        <Center shadow={2}>
          <Image source={MapIng} width={"100%"} borderRadius={10} alt={"img"} />
        </Center>
      </TouchableOpacity>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    flex: 1,
    justifyContent: "center",
    padding: 20,
    alignItems: "center",
  },
  ingredients: {
    paddingTop: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },

  card: {},
});
