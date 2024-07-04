import { useEffect, useState } from 'react';
import './App.css';
import Tabela from './components/Tabela';


function App() {


  return (
    <div className='App'>
      <h1>Lista de Ocorrências</h1>
      <Tabela/>
    </div>
  );
};

export default App;
