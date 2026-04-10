import ItemTransacao from "../ItemTransacao";
import styles from "./ListaTransacoes.module.css";

export default function ListaTransacoes() {
    return (
        <div className={styles.container}>
            <h2 className={styles.titulo}>Extrato</h2>
            <ItemTransacao descricao="Salário" valor={5000} tipo="Entrada" />
            <ItemTransacao descricao="Conta de Luz" valor={150} tipo="Saída" />
        </div>
    )
}