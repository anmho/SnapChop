import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function StatBar({ navigation, screen }) {
  return (
    <View
      style={
        screen === "Camera" ? styles.container.camera : styles.container.other
      }
    >
      {/* Profile Button */}
      {console.log(screen)}

      {new Set(["Profile"]).has(screen) ? (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={styles.iconContainer}>
            <Ionicons name="chevron-back-outline" size={14} color="#ffffff" />
          </View>
        </TouchableOpacity>
      ) : (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Profile");
            }}
          >
            <Image
              style={styles.bitmojiImage}
              source={require("../../assets/snapchat/personalBitmoji.png")} //<i class="fa-solid fa-magnifying-glass"></i>
            />
          </TouchableOpacity>
          {/* Search Button */}
          <View
            style={
              screen === "Camera"
                ? styles.iconContainer.camera
                : styles.iconContainer.other
            }
          >
            <Icon
              name="search"
              size={15}
              color={screen === "camera" ? "#ffffff" : "#646D78"}
            />
          </View>
        </View>
      )}

      {/* Different titles for different screensx */}
      {screen === "map" && (
        <View style={styles.barTitle}>
          <Text style={styles.barTitleText}>Map</Text>
        </View>
      )}

      {screen === "chat" && (
        <View style={styles.barTitle}>
          <Text style={styles.barTitleText}>Chat</Text>
        </View>
      )}
      {screen === "story" && (
        <View style={styles.barTitle}>
          <Text style={styles.barTitleText}>Stories</Text>
        </View>
      )}
      {screen === "spotlight" && (
        <View style={styles.barTitle}>
          <Text style={styles.barTitleText}>Spotlight</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    camera: {
      width: "100%",
      height: 50,
      position: "absolute",
      top: 40,
      zIndex: 100,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    other: {
      width: "100%",
      zIndex: 100,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
  },
  bitmojiImage: {
    width: 40,
    height: 40,
    marginLeft: 10,
  },
  iconContainer: {
    camera: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      width: 40,
      height: 40,
      backgroundColor: "rgba(104,104,104, 0.55)",
      borderRadius: 35,
      marginLeft: 10,
    },
    other: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      width: 40,
      height: 40,
      backgroundColor: "#F1F2F4",
      borderRadius: 35,
      marginLeft: 10,
    },
  },
  barTitle: {
    width: 150,
    height: 40,
    backgroundColor: "rgba(104,104,104, 0.55)",
    marginLeft: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 35,
  },
  barTitleText: {
    textAlign: "center",
  },
});
