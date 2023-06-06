import Colaborador from '../Colaborador'
import './Time.css'

const Time = ({ time, programadores }) => {
    return (
        (programadores.length > 0) ? <section className='time' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: time.corPrimaria }}>
           <h3 style={{ borderColor: time.corSecundaria }}>{time.nome}</h3>
           <div className='programadores'>
               {programadores.map((programador, indice) => <Colaborador key={indice} programador={programador} corDeFundo={time.corSecundaria} />)}
           </div> 
        </section>
        :''
    )
}
export default Time