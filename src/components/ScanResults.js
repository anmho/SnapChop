import { useCallback, useMemo } from "react";
import {
  Touchable,
  TouchableOpacity,
  TouchableOpacityBase,
} from "react-native";
import {
  View,
  Text,
  StyleSheet,
  Button,
  SafeAreaView,
  FlatList,
} from "react-native";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import Ionicons from "react-native-vector-icons/Ionicons";
import SnapChopIcon from "../../assets/img/SnapChopIcon.png";
import RecipesButtonScan from "../../assets/img/RecipesButtonScan.png";
import SnackFactsButtonScan from "../../assets/img/SnackFactsButtonScan.png";
import TutorialsButtonScan from "../../assets/img/TutorialsButtonScan.png";

import { Image } from "native-base";

// import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function ScanResults({ scanResultsRef, navigation }) {
  // variables
  const snapPoints = useMemo(() => ["25%", "50%", "90%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={scanResultsRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        backgroundStyle={styles.modal}
      >
        <SafeAreaView>
          <View style={{ paddingBottom: 40 }}>
            <Heading scanResultsRef={scanResultsRef} />
            <View style={styles.divider} />
            <Results navigation={navigation} />
          </View>
        </SafeAreaView>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
}

function Heading({ scanResultsRef }) {
  return (
    <View
      style={{
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View
          style={{
            backgroundColor: "#D9D9D9",
            width: 50,
            height: 50,
            borderRadius: 10,
            marginRight: 10,
          }}
        />

        <View style={{ flex: 1 }}>
          <Text style={styles.mainHeading}>Scan Results</Text>
          <Text style={{ color: "white" }}>Content based on your scan</Text>
        </View>
      </View>

      {/* Close Button */}
      <TouchableOpacity onPress={() => scanResultsRef.current.dismiss()}>
        <View
          style={{
            height: 30,
            aspectRatio: 1 / 1,
            backgroundColor: "#2F2D2D",
            borderRadius: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Ionicons size={20} name={"close-outline"} color={"white"} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

let data = [
  {
    title: "Snap Chop",
    icon: SnapChopIcon,
    description:
      "Empowering ALL communities with accessible, healthy foods in a fun way",
    content: [
      {
        source: "RecipesStack",
        icon: RecipesButtonScan,
        description: "Our Own Recipes",
      },
      {
        source: "TutorialsStack",
        icon: TutorialsButtonScan,
        description: "Cookin' with Chefs",
      },
      {
        source: "SnackFactsStack",
        icon: SnackFactsButtonScan,
        description: "Snack Facts",
      },
    ],
    more: { name: "Snap Chop", source: "SnapChopStack" },
  },
  {
    title: "Lenses",
    content: [
      {
        description: "Lens 1",
      },
      {
        description: "Lens 2",
      },
      {
        description: "Lens 3",
      },
    ],
    more: { name: "Try Lenses (20)", source: "" },
  },
  {
    title: "dummy",
    content: [],
  },
];

data = data.map((item, i) => {
  return { id: i, ...item };
});

function Results({ navigation }) {
  const Result = ({ item }) => {
    if (item.id === data.length - 1)
      return <View style={{ height: 120 }} key={item.id} />;
    return (
      <View style={styles.item} key={item.id}>
        {/* Category */}
        {/* Title */}
        <View
          style={{
            justifyContent: "center",
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {item.icon ? (
            <View
              style={{
                display: "flex",
                width: "50%",
                paddingRight: 10,
              }}
            >
              <View
                style={{
                  alignSelf: "flex-end",
                  borderRadius: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "white",
                  padding: 2,
                }}
              >
                <Image source={item.icon} size={7} />
              </View>
            </View>
          ) : null}
          <View>
            <Text
              style={{
                alignSelf: "center",
                color: "#A8B0B6",
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              {item.title}
            </Text>
          </View>
          {item.icon ? <View style={{ width: "50%" }}></View> : null}
        </View>
        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#9F9F9F" }}>{item.description}</Text>
        </View>
        {/* Content Items */}
        <View style={styles.item.content}>
          {item.content.map((contentItem) => (
            <CategoryItem item={contentItem} navigation={navigation} />
          ))}
        </View>
        <MoreButton
          name={item.more.name}
          source={item.more.source}
          navigation={navigation}
        />
      </View>
    );
  };

  return (
    <FlatList
      style={{ paddingLeft: 20, paddingRight: 20, paddingBottom: 100 }}
      data={data}
      renderItem={Result}
      keyExtractor={(item) => item.id}
    />
  );
}

function CategoryItem({ item, navigation }) {
  const stack = "SnapChopStack";
  console.log(item.source);
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(stack, {
          screen: item.source,
        })
      }
    >
      <View
        style={{
          padding: 2,
          flexDirection: "row",
          alignItems: "center",
          marginTop: 5,
          marginBottom: 5,
        }}
      >
        {item.icon ? (
          <Image
            source={item.icon}
            style={{
              borderRadius: "100%",
              backgroundColor: "#D9D9D9",
              width: 50,
              aspectRatio: 1 / 1,
              marginRight: 10,
            }}
          />
        ) : (
          <View
            style={{
              borderRadius: "100%",
              backgroundColor: "#D9D9D9",
              width: 50,
              aspectRatio: 1 / 1,
              marginRight: 10,
            }}
          />
        )}
        <Text style={{ color: "white" }}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );
}

function MoreButton({ name, source, navigation }) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(source)}>
      <View
        style={{
          fontSize: 20,
          backgroundColor: "#2A2A2A",
          borderRadius: 10,
          marginTop: 20,
          padding: 10,
          marginLeft: 15,
          marginRight: 15,
          marginBottom: 10,
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white" }}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  header: {
    title: {},
    container: {},
    scanPhoto: {},
  },
  mainHeading: { fontSize: 20, color: "white" },

  modal: { backgroundColor: "#121212" },
  item: {
    backgroundColor: "#1E1E1E",
    borderRadius: 10,
    color: "white",
    padding: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  container: {
    padding: 20,
  },
  divider: {
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: "#575353",
    height: 2,
    width: "100%",
  },
});
