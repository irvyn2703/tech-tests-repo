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

    const data = await response.json();

    if (data.items.length === 0 && data.total_count > 0) {
      const maxPage = data.total_count;
      const newNumPage = Math.floor(Math.random() * maxPage) + 1;

      if (newNumPage !== numPage) {
        return getRepository({ language, numPage: newNumPage });
      }
    }

    return data;
  } catch (error) {
    console.error(error);
  }
}

export default { getRepository };
