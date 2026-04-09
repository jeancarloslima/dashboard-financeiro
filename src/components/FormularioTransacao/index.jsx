import { useState } from "react";
import styles from "./FormularioTransacao.module.css";

export default function FormularioTransacao() {
    const [formularioAberto, setFormularioAberto] = useState(false);

    return (
        <div className={styles.container}>
            {!formularioAberto && <button onClick={() => setFormularioAberto(true)} className={styles.botaoAbreFormulario}>Adicionar Transação</button>}
            {formularioAberto && (
                <form className={styles.formulario}>
                    <div className={styles.containerInputFormulario}>
                        <label htmlFor="descricao">Descrição</label>
                        <input type="text" name="descricao" id="descricao" autoFocus required />
                    </div>
                    <div className={styles.containerInputFormulario}>
                        <label htmlFor="valor">Valor</label>
                        <input type="number" name="valor" id="valor" required />
                    </div>
                    <div className={styles.containerInputFormulario}>
                        <label>Tipo</label>
                        <button>Entrada</button>
                        <button>Saída</button>
                    </div>
                    <div className={styles.containerBotoesFormulario}>
                        <button>Cancelar</button>
                        <button type="submit">Adicionar</button>
                    </div>
                </form>
            )}
        </div>
    )
}