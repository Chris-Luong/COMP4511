import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  textPickers: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
  },
  buttons: {
    flex: 1,
    justifyContent: "space-evenly",
    flexDirection: "row",
    width: "100%",
    marginTop: 20,
  },
  text: {
    color: "white",
    fontSize: 80,
    fontWeight: "200",
  },
  pickers: {
    flexDirection: "row",
    alignItems: "center",
  },
  pickerText: {
    color: "white",
  },
  picker: {
    width: 100,
  },
});
