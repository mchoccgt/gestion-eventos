import { useEffect, useState } from "react";
import { obtenerEventos } from "./services/eventoService";
import EventoList from "./components/EventoList";

function App() {

  const [eventos, setEventos] = useState([]);

  useEffect(() => {

    cargarEventos();

  }, []);

  const cargarEventos = async () => {

    try {

      const datos =
        await obtenerEventos();

      setEventos(datos);

    } catch (error) {

      console.error(
        "Error al cargar eventos:",
        error
      );

    }

  };

  return (
    <>
      <h1>
        Sistema de Gestión de Eventos
      </h1>

      <p>
        Proyecto Final - React + Express + MariaDB
      </p>

      <hr />

      <h2>
        Lista de Eventos
      </h2>

      {
        <EventoList eventos={eventos} />
      }

    </>
  );
}

export default App;