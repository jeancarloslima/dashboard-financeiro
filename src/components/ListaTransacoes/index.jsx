import ItemTransacao from "../ItemTransacao";
import styles from "./ListaTransacoes.module.css";

export default function ListaTransacoes() {
    return (
        <div className={styles.container}>
            <ItemTransacao />
        </div>
    )
}