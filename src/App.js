import React from "react";

import Formulario from "./components/Formulario";
import useTextos from "./hooks/useTextos";
import "./App.css";

const App = () => {
  const textos = useTextos()
  return (
    <React.Fragment>
      <h1 className="titulo">{textos.titulo}</h1>
      <Formulario />
    </React.Fragment>
  );
};
export default App;
