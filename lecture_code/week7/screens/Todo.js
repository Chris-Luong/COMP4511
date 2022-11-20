import React, { useEffect, useState } from "react";
import { Button, Text, TextInput, View, Image } from "react-native";
import StoreService from "../services/StoreService";
import * as ImagePicker from "expo-image-picker";

export default function Todo({ route, navigation }) {
  const [todos, setTodos] = useState([]);

  // read todos from cache on first render
  useEffect(() => {
    StoreService.getTodos().then(
      (cachedTodos) => cachedTodos && setTodos(cachedTodos)
    );
  }, []);

  useEffect(() => {
    const { title, text, image } = route.params ?? {};
    if (title && text) {
      setTodos((prevTodos) => [...prevTodos, { title, text, image }]);
    }
  }, [route.params]);

  useEffect(() => {
    StoreService.saveTodos(todos);
  }, [todos]);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        accessibilityLabel="Create todo"
        accessibilityHint="Launches a modal to create a new todo"
        accessibilityRole="button"
        title="+ Create todo"
        onPress={() => navigation.navigate("CreateTodo")}
      />
      <Text>My todos:</Text>
      {todos.map(({ text, title, image }, idx) => (
        <Button
          key={idx}
          title={title}
          onPress={() =>
            navigation.navigate("Details", {
              title,
              text,
              image,
            })
          }
        />
      ))}
    </View>
  );
}

export function CreateTodo({ navigation }) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    const checkPermissions = async () => {
      const { granted } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (!granted) {
        alert("Please grant photo library permissions in settings");
      }
    };
    checkPermissions();
  }, []);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    if (!result.cancelled && result.uri) {
      setImage(result.uri);
    }
  };

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
      {image ? (
        <Image
          source={{ uri: image }}
          resizeMode="cover"
          style={{ height: 200, width: 200, alignSelf: "center" }}
        />
      ) : (
        <Text style={{ alignSelf: "center" }}>Press "Pick an image" below</Text>
      )}
      <Button title="Pick an image" onPress={pickImage} />
      <Button
        title="Save"
        onPress={() => navigation.navigate("Todo", { title, text, image })}
      />
    </View>
  );
}
