import { useRef, useState } from "react";
import styles from "./FormularioTransacao.module.css";

export default function FormularioTransacao({ dispatch }) {
  const [formularioAberto, setFormularioAberto] = useState(false);
  const inputDescricao = useRef(null);
  const inputValor = useRef(null);
  const [tipo, setTipo] = useState("Entrada");

  return (
    <div className={styles.container}>
      {!formularioAberto && (
        <button
          onClick={() => setFormularioAberto(true)}
          className={styles.botaoAbreFormulario}
        >
          Adicionar Transação
        </button>
      )}
      {formularioAberto && (
        <form
          className={styles.formulario}
          onSubmit={(e) => {
            e.preventDefault();

            const descricaoDigitada = inputDescricao.current.value;
            const valorDigitado = Number(inputValor.current.value);

            const novaTransacao = {
              id: Date.now(),
              descricao: descricaoDigitada,
              valor: valorDigitado,
              tipo: tipo
            }

            dispatch({ type: "ADICIONAR_TRANSACAO", payload: novaTransacao });
          }}
        >
          <div className={styles.containerInputFormulario}>
            <label className={styles.label} htmlFor="descricao">
              Descrição
            </label>
            <input
              ref={inputDescricao}
              className={styles.inputDescricao}
              type="text"
              name="descricao"
              id="descricao"
              autoFocus
              required
            />
          </div>
          <div className={styles.containerInputFormulario}>
            <label htmlFor="valor">Valor</label>
            <input
              ref={inputValor}
              className={styles.inputValor}
              type="number"
              name="valor"
              id="valor"
              required
            />
          </div>
          <div className={styles.containerInputFormulario}>
            <label className={styles.label}>Tipo</label>
            <button
              onClick={(e) => {
                e.preventDefault();
                setTipo("Entrada");
              }}
              className={`${styles.btnTipo} ${styles.btnEntrada} ${tipo === "Entrada" ? styles.ativo : ""}`}
            >
              Entrada
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setTipo("Saida");
              }}
              className={`${styles.btnTipo} ${styles.btnSaida} ${tipo === "Saida" ? styles.ativo : ""}`}
            >
              Saída
            </button>
          </div>
          <div className={styles.containerBotoesFormulario}>
            <button
              className={`${styles.btnFormulario} ${styles.btnCancelar}`}
              onClick={(e) => {
                e.preventDefault();
                setFormularioAberto(false);
              }}
            >
              Cancelar
            </button>
            <button
              className={`${styles.btnFormulario} ${styles.btnAdicionar}`}
              type="submit"
            >
              Adicionar
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
