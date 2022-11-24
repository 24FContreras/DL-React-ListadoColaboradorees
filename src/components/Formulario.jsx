import { useState } from "react";

const Formulario = ({ listadoColaboradores, setListadoColaboradores }) => {
  const [nombreColaborador, setNombreColaborador] = useState("");
  const [emailColaborador, setEmailColaborador] = useState("");
  const [idColaborador, setIdColaborador] = useState(4);

  const enviarFormulario = (e) => {
    e.preventDefault();

    setListadoColaboradores([
      ...listadoColaboradores,
      {
        nombre: nombreColaborador,
        correo: emailColaborador,
        id: idColaborador,
      },
    ]);

    setNombreColaborador("");
    setEmailColaborador("");
    setIdColaborador(idColaborador + 1);
  };

  return (
    <section className="container my-4">
      <form
        onSubmit={enviarFormulario}
        className="d-flex flex-column gap-2 align-items-start"
      >
        <label htmlFor="nombre">Nombre del colaborador</label>
        <input
          className="form-control"
          type="text"
          placeholder="Nombre..."
          aria-label="nombre colaborador"
          name="nombre"
          value={nombreColaborador}
          onChange={(e) => setNombreColaborador(e.target.value)}
        ></input>
        <label htmlFor="email">Correo del colaborador</label>
        <input
          className="form-control"
          type="email"
          placeholder="Email..."
          aria-label="email colaborador"
          name="email"
          value={emailColaborador}
          onChange={(e) => setEmailColaborador(e.target.value)}
        ></input>

        <button
          type="submit"
          className="btn btn-primary"
          disabled={
            nombreColaborador.length < 1 || emailColaborador.length < 1
              ? true
              : false
          }
        >
          Ingresar Colaborador
        </button>
      </form>
    </section>
  );
};

export default Formulario;
