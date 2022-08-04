import React from "react";
// import { View, StyleSheet, Text } from "react-native";
import { StyleSheet, TouchableOpacity } from "react-native";
import {
  View,
  Text,
  Box,
  Heading,
  Center,
  HStack,
  VStack,
  ScrollView,
  Image,
} from "native-base";
import Chef from "../../assets/img/chef.png";
import MainImg from "../../assets/img/img_4.png";
import FactsImg from "../../assets/img/img_02.png";
import RecipesImg from "../../assets/img/img_05.png";
import { ImageBackground } from "react-native";
import Chopping from "../../assets/img/chopping.png";
import StirFry from "../../assets/img/StirFry.png";

export default function SnapChopScreen({ navigation }) {
  return (
    <ScrollView
      contentContainerStyle={{ padding: 20, backgroundColor: "white" }}
    >
      <ScreenButton
        navigation={navigation}
        screenName={"TutorialsStack"}
        title={"Cookin' with Chefs"}
        imageSource={Chopping}
      />
      <ScreenButton
        navigation={navigation}
        screenName={"Recipes"}
        title={"Recipes"}
        imageSource={StirFry}
      />
      <ScreenButton
        navigation={navigation}
        screenName={"SnackFacts"}
        title={"Snack Facts"}
      />
    </ScrollView>
  );
}

function ScreenButton({ navigation, screenName, title, imageSource }) {
  return (
    <>
      <Text fontSize={"2xl"} fontWeight="semibold">
        {title}
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate(screenName)}>
        {imageSource ? (
          <Box shadow={2}>
            <Image
              my={2}
              width={"100%"}
              height={40}
              bg={"white"}
              borderRadius={12}
              shadow={2}
              source={imageSource}
            />
          </Box>
        ) : (
          <Box
            my={2}
            width={"100%"}
            height={40}
            bg={"lavender"}
            borderRadius={12}
            shadow={2}
          />
        )}

        {/* <ImageBackground
          source={imageSource}
          resizeMode="cover"
          // borderRadius={12}
          style={{
            height: 160,
            width: "100%",
            borderRadius: 12,
          }}
        ></ImageBackground> */}
        {/* </Box> */}
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({});
