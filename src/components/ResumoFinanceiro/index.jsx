import { useMemo, useState } from "react";
import styles from "./ResumoFinanceiro.module.css";

export default function ResumoFinanceiro({ transacoes }) {
    const { entradas, saidas, saldo } = useMemo(() => {
        const totalEntradas = transacoes.filter((transacao) => transacao.tipo === "Entrada").reduce((acc, curr) => acc + curr.valor, 0);
        const totalSaidas = transacoes.filter((transacao) => transacao.tipo === "Saida").reduce((acc, curr) => acc + curr.valor, 0);
        
        return {
            entradas: totalEntradas,
            saidas: totalSaidas,
            saldo: totalEntradas - totalSaidas
        };
    }, [transacoes]);

    return (
        <div className={styles.container}>
            <div className={`${styles.itemResumo} ${styles.totalEntradas}`}>
                <span className={styles.tituloResumo}>Entradas</span>
                <h2>R$ {entradas.toFixed(2)}</h2>
            </div>
            <div className={`${styles.itemResumo} ${styles.totalSaidas}`}>
                <span className={styles.tituloResumo}>Saídas</span>
                <h2>R$ {saidas.toFixed(2)}</h2>
            </div>
            <div className={`${styles.itemResumo} ${styles.saldo}`}>
                <span className={styles.tituloResumo}>Saldo</span>
                <h2>R$ {saldo.toFixed(2)}</h2>
            </div>
        </div>
    )
}