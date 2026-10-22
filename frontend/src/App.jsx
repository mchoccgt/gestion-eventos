import { useEffect, useState } from "react";
import EventoList from "./components/EventoList";
import EventoForm from "./components/EventoForm";
import Dashboard from "./components/Dashboard";
import {obtenerEventos, crearEvento, eliminarEvento} from "./services/eventoService";

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

  const guardarEvento =
  async (evento) => {

    await crearEvento(evento);

    await cargarEventos();

  };

  const borrarEvento =
  async (id) => {

    await eliminarEvento(id);

    await cargarEventos();

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

      {
        <Dashboard eventos={eventos} />
      }

      {
        <EventoForm onGuardar={guardarEvento}/>
      }
      

      <h2>
        Lista de Eventos
      </h2>

      {
        <EventoList
          eventos={eventos}
          onEliminar={borrarEvento}
        />
      }

    </>
  );
}

export default App;