import ItemTransacao from "../ItemTransacao";
import styles from "./ListaTransacoes.module.css";

export default function ListaTransacoes({ transacoes, deletarTransacao }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.titulo}>Extrato</h2>
      {transacoes.map((item) => (
        <ItemTransacao
          key={item.id}
          id={item.id}
          descricao={item.descricao}
          valor={item.valor}
          tipo={item.tipo}
          deletarTransacao={deletarTransacao}
        />
      ))}
    </div>
  );
}
