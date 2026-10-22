import { useEffect, useState } from "react";
import { obtenerCategorias } from "../services/categoriaService";

function EventoForm({ onGuardar,onActualizar, onCerrar, eventoEditar }) {

    const [formData, setFormData] =
    useState({
      categoria_id: 1,
      nombre: "",
      descripcion: "",
      fecha: "",
      lugar: "",
      precio: "",
      cupos_totales: ""
    });

    const [categorias,setCategorias] = useState([]);

    useEffect(() => {

        cargarCategorias();

    }, []);

    useEffect(() => {

    if (eventoEditar) {

      setFormData({
        categoria_id:
          eventoEditar.categoria_id,

        nombre:
          eventoEditar.nombre,

        descripcion:
          eventoEditar.descripcion,

        fecha:
          eventoEditar.fecha
            ?.slice(0,16),

        lugar:
          eventoEditar.lugar,

        precio:
          eventoEditar.precio,

        cupos_totales:
          eventoEditar.cupos_totales
      });

    }

    }, [eventoEditar]);

    const cargarCategorias =
        async () => {

            const datos =
            await obtenerCategorias();

            setCategorias(datos);

    };

    const handleChange = (e) => {

        setFormData({
        ...formData,
        [e.target.name]:
            e.target.value
        });

    };


  const handleSubmit =
    async (e) => {

      e.preventDefault();

      if (eventoEditar) {

        await onActualizar(
          eventoEditar.id,
          formData
        );

      } else {

        await onGuardar(
          formData
        );

      }
      onCerrar();

      setFormData({
        categoria_id: 1,
        nombre: "",
        descripcion: "",
        fecha: "",
        lugar: "",
        precio: "",
        cupos_totales: ""
      });

    };

  return (

    <div className="modal-overlay">

    <div className="modal-content">

    <form className="form-container" onSubmit={handleSubmit}>

      <h2>

        {
          eventoEditar
            ? "Editar Evento"
            : "Crear Evento"
        }

      </h2>

      <button type="button" onClick={onCerrar}>
        X
      </button>

        <select
        name="categoria_id"
        value={formData.categoria_id}
        onChange={handleChange}
        >

        {
            categorias.map(cat => (

            <option
                key={cat.id}
                value={cat.id}
            >
                {cat.nombre}
            </option>

            ))
        }

        </select>

        <br /><br />

      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        value={formData.nombre}
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="text"
        name="descripcion"
        placeholder="Descripción"
        value={formData.descripcion}
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="datetime-local"
        name="fecha"
        value={formData.fecha}
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="text"
        name="lugar"
        placeholder="Lugar"
        value={formData.lugar}
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="number"
        name="precio"
        placeholder="Precio"
        value={formData.precio}
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="number"
        name="cupos_totales"
        placeholder="Cupos"
        value={formData.cupos_totales}
        onChange={handleChange}
      />

      <br /><br />

      <button type="submit">

        {
          eventoEditar
            ? "Actualizar Evento"
            : "Guardar Evento"
        }

      </button>

    </form>

      </div>

  </div>
  
  );
}

export default EventoForm;