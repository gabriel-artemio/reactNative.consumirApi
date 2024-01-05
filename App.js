import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

const App = () => {
  const [registros, setRegistros] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/listarRegistros')
      .then(response => response.json())
      .then(data => setRegistros(data))
      .catch(error => console.error('Erro ao buscar dados:', error));
  }, []);

  return (
    <View>
      <Text>Lista de Ferramentas</Text>
      {registros && registros.map(registro => (
        <Text key={registro.FerramentaID}><b>Cód. : </b>{registro.FerramentaID} - <b>Nome: </b>{registro.Nome}</Text>
      ))}
    </View>
  );
};

export default App;