const API_URL = "https://us-central1-omikuji-30c35.cloudfunctions.net/omikuji";

export const getResults = async () => {
  try {
    const response = await fetch(API_URL);
    return response.json();
  } catch (e) {
    console.log(e);
  }
};

export const postResult = (result, name) => {
  try {
    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ result, name })
    });
  } catch (e) {
    console.log(e);
  }
};
