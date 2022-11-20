import { StyleSheet } from "react-native";
import { iOSColors } from "react-native-typography";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  listView: {
    padding: 20,
  },
  divider: {
    borderColor: iOSColors.gray,
    borderWidth: StyleSheet.hairlineWidth,
    marginVertical: 20,
  },
});
