import { useState } from "react";
import { BaseColaboradores } from "./BaseColaboradores";
import Buscador from "./components/Buscador";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";

function App() {
  const [listadoColaboradores, setListadoColaboradores] =
    useState(BaseColaboradores);

  const [busqueda, setBusqueda] = useState("");

  return (
    <div className="App">
      <header>
        <Buscador busqueda={busqueda} setBusqueda={setBusqueda} />
      </header>

      <main className="container-fluid">
        <Formulario
          listadoColaboradores={listadoColaboradores}
          setListadoColaboradores={setListadoColaboradores}
        />
        <Listado
          listadoColaboradores={
            busqueda.length !== 0
              ? listadoColaboradores.filter((item) =>
                  item.nombre.toLowerCase().includes(busqueda.toLowerCase())
                )
              : listadoColaboradores
          }
          busqueda={busqueda}
        />
      </main>
    </div>
  );
}

export default App;
