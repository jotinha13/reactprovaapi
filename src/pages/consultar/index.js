import './index.scss'


import './index.scss'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Consultar , Cadastrar} from '../../api/animes';



export default function Index() {

    const [anime, setAnime] = useState([])

    const navigate = useNavigate();

    async function carregarAnimes() {
        const resp = await Consultar();
        setAnime(resp);
    }

    useEffect(() => {
        carregarAnimes();
    }, [])

    async function irCadastro(){
        navigate('/')
    }
    return (

        <main>
            <div>
            <table>
                        <thead>
                            <tr>
                                <th>ANIME</th>
                                <th>1</th>
                            </tr>
                        </thead>
                        <tbody>

                            {anime.map(item => 
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.anime}</td>
                                </tr>
                            )}  
                          
                        </tbody>
                    </table>
                    
            </div>

            <div>
                <button onClick={irCadastro}>voltar para cadastro</button>
            </div>
        </main>
    );
}