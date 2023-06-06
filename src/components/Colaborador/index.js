import './Colaborador.css'

const Colaborador = ({programador, corDeFundo}) => {
    return (
        <div className='colaborador'>
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