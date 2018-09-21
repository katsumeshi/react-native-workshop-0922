export const getResults = async () => {
  try {
    const response = await fetch("https://us-central1-omikuji-30c35.cloudfunctions.net/omikuji");
    return response.json();
  } catch (e) {
    alert(e);
  }
};

export const postResult = async (result, name) => {
  try {
    const response = await fetch("https://us-central1-omikuji-30c35.cloudfunctions.net/omikuji", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ result, name })
    });
    console.log(response.json());
  } catch (e) {
    alert(e);
  }
};
