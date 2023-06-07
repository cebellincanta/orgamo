import  { AiFillCloseCircle} from "react-icons/ai";
import './Colaborador.css'

const Colaborador = ({programador, corDeFundo, aoDeletar}) => {
    return (
        <div className='colaborador'>
            <AiFillCloseCircle
                size={25}
                className='deletar'
                onClick={ () => aoDeletar(programador.id)}
            />
            <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
                <img src={programador.imagem} alt={programador.nome}></img>
            </div>
            <div className='rodape'>
                <h4>{programador.nome}</h4>
                <h4>{programador.sobrenome}</h4>
            </div>
        </div>

    )

}
export default Colaborador