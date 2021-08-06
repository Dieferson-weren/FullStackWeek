import axios from 'axios'

const API_URL = "http://192.168.1.106:8080/";

class AppDataService{
    cadastrarPessoa(pessoa){
       return axios.post(`${API_URL}pessoas`, pessoa)
        
    }

    teste(){
        return axios.get(`${API_URL}pessoas`);
    }
}

export default new AppDataService()