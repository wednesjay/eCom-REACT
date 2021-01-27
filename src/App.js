import React from 'react';
import { Header, Footer } from './components/common/index'
import { Home, Products, Contact } from './components/pages/index'



function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
