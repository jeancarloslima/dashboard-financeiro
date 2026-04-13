import { useEffect, useReducer } from "react";
import styles from "./App.module.css";
import FormularioTransacao from "./components/FormularioTransacao";
import ListaTransacoes from "./components/ListaTransacoes";
import ResumoFinanceiro from "./components/ResumoFinanceiro";

function iniciarTransacoes() {
  const salvas = localStorage.getItem("transacoes");
  return salvas ? JSON.parse(salvas) : [];
}

function resumoFinanceiroReducer(estadoAtual, acao) {
  switch (acao.type) {
    case "ADICIONAR_TRANSACAO":
      return [...estadoAtual, acao.payload];
    case "REMOVER_TRANSACAO":
      return estadoAtual.filter((transacao) => transacao.id !== acao.payload);
    default:
      return estadoAtual;
  }
}

function App() {
  const [transacoes, dispatch] = useReducer(
    resumoFinanceiroReducer,
    [],
    iniciarTransacoes,
  );

  useEffect(() => {
    localStorage.setItem("transacoes", JSON.stringify(transacoes));
  }, [transacoes]);

  return (
    <div className={styles.app}>
      <header>
        <div>
          <h1 className={styles.titulo}>MoneyCenter</h1>
          <ResumoFinanceiro transacoes={transacoes} />
        </div>
      </header>

      <main>
        <div>
          <FormularioTransacao dispatch={dispatch} />
          <ListaTransacoes transacoes={transacoes} dispatch={dispatch} />
        </div>
      </main>
    </div>
  );
}

export default App;
