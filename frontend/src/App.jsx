import { useEffect, useState } from "react";
import EventoList from "./components/EventoList";
import EventoForm from "./components/EventoForm";
import Dashboard from "./components/Dashboard";
import {obtenerEventos, crearEvento, eliminarEvento, actualizarEvento} from "./services/eventoService";

function App() {

  const [eventos, setEventos] = useState([]);

  const [mostrarFormulario, setMostrarFormulario]= useState(false);

  const [eventoEditar, setEventoEditar] = useState(null);

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

 const editarEvento = (
  evento
  ) => {

  setEventoEditar(
    evento
  );

  setMostrarFormulario(
    true
  );

  };

  const actualizarEventoApp =
  async (id, evento) => {

    await actualizarEvento(
      id,
      evento
    );

    await cargarEventos();

  };





  return (
    <div className="app-container">

      <div className="app-header">
      <h1>
        Sistema de Gestión de Eventos
      </h1>

      <p>
        Proyecto Final - React + Express + MariaDB
      </p>

      </div>

      {
        <Dashboard eventos={eventos} />
      }


      {
        mostrarFormulario && (

          <EventoForm
            onGuardar={guardarEvento}
            onActualizar={actualizarEventoApp}
            onCerrar={() => {setEventoEditar(null); setMostrarFormulario(false);}}
            eventoEditar={eventoEditar}
          />

        )
      }      

      <h2>
        Lista de Eventos
      </h2>

      {
        <button onClick={() => {setMostrarFormulario(true);setEventoEditar(null);}}>
          ➕ Añadir Nuevo Evento
        </button>
      }

      {
        <EventoList
          eventos={eventos}
          onEliminar={borrarEvento}
          onEditar={editarEvento}
        />
      }
      </div>
  );
}

export default App;