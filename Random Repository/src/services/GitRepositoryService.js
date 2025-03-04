const API_URL = import.meta.env.VITE_API_URL;

async function getRepository({ language, numPage }) {
  let URL = `${API_URL}?q=language:${language}&per_page=1&page=${numPage}`;
  try {
    const response = await fetch(URL);

    if (!response.ok) {
      throw new Error(
        `Error en la petición: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

export default { getRepository };
