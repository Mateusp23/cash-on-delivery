import React, { useEffect } from 'react';
import { fetchPageData, buyProduct } from './services/productService';
import './App.css'

function App() {
  useEffect(() => {
    // teste get
    fetchPageData()
      .then(data => console.log('Dados da página:', data))
      .catch(err => console.error('Erro:', err));
  }, []);

  return <div>Projeto configurado com APIs!</div>;
}

export default App
