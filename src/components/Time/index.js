import Colaborador from '../Colaborador'
import './Time.css'
import hexToRgba from 'hex-to-rgba';

const Time = ({ time, programadores, aoDeletar, mudarCor}) => {
    return (
        (programadores.length > 0) ? <section className='time' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(time.cor, '0.6') }}>
            <input value={time.cor} onChange={evento => mudarCor(evento.target.value, time.id)} type='color' className='input-color'/>
            <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
           <div className='programadores'>
               {programadores.map((programador, indice) => {
                    return <Colaborador key={indice} programador={programador} corDeFundo={time.cor}  aoDeletar={aoDeletar}/>
               })}
           </div> 
        </section>
        :''
    )
}
export default Time