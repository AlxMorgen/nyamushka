import './App.css'

import ProductsBlock from './components/ProductsBlock'

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <header>
          <h1>Ты сегодня покормил кота?</h1>
        </header>
        <ProductsBlock />
      </div>
    </div>
  )
}

export default App
