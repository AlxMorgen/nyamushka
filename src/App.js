import "./App.css";
import Header from "./components/UI/Header";

import ProductsBlock from "./components/UI/ProductsBlock";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header/>
      <ProductsBlock />
      </div>
      
    </div>
  );
}

export default App;
