import styles from "./ItemTransacao.module.css";

export default function ItemTransacao({ descricao, valor, tipo }) {
    const isEntrada = tipo === "Entrada";

    return (
        <div 
            className={styles.container} 
            style={{ borderLeftColor: isEntrada ? "#8ac926" : "#ff595e" }}
        >
            <h3 className={styles.descricao}>{descricao}</h3>
            <h3 className={styles.valor}>
                R$ {Number(valor).toFixed(2).replace(".", ",")}
            </h3>
            <span className={`${styles.tipo} ${isEntrada ? styles.tipoEntrada : styles.tipoSaida}`}>
                {tipo}
            </span>
            <button className={styles.btnDeletar} title="Deletar transação">
                🗑️
            </button>
        </div>
    )
}