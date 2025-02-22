import CONFIG from "../config/config";

const getMoviesByTitle = async ({ title }) => {
  try {
    const URL = `${CONFIG.API_URL_MOVIES}?${CONFIG.API_KEY}&s=${title}`;
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al recuperar las peliculas", error);
  }
};

export default { getMoviesByTitle };
