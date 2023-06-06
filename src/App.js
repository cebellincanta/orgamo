import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Time from './components/Time';
import Rodape from './components/Rodape';

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

  return (
      <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoProgramadorCadastrado={programador => setProgramadores([...programdores, programador])}/>
      <section className="times">
          <h1>Minha organização</h1>
          {times.map((time, indice) => <Time
              key={indice}
              time={time}
              programadores={programdores.filter(programador => programador.linguagem === time.nome)}/>)}
      </section>
      <Rodape />
    </div>
  );
}
export default App;
