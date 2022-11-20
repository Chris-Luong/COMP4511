import { BarCodeScanner } from "expo-barcode-scanner";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { iOSUIKit, iOSColors } from "react-native-typography";
import { BookInfo } from "../components/BookInfo";
import { fetchBookByIsbn } from "../services/GBooksApiService";
import CacheService from "../services/CacheService";

export default ({ navigation }) => {
  const [isbn, setIsbn] = useState("");
  const [book, setBook] = useState(null);
  const [enterManually, setEnterManually] = useState(false);
  const [hasPermission, setHasPermission] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button onPress={() => navigation.pop()} title="Cancel" />
      ),
      headerRight: () => (
        <Button onPress={handleAddBook} disabled={!book} title="Add" />
      ),
    });
  }, [navigation, book]);

  // Requesting camera permissions for barcode scanner
  useEffect(() => {
    // const getBarCodeScannerPermissions = async () => {
    //   const { granted } = await BarCodeScanner.requestPermissionsAsync();
    //   setHasPermission(granted);
    // };

    // getBarCodeScannerPermissions();

    // IIFE - immediately invoked function expression
    (async () => {
      const { granted } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(granted);
      if (!granted) {
        Alert.alert(
          "Camera permissions not granted",
          "Please allow camera access in settings!"
        );
      }
    })();
  }, []);

  const handleIsbnChanged = async (isbn) => {
    setIsbn(isbn);
    setBook(null);
    if ((isbn.length === 10 || isbn.length === 13) && isbn.match(/^\d+$/)) {
      setLoading(true);
      const book = await fetchBookByIsbn(isbn);
      setBook(book);
      setLoading(false);
    }
  };

  const handleAddBook = async () => {
    setLoading(true);
    await CacheService.saveBook(book);
    navigation.pop();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scan barcode</Text>
      {hasPermission && (
        <BarCodeScanner
          barCodeTypes={[BarCodeScanner.Constants.BarCodeType.ean13]}
          onBarCodeScanned={({ data }) => handleIsbnChanged(data)}
          style={styles.barcodeScanner}
        />
      )}

      <Button
        title="Barcode won't scan? Enter manually."
        onPress={() => setEnterManually(true)}
      />
      <TextInput
        placeholder="ISBN"
        editable={enterManually}
        value={isbn}
        onChangeText={handleIsbnChanged}
        keyboardType="number-pad"
        style={styles.input}
      />
      {book && <BookInfo book={book} />}
      {loading && <ActivityIndicator />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, margin: 10 },
  title: {
    ...iOSUIKit.title3Object,
    marginBottom: 10,
  },
  barcodeScanner: {
    aspectRatio: 2,
  },
  input: {
    ...iOSUIKit.bodyObject,
    backgroundColor: iOSColors.white,
    padding: 5,
    borderRadius: 2,
    marginVertical: 10,
  },
});
