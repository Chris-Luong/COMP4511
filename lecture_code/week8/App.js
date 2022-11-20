import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import AddBook from "./screens/AddBook";
import BookDetails from "./screens/BookDetails";
import ReadingList from "./screens/ReadingList";

const RootStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="ReadingList"
          component={ReadingList}
          options={{ title: "My Reading List" }}
        />
        <RootStack.Screen name="BookDetails" component={BookDetails} />
        <RootStack.Screen
          name="AddBook"
          component={AddBook}
          options={{ title: "Add a book", presentation: "modal" }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
