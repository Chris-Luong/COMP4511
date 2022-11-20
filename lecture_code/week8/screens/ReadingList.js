import { Ionicons } from "@expo/vector-icons";
import SegmentedControl from "@react-native-segmented-control/segmented-control";
import { useFocusEffect } from "@react-navigation/native";
import { ListItem } from "@rneui/themed";
import React, { useCallback, useEffect, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { iOSColors } from "react-native-typography";
import CacheService from "../services/CacheService";

export default ({ navigation, route }) => {
  const [books, setBooks] = useState([]);

  useFocusEffect(
    useCallback(() => {
      const loadBooks = async () => {
        const books = await CacheService.getBooks();
        setBooks(books);
      };
      loadBooks();
    }, [])
  );

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate("AddBook")}>
          <Ionicons name="ios-add" size={30} color={iOSColors.blue} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const BookRow = ({ book }) => (
    <ListItem
      bottomDivider={true}
      onPress={() => {
        console.log("hello");
        navigation.navigate("BookDetails", {
          name: book.title,
          book,
        });
      }}
    >
      <Image source={{ uri: book.coverImage }} style={styles.bookCover} />
      <ListItem.Content>
        <ListItem.Title>{book.title}</ListItem.Title>
        <ListItem.Subtitle>{book.authors.join(", ")}</ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  );

  return (
    <View style={{ flex: 1 }}>
      <SegmentedControl
        values={["To Read", "Reading", "Finished"]}
        selectedIndex={0}
        onChange={(event) =>
          console.log(event.nativeEvent.selectedSegmentIndex)
        }
        style={{ margin: 10 }}
      />
      <FlatList
        keyExtractor={(_, index) => index.toString()}
        data={books}
        renderItem={({ item }) => <BookRow book={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bookCover: {
    width: 50,
    aspectRatio: 0.65,
    borderRadius: 2,
  },
});
