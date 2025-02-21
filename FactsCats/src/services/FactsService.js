import CONFIG from "../config/config";

const getRandomFact = async () => {
  try {
    const URL = `${CONFIG.API_URL_FACT}/fact`;
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al recuperar la fact", error);
  }
};

export default { getRandomFact };
