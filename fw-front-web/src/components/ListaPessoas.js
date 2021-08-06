import { Table, Button, message } from "antd";
import React, { Component } from "react";
import PessoaDataService from "../services/PessoaDataService";

const {Column} = Table;
export default class ListaPessoa extends Component{
     constructor(props){
         super(props)
         this.state = {
             pessoa: [],
             message: null
         }
     }

     componentDidMount(){
         this.refreshPessos();
     }

     refreshPessos(){
         PessoaDataService.retriveAllPessoas().then(response => {
             console.log(response);
             this.setState({pessoa: response.data});
         })
     }

     success = (record) => {
        if(record.isVacine){
            record.isVacine = false;
        }else record.isVacine = true;
        PessoaDataService.updatePessoa(record, record.codigo);
        message.success('Status alterado com sucesso!');
    } 

     render(){
        return(
            <div className="container">
               <h2>Pessoas cadastradas</h2>
               <div className="container">
                    <Table dataSource={this.state.pessoa}>
                    <Column title="NOME" dataIndex="nome" key="nome"/>
                        <Column title="CPF" dataIndex="cpf" key="cpf"/>
                        <Column title="TELEFONE" dataIndex="telefone" key="telefone"/>
                        <Column title="EMAIL" dataIndex="email" key="email"/>
                        <Column title="VACINADA" dataIndex="isVacine" key="isVacine"
                            render={(text, record) => (<p>{String(record.isVacine)}</p>)}/>
                        <Column title="ATUALIZAR"  key="atualizar" 
                            render={(text, record) => (<Button onClick={() => this.success(record)} type="primary">Alterar Status</Button>)}/>  
                    </Table>
               </div>
            </div>
        )
     }
}