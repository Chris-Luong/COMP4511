import { StyleSheet } from "react-native";
import { iOSColors } from "react-native-typography";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  buttons: {
    flexDirection: "row",
    margin: 10,
  },
  button: {
    flex: 1,
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: iOSColors.white,
    margin: 5,
    paddingVertical: 20,
  },
  main: {
    flex: 1,
    backgroundColor: iOSColors.white,
    padding: 20,
    borderRadius: 10,
  },
  text: {
    flex: 1,
  },
  divider: {
    borderColor: iOSColors.gray,
    borderWidth: StyleSheet.hairlineWidth,
    marginVertical: 20,
  },
});
