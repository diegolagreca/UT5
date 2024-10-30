import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function App() {
  const [contador, setContador] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.contadorText}>Contador: {contador}</Text>
      <View style={styles.botonesContainer}>
        <Button title="Incrementar" onPress={() => setContador(contador + 1)} />
        <Button title="Disminuir" onPress={() => setContador(contador - 1)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  contadorText: {
    fontSize: 32,
    marginBottom: 20,
  },
  botonesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
  },
});
