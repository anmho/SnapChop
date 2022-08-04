import { createStackNavigator } from "@react-navigation/stack";
import { Text, Box } from "native-base";
import { StyleSheet, View, ScrollView, TouchableOpacity } from "react-native";
import StatBar from "../components/StatBar";
import TutorialScreen from "./TutorialScreen";
import Video1 from "../../assets/img/Video1.png";
import Video2 from "../../assets/img/Video2.png";
import Video3 from "../../assets/img/Video3.png";
import { Image } from "native-base";

export default function TutorialsScreen({ navigation }) {
  return (
    <>
      <StatBar navigation={navigation} screen={"Tutorials"} />
      <ScrollView style={{ padding: 20, paddingTop: 90 }}>
        <Box justifyContent="center" alignItems={"center"} mb={2}>
          <Text fontSize={"2xl"} fontWeight="bold">
            How To
          </Text>
        </Box>

        <Section
          title={"Master 5 Basic Cooking Skill"}
          items={[{ image: Video1 }, { image: Video2 }, { image: Video3 }]}
        />
        <Section
          title={"Master 5 Basic Cooking Skill"}
          items={[{ image: Video3 }, { image: Video1 }, { image: Video2 }]}
        />
        <Section
          title={"Meal Prep"}
          items={[{ image: Video2 }, { image: Video3 }, { image: Video1 }]}
        />
      </ScrollView>
    </>
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
