import AsyncStorage from "@react-native-async-storage/async-storage";

const CACHE_KEY = "@books";

export default {
  async getBooks() {
    const books = await AsyncStorage.getItem(CACHE_KEY);
    return JSON.parse(books) ?? [];
  },
  async saveBook(newBook) {
    const existingBooks = await this.getBooks();
    const doesBookExist = existingBooks.some(
      (existingBook) => existingBook.isbn === newBook.isbn
    );
    if (!doesBookExist) {
      await AsyncStorage.setItem(
        CACHE_KEY,
        JSON.stringify([...existingBooks, newBook])
      );
    }
  },
};
