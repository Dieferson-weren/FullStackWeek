import axios from 'axios';

const API_URL = 'http://192.168.1.106:8080/';
 
class PessoaDataServie{
    retriveAllPessoas(){
        return axios.get(`${API_URL}pessoas`)
    }

    updatePessoa(pessoa, codigo){
        return axios.put(`${API_URL}pessoas/${codigo}`, pessoa);
    }
}


export default new PessoaDataServie();