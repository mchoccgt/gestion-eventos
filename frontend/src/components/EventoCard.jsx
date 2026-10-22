function EventoCard({ evento, onEliminar }) {

  return (
    <div
      style={{
        border: "1px solid gray",
        margin: "10px",
        padding: "10px"
      }}
    >
      <h3>{evento.nombre}</h3>

      <p>
        Categoría: {evento.categoria}
      </p>

      <p>
        Lugar: {evento.lugar}
      </p>

      <p>
        Precio: Q.{evento.precio}
      </p>

      <p>
        Cupos disponibles:
        {" "}
        {evento.cupos_disponibles}
      </p>
      
      <button
        onClick={() =>
          onEliminar(
            evento.id
          )
        }
      >
        Eliminar
      </button>

    </div>
  );
}

export default EventoCard;