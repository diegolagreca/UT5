import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; 
import { styles } from './styles'; 

export default function App() {
  const [contador, setContador] = useState(0);

  return (
    <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.contadorText}>Contador: {contador}</Text>
        <View style={styles.botonesContainer}>
          <TouchableOpacity
            style={[styles.boton, styles.botonIncrementar]}
            onPress={() => setContador(contador + 1)}
          >
            <Text style={styles.botonTexto}>+ Incrementar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.boton, styles.botonDisminuir]}
            onPress={() => setContador(contador - 1)}
          >
            <Text style={styles.botonTexto}>- Disminuir</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}