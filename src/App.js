import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Time from './components/Time';
import Rodape from './components/Rodape';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [times, setTimes]  = useState([
    {
      id: uuidv4(),
      nome: 'C#',
      cor: '#57C278'
    },
    {
      id: uuidv4(),
      nome: 'Java',
      cor: '#82CFFA'
    },
    {
      id: uuidv4(),
      nome: 'Swift',
      cor: '#A6D157'       
    },
    {
      id: uuidv4(),
      nome: 'GO',
      cor: '#E06B69'
    }
  ])

  const [programdores, setProgramadores] = useState([])

  function deletarProgramador(id) {
    setProgramadores(programdores.filter(programador => programador.id !== id))
  }

  function mudarCorDoTime (cor, id) {
    setTimes(times.map(time => {
      if (time.id === id) {
        time.cor = cor;
      }
      return time;
    }))
  }
  function cadastrarTime(novoTime) {
    setTimes([...times, {...novoTime, id: uuidv4()}])
  }

  return (
      <div className="App">
      <Banner />
      <Formulario
          cadastrarTime={cadastrarTime}
          times={times.map(time => time.nome)}
          aoCadastrar={programador => setProgramadores([...programdores, programador])}
      />
      <section className="times">
          <h1>Minha organização</h1>
          {times.map((time, indice) => <Time
              mudarCor={mudarCorDoTime}
              key={indice}
              time={time}
              programadores={programdores.filter(programador => programador.linguagem === time.nome)}
              aoDeletar={deletarProgramador}
          />)}
      </section>
      <Rodape />
    </div>
  );
}
export default App;
