import React from "react";
import "./resultado.css";

export default function ResultadoImc({ imc }) {

  let faixaImc;

  faixaImc =
    imc < 18.5
      ? "baixo peso"
      : imc < 24.9
      ? "peso adequado"
      : imc < 29.9
      ? "sobrepeso"
      : imc < 34.9
      ? "obsidade grau 1"
      : imc < 39.9
      ? "obsidade grau 2"
      : "obsidade extrema";

  return (
    <div className="resultado">
      <p>seu imc é {imc.toFixed(2)}</p>
      <p>sua faixa de IMC é: {faixaImc}</p>
    </div>
  );
}
