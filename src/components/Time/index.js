import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {

    const css = { backgroundColor: props.corSecundaria}
    return (
        
        (props.programadores.length > 0) ? <section className='time' style={css}>
            <h3 style={{ borderColor: props.corPrimaria}}>{props.nome}</h3>
           <div className='programadores'>
                {props.programadores.map(programador => <Colaborador corDeFundo={props.corPrimaria} key={programador.nome} nome={programador.nome} sobrenome={programador.sobrenome} imagem={programador.imagem}/>)}
           </div> 
        </section>
        :''
    )
}

export default Time