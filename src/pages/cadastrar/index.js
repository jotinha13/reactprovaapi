import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.scss'


import { Cadastrar } from '../../api/animes';
import { toast } from 'react-toastify';

export default function Index() {

    const [nome, setNome] = useState('');
    const [id, setId] = useState(0);    
    const navigate = useNavigate();

    async function cadastrarClick(){
        
        try{
            if (id === 0){
                const resp = await Cadastrar(nome);
                setId(resp.id);
                toast.dark('anime cadastrado!!!')
            }

            else{
                toast.error('Tente fazer um novo cadastro')
            }
        }catch(err){
            if(err.response){
            toast.error(err.response.data.erro)
            }        
            else {
                toast.error(err.message);
            }
    }
}

    async function irConsulta(){
        navigate('/consultar')
    }

    function novoClick(){
        setId(0);
        setNome('');
    }

    return (

        <main className='pai'>
            
            <div>
                <h1>Cadastro</h1>
            </div>

            <div className='inserir'>
                <label>insira o nome do anime:</label>
                <input type='text' placeholder='Nome do anime' value={nome} onChange={e => setNome(e.target.value)}/>
            </div>

            <div>
                <button onClick={cadastrarClick}>Cadastrar</button>
                <button onClick={irConsulta}>Consultar os animes</button>
                <button onClick={novoClick  }>limpar</button>
            </div>
        </main>
    );
}