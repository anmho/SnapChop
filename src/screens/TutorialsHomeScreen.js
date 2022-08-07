import { createStackNavigator } from "@react-navigation/stack";
import { Text, Box } from "native-base";
import { StyleSheet, View, ScrollView, TouchableOpacity } from "react-native";
import StatBar from "../components/StatBar";
import TutorialScreen from "./TutorialScreen";
import LeeCutting from "../../assets/img/LeeCutting.png";
import OnionChopping from "../../assets/img/OnionChopping.png";
import Salt from "../../assets/img/Salt.png";
import ChoppingPepper from "../../assets/img/ChoppingPepper.png";
import ChickpeaSweetPotato from "../../assets/img/ChickpeaSweetPotato.png";
import Soup from "../../assets/img/Soup.png";
import CollardChili from "../../assets/img/CollardChili.png";
import DustinSaute from "../../assets/img/DustinSaute.png";
import Veggies from "../../assets/img/Veggies.png";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Image } from "native-base";

export default function TutorialsHomeScreen({ navigation }) {
  return (
    <>
      <ScrollView style={{ padding: 10, backgroundColor: "white" }}>
        <Heading navigation={navigation} />
        <Section
          title={"Master 5 Basic Cooking Skills"}
          items={[
            { image: LeeCutting },
            { image: OnionChopping },
            { image: Salt },
          ]}
        />
        <Section
          title={"Cook Like a Chef"}
          items={[
            { image: ChoppingPepper },
            { image: ChickpeaSweetPotato },
            { image: Soup },
          ]}
        />
        <Section
          title={"Meal Prep"}
          items={[
            { image: CollardChili },
            { image: DustinSaute },
            { image: Veggies },
          ]}
        />
      </ScrollView>
    </>
  );
}

function Heading({ navigation }) {
  return (
    <Box
      flexDir={"row"}
      justifyContent="space-between"
      alignItems={"center"}
      mb={2}
      px={4}
    >
      <TouchableOpacity onPress={() => navigation.navigate("SnapChopScreen")}>
        <Box
          bg={"#FFE300"}
          h={10}
          w={10}
          borderRadius={12}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Ionicons name="chevron-back-outline" size={24} color="black" />
        </Box>
      </TouchableOpacity>
      <Text fontSize={"2xl"} fontWeight="bold">
        How To
      </Text>
      <Box h={10} w={10} borderRadius={12} />
    </Box>
  );
}

function Section({ title, items }) {
  return (
    <Box>
      <Text ml={5} fontSize="2xl" fontWeight={"semibold"}>
        {title}
      </Text>
      <ScrollView horizontal={true} style={{ margin: 10 }}>
        {items.map((item) => (
          <SectionItem image={item.image} />
        ))}
      </ScrollView>
    </Box>
  );
}

function SectionItem({ image, title, videoUrl }) {
  return (
    <TouchableOpacity onPress={() => {}}>
      {!image ? (
        <Box
          borderRadius={8}
          height={150}
          aspectRatio={3 / 4}
          bg={"gray.500"}
          shadow={2}
          mx={2}
        ></Box>
      ) : (
        <Box shadow={2}>
          <Image
            borderRadius={8}
            height={150}
            aspectRatio={3 / 4}
            bg={"gray.500"}
            mx={2}
            source={image}
          />
        </Box>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
