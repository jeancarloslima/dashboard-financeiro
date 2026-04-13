import { useState } from "react";
import styles from "./ResumoFinanceiro.module.css";

export default function ResumoFinanceiro({ transacoes }) {
    const [entradas, setEntradas] = useState(transacoes.filter((transacao) => transacao.tipo === "Entrada"));
    const [saida, setSaida] = useState(transacoes.filter((transacao) => transacao.tipo === "Saída"));
    const [saldo, setSaldo] = useState(0);

    return (
        <div className={styles.container}>
            <div className={`${styles.itemResumo} ${styles.totalEntradas}`}>
                <span className={styles.tituloResumo}>Entradas</span>
                <h2></h2>
            </div>
            <div className={`${styles.itemResumo} ${styles.totalSaidas}`}>
                <span className={styles.tituloResumo}>Saídas</span>
                <h2>50</h2>
            </div>
            <div className={`${styles.itemResumo} ${styles.saldo}`}>
                <span className={styles.tituloResumo}>Saldo</span>
                <h2>50</h2>
            </div>
        </div>
    )
}