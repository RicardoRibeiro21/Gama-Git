import React, { useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App(props) {
  const [ usuario , setUsuario ] = useState('');
  
  function handlePesquisa(){
    console.log(usuario);
  }
  
  return (
    <>
      <h1>{props.title} {usuario}</h1>
      <input name="usuario" placeholder="Usuário" value={usuario} onChange={e => setUsuario(e.target.value)}/>
      <p>{usuario}</p>
      <button type="button" onClick={handlePesquisa}>Pesquisar</button>
    </>
  );
}

export default App;
