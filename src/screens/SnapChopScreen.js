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
import MainImg from "../../assets/img/img_04.png";
import FactsImg from "../../assets/img/img_02.png";
import RecipesImg from "../../assets/img/img_05.png";
import { ImageBackground } from "react-native";
import Chopping from "../../assets/img/chopping.png";
import StirFry from "../../assets/img/StirFry.png";
import SnackFactsBanner from "../../assets/img/SnackFactsBanner.png";

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
        screenName={"RecipesStack"}
        title={"Recipes"}
        imageSource={StirFry}
      />
      <ScreenButton
        navigation={navigation}
        screenName={"SnackFactsStack"}
        title={"Snack Facts"}
        imageSource={SnackFactsBanner}
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
              alt="img"
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
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({});
