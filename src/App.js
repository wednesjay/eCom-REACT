import React from 'react';
import { Header, Footer } from './components/common/index'
import { Home, ProductsPage, Contact } from './components/pages/index'



function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <ProductsPage />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
