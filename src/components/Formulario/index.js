import './Formulario.css'
import Campo from '../Campo'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react'

const Formulario = ( { aoCadastrar, times, cadastrarTime }) => {
    console.log(cadastrarTime)
    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [telefone, setTelefone] = useState('')
    const [cpf, setCpf] = useState('')
    const [imagem, setImagem] = useState('')
    const [linguagem, setLinguagem] = useState('')

    const [nomeTime, setNomeTime] = useState('')
    const [corTime, setCorTime] = useState('')

    const aoSubmeter = (evento) => {
        evento.preventDefault()
        aoCadastrar({
            nome,
            sobrenome,
            telefone,
            cpf,
            imagem,
            linguagem
        })
        setNome('')
        setSobrenome('')
        setCpf('')
        setTelefone('')
        setImagem('')
    }
    return (
        <section className='formulario'>
            <form onSubmit={aoSubmeter}>
                <h2>Preencha dados basicos para se inscrever no site</h2>
                <Campo
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome..."
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <Campo
                    obrigatorio={true}
                    label="Sobrenome"
                    placeholder="Digite seu sobrenome..."
                    valor={sobrenome}
                    aoAlterado={valor => setSobrenome(valor)}
                    />
                <Campo
                    obrigatorio={true}
                    label="Telefone"
                    placeholder="Digite seu telefone..."
                    valor={telefone}
                    aoAlterado={valor => setTelefone(valor)}
                />
                <Campo
                    obrigatorio={true}
                    label="CPF"
                    placeholder="Digite o CPF..."
                    valor={cpf}
                    aoAlterado={valor => setCpf(valor)}
                />
                 <Campo
                    obrigatorio={true}
                    label="Imagem"
                    placeholder="Url da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Linguagem"
                    itens={times}
                    valor={linguagem}
                    aoAlterado={valor => setLinguagem(valor)}
                    />
                <Botao>
                    Adicionar ao time
                </Botao>
            </form>
            <form onSubmit={(evento) => {
                evento.preventDefault()
                cadastrarTime({nome: nomeTime, cor: corTime})
            }}>
                <h2>Preencha dados para criar um novo time.</h2>
                <Campo
                    obrigatorio
                    label="Nome"
                    placeholder="Digite nome do time"
                    valor={nomeTime}
                    aoAlterado={valor => setNomeTime(valor)}
                />
                <Campo
                    obrigatorio
                    type='color'
                    label="Cor"
                    placeholder="Digite cor do time"
                    valor={corTime}
                    aoAlterado={valor => setCorTime(valor)}
                />
                <Botao>
                    Criar um novo time
                </Botao>
            </form>
        </section>
    )
}

export default Formulario