import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export async function Cadastrar(nome){
    const resposta = await api.post('/anime', {
        nome: nome
    })
    return resposta.data;
}

export async function Consultar(){
    const resposta = await api.get('/anime');
    return resposta.data;
}