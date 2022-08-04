import React from "react";
import Chef from "../../assets/img/chef.png";
import CookingIcon from "../../assets/img/img_05.png";
import Icon1 from "../../assets/img/img_01.png";
// import { View, Text } from "react-native";
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
      <ScrollView>
        <Heading mb="2" mt="1" ml="7" style={{ fontFamily: "Graphik-Medium" }}>
          Our Own Recipes
        </Heading>
        <Center mb="4">
          <Image source={Chef} alt={"img"} size="xl" />
        </Center>
        <VStack flex="1">
          <HStack space={10} justifyContent="center" flex="1" mb={2}>
            <CategoryButton
              title={"Breakfast Bowls"}
              screenName={"BreakfastBowls"}
              imageSource={Chef}
            />
            <CategoryButton
              title={"Vegan Life"}
              screenName={"Vegan Life"}
              imageSource={CookingIcon}
            />
          </HStack>
          <HStack space={10} justifyContent="center" flex="1" mb={2}>
            <CategoryButton
              title={"Snappy Meal"}
              screenName={"Snappy Meal"}
              imageSource={Icon1}
            />
            <CategoryButton
              title={"Snappy Meal"}
              screenName={"Snappy Meal"}
              imageSource={Icon1}
            />
          </HStack>
          <HStack space={10} justifyContent="center">
            <CategoryButton
              title={"Snappy Meal"}
              screenName={"Snappy Meal"}
              imageSource={Icon1}
            />
            <CategoryButton
              title={"Snappy Meal"}
              screenName={"Snappy Meal"}
              imageSource={Icon1}
            />
          </HStack>
          <HStack space={10} justifyContent="center">
            <CategoryButton
              title={"Snappy Meal"}
              screenName={"Snappy Meal"}
              imageSource={Icon1}
            />
            <CategoryButton
              title={"Snappy Meal"}
              screenName={"Snappy Meal"}
              imageSource={Icon1}
            />
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
