import { Ionicons } from "@expo/vector-icons";
import { Divider } from "@rneui/themed";
import React, { useEffect } from "react";
import {
  ScrollView,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { iOSColors, iOSUIKit } from "react-native-typography";
import { BookInfo } from "../components/BookInfo";

export default ({ navigation, route }) => {
  const { book } = route.params;
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity>
          <Ionicons
            name="ios-share"
            size={30}
            color={iOSColors.blue}
            onPress={onShare}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const onShare = async () => {
    try {
      await Share.share({
        message: `Check out this '${book.categories.join(
          ", "
        )}' book I'm reading!\n${book.title} by ${book.authors.join(
          ", "
        )} (ISBN: ${book.isbn})`,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const DetailRow = ({ heading, text, last }) => {
    return (
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.detailHeading}>{heading}</Text>
        <Text style={[styles.detailText, last && { marginBottom: 10 }]}>
          {text}
        </Text>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <BookInfo book={book} />
      <Divider />
      <Text style={styles.descText}>{book.description}</Text>
      <Divider />
      <View>
        <Text style={styles.sectionHeader}>Reading Log</Text>
        <DetailRow heading="Read State" text="🎉 Finished" />
        <DetailRow heading="Started" text="4 March 2020" />
        <DetailRow heading="Finished" text="17 March 2020" />
        <DetailRow heading="Read Time" text="13 days" last={true} />
      </View>
      <Divider />
      <View>
        <Text style={styles.sectionHeader}>Details</Text>
        <DetailRow heading="Categories" text={book.categories.join(", ")} />
        <DetailRow heading="Pages" text={book.pageCount} />
        <DetailRow heading="Publisher" text={book.publisher} />
        <DetailRow heading="Published Date" text={book.publishedDate} />
        <DetailRow heading="ISBN" text={book.isbn} last={true} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },
  bookCover: {
    width: 100,
    aspectRatio: 0.65,
    borderRadius: 2,
    marginRight: 10,
    marginBottom: 10,
  },
  sectionHeader: {
    ...iOSUIKit.bodyEmphasized,
    marginVertical: 10,
  },
  detailHeading: {
    ...iOSUIKit.footnoteEmphasized,
    flex: 1,
    color: iOSColors.gray,
    textAlign: "right",
    marginRight: 10,
  },
  detailText: {
    ...iOSUIKit.footnote,
    flex: 2,
  },
  descText: {
    ...iOSUIKit.footnote,
    marginVertical: 10,
    color: iOSColors.gray,
  },
});
