import EventoCard from "./EventoCard";

function EventoList({ eventos, onEliminar, onEditar }) {

  return (
    <>
      <div className="evento-grid">
      {
                  eventos.map(evento => (
            <EventoCard
              key={evento.id}
              evento={evento}
              onEliminar={onEliminar}
              onEditar={onEditar}
            />
          ))       
      }
       </div>
    </>
  );
}

export default EventoList;