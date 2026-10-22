const API_URL =
  "http://localhost:3000/api/categorias";

export const obtenerCategorias =
  async () => {

    const response =
      await fetch(API_URL);

    return await response.json();
};