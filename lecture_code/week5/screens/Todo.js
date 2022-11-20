import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

export default function Todo({ route, navigation }) {
  const { title, text } = route.params ?? {};
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="+ Create todo"
        onPress={() => navigation.navigate("CreateTodo")}
      />
      <Text>My todos:</Text>
      {title && text && (
        <Button
          title={title}
          onPress={() =>
            navigation.navigate("Details", {
              title,
              text,
            })
          }
        />
      )}
    </View>
  );
}

export function CreateTodo({ navigation }) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  return (
    <View>
      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
        style={{ height: 50, backgroundColor: "white" }}
      />
      <TextInput
        placeholder="Text"
        value={text}
        onChangeText={setText}
        style={{ height: 50, backgroundColor: "white" }}
      />
      <Button
        title="Save"
        onPress={() => navigation.navigate("Todo", { title, text })}
      />
    </View>
  );
}
