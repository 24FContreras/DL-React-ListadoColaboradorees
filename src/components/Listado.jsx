const Listado = ({ listadoColaboradores }) => {
  return (
    <section className="container">
      <h3>Colaboradores</h3>
      <ul className="list-group">
        {listadoColaboradores.length < 1 ? (
          <p> No existen colaboradores</p>
        ) : (
          listadoColaboradores.map((item) => (
            <li className="list-group-item" key={item.id}>
              <span className="fw-bold">{item.nombre}</span> -{" "}
              <span className="text-secondary">{item.correo}</span>
            </li>
          ))
        )}
      </ul>
    </section>
  );
};

export default Listado;
