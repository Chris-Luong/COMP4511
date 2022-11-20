import React, { useEffect } from "react";
import { Text, View, Image } from "react-native";

export default function Details({ route, navigation }) {
  const { title, text, image } = route.params ?? {};
  useEffect(() => navigation.setOptions({ title }), []);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {text && <Text>{text}</Text>}
      {image && (
        <Image
          accessibilityIgnoresInvertColors={true}
          source={{ uri: image }}
          resizeMode="cover"
          style={{ height: 200, width: 200, alignSelf: "center" }}
        />
      )}
      {/* <Button title="Go back" onPress={() => navigation.goBack()} /> */}
    </View>
  );
}
