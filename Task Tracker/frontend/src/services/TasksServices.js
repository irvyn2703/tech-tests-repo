const API_URL = import.meta.env.VITE_API_URL;

async function createTask({ task }) {
  let url = `${API_URL}/task`;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: task }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

export default { createTask };
