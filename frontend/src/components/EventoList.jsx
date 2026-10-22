import EventoCard from "./EventoCard";

function EventoList({ eventos, onEliminar }) {

  return (
    <>
      {
        eventos.map(evento => (
          <EventoCard
            key={evento.id}
            evento={evento}
            onEliminar={onEliminar}
          />
        ))
      }
    </>
  );
}

export default EventoList;