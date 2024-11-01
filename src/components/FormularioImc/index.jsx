import React, { useState } from "react";
import ResultadoImc from "../ResultadoImc";
import "./formulario.css";
import ErroResultado from "../ErroResultado";

export default function FormularioImc() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [imc, setImc] = useState(null);
  const [exibirResultado, setExibirReultado] = useState(false);

  const calcular = (e) => {
    e.preventDefault();
    let valoresValidos = peso !== "" && altura !== "" && peso > 0 && altura > 0;

    if (valoresValidos) {
      setImc(peso / (altura * altura));
    } else {
      setImc(null);
    }
    setExibirReultado(true);
    setAltura("");
    setPeso("");
  };

  return (
    <div className="formulario">
      <form onSubmit={calcular}>
        <div className="linha-formulario">
          <label htmlFor="peso">Peso</label>
          <input
            id="peso"
            type="text"
            placeholder="preencha seu peso"
            name="peso"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
          ></input>
        </div>

        <div className="linha-formulario">
          <label htmlFor="altura">altura</label>
          <input
            id="altura"
            type="text"
            placeholder="preencha sua altura"
            name="altura"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
          ></input>
        </div>

        <button type="submit">calcular</button>
      </form>
      {exibirResultado && (imc !== null ? <ResultadoImc imc={imc} /> : <ErroResultado />)}
    </div>
  );
}
