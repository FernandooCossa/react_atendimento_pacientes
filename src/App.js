import "./styles.css";
import { Fragment, useState } from "react";

const App = () => {
  const [pacientes, setPacientes] = useState([]);
  const [atendido, setAtendido] = useState("");
  const [nome, setNome] = useState("");

  const novoPaciente = (e) => {
    e.preventDefault();
    setPacientes([...pacientes, nome]);
    setNome("");
  };

  const novoUrgente = () => {
    setPacientes([nome, ...pacientes]);
    setNome("");
  };

  const novoAtender = () => {
    if (!pacientes.length) {
      alert("Não há Pacientes na fila de espera");
      return;
    }
    setAtendido(pacientes[0]);
    setPacientes(pacientes.slice(1));
    setNome("");
  };

  return (
    <Fragment>
      <h1>Pronto atendimento SUS</h1>
      <form onSubmit={novoPaciente}>
        <p>
          Paciente:
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <input type="submit" value="Adicionar" />
          <input
            type="button"
            id="btnUrgencia"
            value="urgência"
            onClick={novoUrgente}
          />
          <input
            type="button"
            id="btnAtender"
            value="Atender"
            onClick={novoAtender}
          />
        </p>
      </form>

      <h3>
        Em Atendimento: <span className="fonte-azul">{atendido}</span>
      </h3>
      <pre>{pacientes.map((pacientes) => pacientes + "\n")}</pre>
    </Fragment>
  );
};

export default App;
