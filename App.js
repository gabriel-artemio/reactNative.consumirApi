import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const App = () => {
  const [registros, setRegistros] = useState([]);

  useEffect(() => {
    // Sua lógica para buscar registros do servidor
    fetch('http://localhost:3000/listarRegistros')
      .then(response => response.json())
      .then(data => setRegistros(data))
      .catch(error => console.error('Erro ao buscar dados:', error));
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.text}>{item.FerramentaID}</Text>
      <Text style={styles.text}>{item.Nome}</Text>
      <Text style={styles.text}>{item.QuantidadeDisponivel}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={registros}
        keyExtractor={(item) => item.FerramentaID.toString()}
        renderItem={renderItem}
        ListHeaderComponent={() => (
          <View style={styles.header}>
            <Text style={styles.headerText}>Cód.</Text>
            <Text style={styles.headerText}>Nome</Text>
            <Text style={styles.headerText}>Qtd. Disponível</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 40,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    margin: 2,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  text: {
    fontSize: 18,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#333',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;