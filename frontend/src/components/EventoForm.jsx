import { useEffect, useState } from "react";
import { obtenerCategorias } from "../services/categoriaService";

function EventoForm({ onGuardar }) {

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

      await onGuardar(formData);

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

    <form onSubmit={handleSubmit}>

      <h2>
        Crear Evento
      </h2>

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
        Guardar Evento
      </button>

    </form>
  );
}

export default EventoForm;