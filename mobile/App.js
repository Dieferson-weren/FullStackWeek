import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import AppDataService from './services/AppDataService';

export default function App() {
  const [nome, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [dataNasc, setDataNasc] = useState('');
  const [idade, setIdade] = useState(0);
  const [grupo, setGrupo] = useState(null);

  const handleAdd = event => {
    const pessoa = {
      nome: nome,
      cpf: cpf,
      email: email,
      telefone: telefone,
      dataNasc: dataNasc,
      idade: idade,
      grupo: {
        codigo: grupo
      }
    }
    
    console.log(pessoa)
    //AppDataService.cadastrarPessoa(pessoa);
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Cadastro eVaccine</Text>
      <TextInput placeholder="Nome" placeholderTextColor="#fff" style={styles.input} onChangeText={setName} value={nome}/>
      <TextInput placeholder="cpf" placeholderTextColor="#fff" style={styles.input} onChangeText={setCpf} value={cpf}/>
      <TextInput placeholder="email" placeholderTextColor="#fff" style={styles.input} onChangeText={setEmail} value={email}/>
      <TextInput placeholder="telefone" placeholderTextColor="#fff" style={styles.input} onChangeText={setTelefone} value={telefone}/>
      <TextInput placeholder="Data de nascimento" placeholderTextColor="#fff" style={styles.input} onChangeText={setDataNasc} value={dataNasc}/>
      <TextInput placeholder="idade" placeholderTextColor="#fff" style={styles.input} onChangeText={setIdade} value={idade}/>
      <TextInput placeholder="Grupo" placeholderTextColor="#fff" style={styles.input} onChangeText={setGrupo} value={grupo}/>
      <Button title="Cadastrar" onPress={handleAdd}>
      </Button>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  input: {
    alignItems: 'center',
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#0D458D',
    fontSize: 20,
    color: '#fff',
    backgroundColor: '#0D458D'
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    marginVertical: 8,
  },
});
