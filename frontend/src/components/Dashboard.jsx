function Dashboard({
  eventos
}) {

  const totalEventos =
    eventos.length;

  const totalCupos =
    eventos.reduce(
      (total, evento) =>
        total +
        Number(
          evento.cupos_disponibles
        ),
      0
    );

  return (

    <div className="dashboard">

      <h2>
        Dashboard
      </h2>

      <p>
        Total eventos:
        {" "}
        {totalEventos}
      </p>

      <p>
        Total cupos:
        {" "}
        {totalCupos}
      </p>

    </div>

  );

}

export default Dashboard;