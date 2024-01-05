import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const App = () => {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');

  const handleInserirRegistro = () => {
    fetch('http://seu_ip:3000/inserirRegistro', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nome, idade }),
    })
    .then(response => {
      if (response.status === 201) {
        console.log('Registro inserido com sucesso');
        // Atualize a lista de registros, se necessário
      } else {
        console.error('Erro ao inserir registro');
      }
    })
    .catch(error => console.error('Erro na solicitação:', error));
  };

  return (
    <View>
      <TextInput
        placeholder="Nome"
        value={nome}
        onChangeText={text => setNome(text)}
      />
      <TextInput
        placeholder="Idade"
        value={idade}
        onChangeText={text => setIdade(text)}
      />
      <Button title="Inserir Registro" onPress={handleInserirRegistro} />
    </View>
  );
};

export default App;