import FormularioImc from "./components/FormularioImc";
import CabecalhoImc from "./components/CabecalhoImc";
import "./imc.css";
import Rodape from "./components/Rodape";

function App() {
  return (
    <>
      <CabecalhoImc />
      <FormularioImc />
      <Rodape/>
    </>
  );
}

export default App;
