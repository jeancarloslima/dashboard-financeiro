import styles from "./ItemTransacao.module.css";

export default function ItemTransacao() {
    return (
        <div className={styles.container}>
            <h3 className={styles.descricao}>Conta de Luz</h3>
            <h3 className={styles.valor}>R$ 150,00</h3>
            <h3 className={styles.tipo}>Saída</h3>
            <button>Deletar</button>
        </div>
    )
}