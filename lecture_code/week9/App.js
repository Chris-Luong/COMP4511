import { SafeAreaView, StyleSheet, View } from "react-native";
import { iOSColors } from "react-native-typography";
import Translator from "./screens/Translator";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Translator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: iOSColors.customGray,
  },
});
