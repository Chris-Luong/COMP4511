import React, { useEffect } from "react";
import { Text, View } from "react-native";

export default function Details({ route, navigation }) {
  const { title, text } = route.params ?? {};
  useEffect(() => navigation.setOptions({ title }), []);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {text && <Text>{text}</Text>}
      {/* <Button title="Go back" onPress={() => navigation.goBack()} /> */}
    </View>
  );
}
