import './App.css'

function App() {
  return (
    <div className="App">
      <header>
        <div className="header-container">
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
