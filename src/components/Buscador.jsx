import { useState } from "react";

const Buscador = ({ busqueda, setBusqueda }) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand">Buscador de Colaboradores</a>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Busca un colaborador..."
            aria-label="Busca un colaborador"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          ></input>
        </form>
      </div>
    </nav>
  );
};

export default Buscador;
