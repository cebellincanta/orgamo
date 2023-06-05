import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Time from './components/Time';

function App() {

  const times = [
    {
      nome: 'C#',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Java',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Swift',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'GO',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    }
  ]

  const [programdores, setProgramadores] = useState([])
  const aoNovoProgramadorAdicionado = (programador) => {
    console.log(programador)
    setProgramadores([...programdores, programador])
  }
  return (
      <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoProgramadorCadastrado={programador => aoNovoProgramadorAdicionado(programador)}/>
      {times.map(time => <Time key={time.nome} nome={time.nome} corPrimaria={time.corPrimaria} corSecundaria={time.corSecundaria}/>)}
    </div>
  );
}
export default App;
