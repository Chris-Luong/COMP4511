import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import { iOSColors, iOSUIKit } from "react-native-typography";

export const BookInfo = ({ book }) => (
  <View style={{ flexDirection: "row" }}>
    <Image source={{ uri: book.coverImage }} style={styles.bookCover} />
    <View>
      <Text style={iOSUIKit.title3Emphasized}>{book.title}</Text>
      <Text style={[iOSUIKit.subhead, { color: iOSColors.gray }]}>
        {book.authors.join(", ")}
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  bookCover: {
    width: 100,
    aspectRatio: 0.65,
    borderRadius: 2,
    marginRight: 10,
    marginBottom: 10,
  },
});
