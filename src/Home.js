import React, {useState} from 'react';
import axios from 'axios';

function App() {

  const [ usuario, setUsuario ] = useState('');

  function handlePesquisa () {
    axios.get(`https://api.github.com/users/${usuario}/repos`)
      .then(response => console.log(response.data))
  }

  return (
    <> 
      <input className='inputUsuario' placeholder='Usuario' onChange={ e => setUsuario(e.target.value)} value={usuario} />
      <button type='button' onClick={handlePesquisa}>Pesquisar</button>
    </>
  );
}

export default App;