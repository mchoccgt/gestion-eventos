function EventoCard({ evento, onEliminar, onEditar }) {

  return (
    <div className="evento-card">
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
      

      <div className="acciones-evento">

      <button className="btn-edit"
        onClick={() =>
          onEditar(evento)
        }
      >
        Editar
      </button>

      <button className= "btn-danger"
        onClick={() =>
          onEliminar(
            evento.id
          )
        }
      >
        Eliminar
      </button>

      </div>

    </div>
  );
}

export default EventoCard;