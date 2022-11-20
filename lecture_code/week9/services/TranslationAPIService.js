import { API_BASE_URL, API_REGION, API_KEY } from "@env";

const makeApiRequest = async (endpoint, config) => {
  const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
    headers: {
      "Ocp-Apim-Subscription-Key": API_KEY,
      "Ocp-Apim-Subscription-Region": API_REGION,
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

export default {
  async fetchLanguages() {
    const langs = await makeApiRequest("languages?api-version=3.0", {
      method: "GET",
    });
    return langs.translation;
  },
  async translate(text, from, to) {
    const data = await makeApiRequest(
      from
        ? `translate?api-version=3.0&to=${to}&from=${from}`
        : `translate?api-version=3.0&to=${to}`,
      {
        method: "POST",
        body: [
          {
            Text: text,
          },
        ],
      }
    );
    return data[0]?.translations[0]?.text;
  },
};
