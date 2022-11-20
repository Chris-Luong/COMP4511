const API_BASE_URL = "https://www.googleapis.com/books/v1";

const makeApiRequest = async (endpoint, config) => {
  const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: config.method,
    body: JSON.stringify(config.body),
  });

  if (response.status >= 200 && response.status < 400) {
    const data = await response.json();
    return data;
  } else {
    throw new Error("API Request failed", response);
  }
};

export const fetchBookByIsbn = async (isbn) => {
  const data = await makeApiRequest(`volumes?q=isbn:${isbn}`, {
    method: "GET",
  });

  if (data.totalItems > 0) {
    const book = data.items[0].volumeInfo;
    return {
      title: book.title,
      authors: book.authors,
      publisher: book.publisher,
      publishedDate: book.publishedDate,
      description: book.description,
      isbn,
      categories: book.categories,
      coverImage: book.imageLinks?.thumbnail,
      pageCount: book.pageCount,
    };
  } else {
    return null;
  }
};
