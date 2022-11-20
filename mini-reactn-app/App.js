import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";

export default function App() {
  const sendAlert = () =>
    Alert.alert("Alert popup", "You have pressed the alert button", [
      { text: "Dismiss" },
    ]);

  const [toggleText, setToggleText] = useState("Toggle image off");
  const [imageUri, setImageUri] = useState("https://picsum.photos/id/237/300");

  const toggleImageUri = (isImageOn) => {
    if (!isImageOn) {
      setImageUri("https://picsum.photos/id/237/300");
    } else {
      setImageUri(" ");
    }
  };
  const toggleImage = () => {
    toggleText === "Toggle image off"
      ? setToggleText("Toggle image on")
      : setToggleText("Toggle image off");
    toggleImageUri(toggleText === "Toggle image off");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.baseText}>
        <Text style={styles.titleText}>
          <Text style={styles.underlineText}>Hi, my name's Chris</Text>
          {" 👋\n\n"}
        </Text>
        Here are 5 facts about me:{"\n"}
        <Text style={styles.bulletText}>
          {"\u2022"} I workout 6 times a week{"\n"}
          {"\u2022"} I play basketball with my friends on Monday{"\n"}
          {"\u2022"} I am doing 3 computer science courses this term{"\n"}
          {"\u2022 "}
          <Text style={[styles.underlineText, styles.maxBold]}>
            I plan to HD in all of them
          </Text>{" "}
          😂{"\n"}
          {"\u2022"} I like quokkas{"\n"}
        </Text>
        <Text style={{ fontStyle: "italic" }}>
          Here's a black dog from picsum.photos:
        </Text>
      </Text>
      <Image style={styles.squareRoundedImage} source={{ uri: imageUri }} />
      <TouchableOpacity style={styles.primaryBtn} onPress={toggleImage}>
        <Text style={styles.buttonText}>{toggleText}</Text>
      </TouchableOpacity>
      <Button title="Press for an alert popup" onPress={sendAlert} />
      <StatusBar style="auto" />
    </View>
  );
}

/**
 * A function to calculate lineheight based on
 * the font size similar to what CSS can do.
 * @param {fontSize}
 * @returns lineHeight
 */
function lineHeight(fontSize) {
  const multiplier = fontSize < 24 ? 2 : 1.2;
  return parseInt(fontSize * multiplier, 10);
}

/**
 * What is meant by transition elements? Online examples seem advanced. From the spec:
 * We encourage you to play around with colours, shapes,
 * and transition elements within all of these components – this will allow you
 * to get familiar with the syntax of React Native.
 */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fefae0",
    alignItems: "center",
    justifyContent: "center",
  },

  baseText: {
    fontSize: 12,
    // fontFamily: 'Arial',
    lineHeight: lineHeight(12),
  },

  titleText: {
    fontSize: 24,
    textAlign: "center",
    lineHeight: lineHeight(24),
  },

  underlineText: {
    textDecorationLine: "underline",
  },

  maxBold: {
    fontWeight: "900",
  },

  bulletText: {
    flex: 1,
    paddingLeft: 5,
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
  },

  squareRoundedImage: {
    width: 300,
    height: 300,
    borderRadius: 15,
    marginTop: 5,
    marginBottom: 20,
  },

  primaryBtn: {
    minWidth: 130,
    height: 40,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
    fontWeight: "600",
    color: "#fff",
    backgroundColor: "#3a86ff",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
