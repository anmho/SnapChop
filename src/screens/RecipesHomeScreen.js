import React from "react";
import Chef from "../../assets/img/chef.png";
import CookingIcon from "../../assets/img/img_05.png";
import HeadICon from "../../assets/img/img_04.png";
import Icon1 from "../../assets/img/img_01.png";
import SnappyMealIMG from "../../assets/img/img_12.png";
import CStudentIMG from "../../assets/img/img_08.png";
import BreakfastIMG from "../../assets/img/img_09.png";
import TacosLove from "../../assets/img/TacosCard.png";
import SalsaDips from "../../assets/img/SalsaDipsCard.png";
import ForCollegeStudents from "../../assets/img/ForCollegeStudentsCard.png";
import BreakfastBowls from "../../assets/img/BreakfastBowlsCard.png";
import SnappyMeals from "../../assets/img/SnappyMealsBackground.png";
import VeganLife from "../../assets/img/VeganLifeCard.png";
import BakedGoods from "../../assets/img/BakedGoodsCard.png";
import ChilisCard from "../../assets/img/ChilisCard.png";

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

export default function RecipesHomeScreen({ navigation }) {
  return (
    <ScrollView
      bg="white"
      // contentContainerStyle={}
    >
      {/* Heading */}
      {/* <View justifyContent={"center"} alignItems={"center"}>
        <Text fontsiz>Hello</Text>
      </View> */}

      {/* Category Buttons */}
      <CategoryButtons navigation={navigation} />
    </ScrollView>
  );
}

function CategoryButtons({ navigation }) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        paddingLeft: 15,
        paddingRight: 15,
      }}
    >
      <Box width={"50%"}>
        <CategoryButton
          navigation={navigation}
          imageSource={TacosLove}
          alt={"Tacos Love"}
          title={"Tacos Love"}
        />

        <CategoryButton
          navigation={navigation}
          imageSource={SnappyMeals}
          alt={"Salsa Dips"}
          title={"Salsa Dips"}
        />
        <CategoryButton
          navigation={navigation}
          imageSource={ForCollegeStudents}
          alt={"For College Students"}
          title={"For College Students"}
        />
        <CategoryButton
          navigation={navigation}
          imageSource={BakedGoods}
          alt={"Baked Goods"}
          title={"Baked Goods"}
        />
      </Box>
      <Box pt={50} width={"50%"}>
        <CategoryButton
          navigation={navigation}
          imageSource={VeganLife}
          alt={"Vegan Life"}
          title={"Vegan Life"}
        />
        <CategoryButton
          navigation={navigation}
          imageSource={BreakfastBowls}
          alt={"Breakfast Bowls"}
          title={"Breakfast Bowls"}
        />
        <CategoryButton
          navigation={navigation}
          imageSource={SalsaDips}
          alt={"Salsa Dips"}
          title={"Salsa Dips"}
        />
        <CategoryButton
          navigation={navigation}
          imageSource={ChilisCard}
          alt={"Keep it Spicy"}
          title={"Keep it Spicy"}
        />
      </Box>
    </View>
  );
}

function CategoryButton({
  navigation,
  imageSource,
  title,
  screenName = "RecipeCategoryScreen",
}) {
  return (
    <Box
      width={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
      my={2}
      shadow={4}
    >
      <TouchableOpacity onPress={() => navigation.navigate(screenName)}>
        <Image source={imageSource} resizeMode="contain" />
      </TouchableOpacity>
    </Box>
  );
}
