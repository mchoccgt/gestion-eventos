import EventoCard from "./EventoCard";

function EventoList({ eventos }) {

  return (
    <>
      {
        eventos.map(evento => (
          <EventoCard
            key={evento.id}
            evento={evento}
          />
        ))
      }
    </>
  );
}

export default EventoList;