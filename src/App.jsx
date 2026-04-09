import styles from './App.module.css';
import FormularioTransacao from './components/FormularioTransacao'
import ListaTransacoes from './components/ListaTransacoes'
import ResumoFinanceiro from './components/ResumoFinanceiro'

function App() {
  return (
    <div className={styles.app}>
      <header>
        <div className="header-container">
          <h1 className={styles.titulo}>MoneyCenter</h1>
          <ResumoFinanceiro />
        </div>
      </header>

      <main>
        <div className="main-container">
          <FormularioTransacao />
          <ListaTransacoes />
        </div>
      </main>
    </div>
  )
}

export default App
