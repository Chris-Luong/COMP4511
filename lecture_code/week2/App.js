import { StatusBar } from "expo-status-bar";
import {
  ActivityIndicator,
  Alert,
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const onPress = () =>
    Alert.alert("You clicked me!", "This is a subtitle", [
      { text: "My Custom Button" },
    ]);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Hello World! <Text style={styles.emphasised}>Welcome to COMP4511</Text>
      </Text>
      <Image
        style={styles.image}
        source={{ uri: "https://picsum.photos/200" }}
      />
      <Button
        title="Press me!"
        onPress={onPress}
        // disabled={true}
        // color="red"
      />
      <TouchableOpacity style={styles.button} onLongPress={onPress}>
        <Text style={styles.buttonText}>Also try long pressing me!</Text>
      </TouchableOpacity>
      <ActivityIndicator color="blue" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 20,
  },
  text: {
    color: "#888",
    fontSize: 20,
  },
  emphasised: {
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  button: {
    height: 100,
    width: 100,
    backgroundColor: "green",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
  },
});
