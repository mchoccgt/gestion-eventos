const API_URL =
  "http://localhost:3000/api/eventos";

export const obtenerEventos = async () => {

  const response =
    await fetch(API_URL);

  const data =
    await response.json();

  return data;
};

export const crearEvento = async (
  evento
) => {

  const response = await fetch(
    API_URL,
    {
      method: "POST",

      headers: {
        "Content-Type":
          "application/json"
      },

      body: JSON.stringify(
        evento
      )
    }
  );

  return await response.json();
};