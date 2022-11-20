import React from "react";
import { Button, Text, View } from "react-native";

export default function Settings({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Settings Screen</Text>
      <Button
        title="Go to profile"
        onPress={() => navigation.navigate("Details", { text: "my profile" })}
      />
    </View>
  );
}
