import React, {useState} from 'react';
import * as S from './style';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  const [ usuario, setUsuario ] = useState('');
  const [ erro, setErro ] = useState(false);

  function handlePesquisa () {
    axios.get(`https://api.github.com/users/${usuario}/repos`)
      .then(response => {
        const repositories = response.data;
        const repositoriesName = [];

        repositories.map((repository) => {
          repositoriesName.push(repository.name);
        });
        localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
        setErro(false);
        navigate('/repositories');
      })
      .catch(err => {
        setErro(true);
      })
  }

  return (
    <S.HomeContainer>
      <S.Content> 
        <S.Input className='inputUsuario' placeholder='Usuario' onChange={ e => setUsuario(e.target.value)} value={usuario} />
        <S.Button type='button' onClick={handlePesquisa}>Pesquisar</S.Button>
      </S.Content>
      { erro ? <S.ErrorMsg>Ocorreu um erro. Tente novamente.</S.ErrorMsg> : '' }
    </S.HomeContainer>
  );
}

export default App;