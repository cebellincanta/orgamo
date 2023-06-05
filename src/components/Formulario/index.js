import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react'

const Formulario = (props) => {
    
    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [telefone, setTelefone] = useState('')
    const [cpf, setCpf] = useState('')
    const [imagem, setImagem] = useState('')
    const [linguagem, setLinguagem] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoProgramadorCadastrado({
            nome: nome, 
            sobrenome: sobrenome, 
            telefone: telefone, 
            cpf: cpf, 
            imagem: imagem,
            linguagem: linguagem
        })
        setNome('')
        setSobrenome('')
        setCpf('')
        setTelefone('')
        setImagem('')
    }
    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>  
                <h2>Preencha dados basicos para se inscrever no site</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Sobrenome"  
                    placeholder="Digite seu sobrenome"
                    valor={sobrenome}
                    aoAlterado={valor => setSobrenome(valor)}
                    />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Telefone" 
                    placeholder="Digite seu telefone"
                    valor={telefone}
                    aoAlterado={valor => setTelefone(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="CPF" 
                    placeholder="Digite o CPF"
                    valor={cpf}
                    aoAlterado={valor => setCpf(valor)}
                />
                 <CampoTexto 
                    obrigatorio={true} 
                    label="Imagem" 
                    placeholder="Url da imagenm"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Linguagem" 
                    itens={props.times} 
                    valor={linguagem}
                    aoAlterado={valor => setLinguagem(valor)}
                    />
                <Botao>
                    Adicionar ao time
                </Botao> 
            </form>
        </section>
    )
}

export default Formulario   